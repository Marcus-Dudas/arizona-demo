import styled from 'styled-components'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF, SpotLight} from '@react-three/drei'
import { Suspense } from 'react'



export default function SceneDisplay () {
    const {nodes} = useGLTF('/models/Arizona.glb', true)
  

    return(
        <ThreeContainer>
            <Suspense fallback={'Loading models...'}>
                <Canvas>
                    <PerspectiveCamera
                        makeDefault={true}
                        position={[0, 40, 0]}
                        fov={60}
                        near={0.1}
                        far={1000}  />
                    <OrbitControls />
                    <ambientLight
                        intensity={.7}
                        color={0xf5aa42}
                        position={[2, 5, 7]}
                    />
                    <SpotLight 
                        position={[-70, 5, 40]}
                        color={0xffc2a1}
                        distance={300}
                        angle={0.5}
                        attenuation={50}
                        anglePower={80}
                    />
                    <SpotLight 
                        position={[70, 10, -45]}
                        color={0x07b2b8}
                        distance={300}
                        angle={0.5}
                        attenuation={50}
                        anglePower={80}
                    />
                    <primitive object={nodes.Apache} />
                    <primitive object={nodes.Cochise} />
                    <primitive object={nodes.Navajo} />
                    <primitive object={nodes.Maricopa} />
                    <primitive object={nodes.Coconino} />
                    <primitive object={nodes.Gila} />
                    <primitive object={nodes.Yavapai} />
                    <primitive object={nodes.Greenlee} />
                    <primitive object={nodes.Graham} />
                    <primitive object={nodes.LaPaz} />
                    <primitive object={nodes.Pinal} />
                    <primitive object={nodes.Yuma} />
                    <primitive object={nodes.Pima} />
                    <primitive object={nodes.SantaCruz} />
                    <primitive object={nodes.Mohave} />
                    
                </Canvas>
            </Suspense>
        </ThreeContainer>
    )
}
const ThreeContainer = styled.div`
    
    width: 60%;
`;