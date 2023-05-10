import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';


export default function SceneDisplay () {

    return(
        <ThreeContainer>
            <Canvas>
                <ambientLight
                    color={0xf5aa42}
                    position={[0, 3, 5]}
                />
                <OrbitControls
                    maxDistance={10}
                />

            </Canvas>
        </ThreeContainer>
    )
}

const ThreeContainer = styled.div`
    border: 2px solid red;
    width: 60%;
`;