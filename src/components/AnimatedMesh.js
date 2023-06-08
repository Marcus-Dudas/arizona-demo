import { useSpring, animated } from 'react-spring';
import { Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function AnimatedMesh({mesh, name, coords, setText, handleCamera, target, visibility={'Movement': false}, gain= true}) {
    const [tipVisible, setTipVisible] = useState(false);
    const [selected, setSelected] = useState(false);
    const net = gain ? 0x32a852 : 0xa83e32;
    const pOut = visibility.Movement ? net : 0xf5e7c1;
    const showSelection = (target) =>{
        //render order seems to have prevented truthy outcome so added to above useEffect()
        //each mesh is recieving prop and evaluating whether it is selected.
        if((target.name) === (`${name} County`)) {
            setSelected(true)
        } else {
            setSelected(false)
            mesh.material.color.set(pOut)
        }
    }

    const handlePointerOver = (event) => {
        event.stopPropagation();
        if (!selected) {
            event.object.material.color.set(0xffa75e)
        } else if (selected) {
            event.object.material.color.set(0xffa75e)
        }
        setTipVisible(true);
    };
    const handlePointerOut = (event) => {
        event.stopPropagation();
        if (!selected){
        event.object.material.color.set(pOut)
        }
        setTipVisible(false);
    };
    const handleClick = (event) => {
        event.stopPropagation();
        //handleCamera(coords)
        setText(name)
    };
    
    useEffect( ()=>{
        showSelection(target)
    }, [target]
    );
    
    useEffect(() => {
        if (visibility.Movement) {
            mesh.material.color.set(net);
        } else if (!selected) {
            mesh.material.color.set(0xf5e7c1);
        } else if (selected) {
            mesh.material.color.set(0xffa75e);
        }
    }, [visibility]); 

    return (
        <>
            <primitive 
                object={mesh} 
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                onClick={handleClick} 
            />
            {tipVisible && 
                <Html style={{pointerEvents:'none'}}position={coords}>
                    <StyledText>
                        {name}
                    </StyledText>
                </Html>
            }
        </>
    );
}

const StyledText = styled.p`
    color: aliceblue;
    text-align: center;
    font-weight: 800;
`;
