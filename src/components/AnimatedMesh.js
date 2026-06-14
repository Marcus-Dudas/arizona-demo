import { Html } from '@react-three/drei'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export default function AnimatedMesh({mesh, name, coords, setText, handleCamera, target, visibility={'Movement': false}, gain= true}) {
    const [tipVisible, setTipVisible] = useState(false)
    const [selected, setSelected] = useState(false)
    const net = gain ? 0x32a852 : 0xa83e32
    const pOut = visibility.Movement ? net : 0xf5e7c1

    const showSelection = (target) =>{
        if((target.name) === (`${name} County`)) {
            setSelected(true)
        } else {
            setSelected(false)
            mesh.material.color.set(pOut)
        }
    }

    const handlePointerOver = (event) => {
        event.stopPropagation()
        if (!selected) {
            event.object.material.color.set(0xffa75e)
        } else if (selected) {
            event.object.material.color.set(0xffa75e)
        }
        setTipVisible(true)
    }

    const handlePointerOut = (event) => {
        event.stopPropagation()
        if (!selected){
            event.object.material.color.set(pOut)
        }
        setTipVisible(false)
    }

    const handleClick = (event) => {
        event.stopPropagation()
        //handleCamera(coords)
        setText(name)
    }
    
    useEffect( ()=>{
        showSelection(target)
    }, [target]
    )
    
    useEffect(() => {
        if (visibility.Movement) {
            mesh.material.color.set(net)
        } else if (!selected) {
            mesh.material.color.set(0xf5e7c1)
        } else if (selected) {
            mesh.material.color.set(0xffa75e)
        }
    }, [visibility]) 

    return (
        <>
            <primitive 
                object={mesh} 
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={handleClick} 
            />
            {tipVisible && 
                <Html style={{pointerEvents:'none'}} position={coords}>
                    <StyledText>
                        {name}
                    </StyledText>
                </Html>
            }
        </>
    )
}

const StyledText = styled.p`
    margin: 0;
    padding: 6px 9px 5px;
    color: rgba(245, 253, 253, 0.94);
    border-radius: 3px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: .72rem;
    line-height: 1rem;
    font-weight: 800;
    letter-spacing: 1.2px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
`