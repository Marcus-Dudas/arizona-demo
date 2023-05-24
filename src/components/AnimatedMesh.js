import { useSpring, animated } from 'react-spring';
import { Html } from '@react-three/drei';
import { useState } from 'react';
import styled from 'styled-components';

export default function AnimatedMesh({mesh, name, coords, setText}) {
    const [tipVisible, setTipVisible] = useState(false);

    const handlePointerOver = (event) => {
        event.stopPropagation();
        event.object.material.color.set(0xffa75e);
        setTipVisible(true);
    };
    const handlePointerOut = (event) => {
        event.object.material.color.set(0xf5e7c1);
        setTipVisible(false);
    };
    const handleClick = (event) => {
        console.log('Clicked', event.object);
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
