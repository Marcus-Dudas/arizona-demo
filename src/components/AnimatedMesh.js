import { useSpring, animated } from 'react-spring';
import { Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function AnimatedMesh({mesh, name, coords, setText, handleCamera, target}) {
    const [tipVisible, setTipVisible] = useState(false);
    const [selected, setSelected] = useState(false)
    console.log(`[${target.name}] === [${name} County]`, target.name === `${name} County`);
    //at time of render, selection via handleClick does not cause re-render.
    //This calls for useEffect() for selected state changes

    useEffect( ()=>{
        showSelection(target)
    }, [target]
    )

    const showSelection = (target) =>{
        //asynchronicity preventing truthy outcome
        if((target.name) === (`${name} County`)) {
            setSelected(true)
        } else {
            setSelected(false)
            mesh.material.color.set(0xf5e7c1)
        }
        console.log('Selected? ', selected)
    }
    
    const handlePointerOver = (event) => {
        event.stopPropagation();
        if (!selected) {
            event.object.material.color.set(0xffa75e)
        }
        setTipVisible(true);
    };
    const handlePointerOut = (event) => {
        if (!selected){
        event.object.material.color.set(0xf5e7c1)
        }
        setTipVisible(false);
    };
    const handleClick = (event) => {
        //console.log('Clicked', event.object);
        
        //handleCamera(coords)
        setText(name)
    };
    

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
