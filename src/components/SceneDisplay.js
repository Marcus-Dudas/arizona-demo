import styled from 'styled-components'

import { Canvas} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF, SpotLight} from '@react-three/drei'
import { Suspense, useState} from 'react'
import AnimatedMesh from './AnimatedMesh'



export default function SceneDisplay ({setText}) {
    const {nodes} = useGLTF('/models/Arizona.glb', true)
    
    //this iterates through object nodes and replaces them with copies to unbind meshes from each other so that pointer effects are confined to the mesh interacted with, not the entire group.
    for (let nodeName in nodes) {
        if (nodes[nodeName].material) {
            nodes[nodeName].material = nodes[nodeName].material.clone()
        }};

    return(
        <ThreeContainer>
            <Suspense fallback={'Loading models...'}>
                <Canvas>
                    <PerspectiveCamera
                        makeDefault={true}
                        position={[0, 40, 3]}
                        fov={60}
                        near={0.1}
                        far={1000}  />
                    <OrbitControls />
                    <ambientLight
                        intensity={.4}
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
                    <AnimatedMesh mesh={nodes.Apache} name={"Apache"} coords={[11.5,3,-6]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Cochise} name={"Cochise"} coords={[10,3,12]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Navajo} name={"Navajo"} coords={[7,3,-4]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Maricopa} name={"Maricopa"} coords={[-5,3,5]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Coconino} name={"Coconino"} coords={[1,3,-10]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Gila} name={"Gila"} coords={[5,3,1]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Yavapai} name={"Yavapai"} coords={[-5,3,-3]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Greenlee} name={"Greenlee"} coords={[12.5,3,4]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Graham} name={"Graham"} coords={[10,3,7]} setText={setText} />
                    <AnimatedMesh mesh={nodes.LaPaz} name={"La Paz"} coords={[-9,3,1]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Pinal} name={"Pinal"} coords={[2,3,7]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Yuma} name={"Yuma"} coords={[-9,3,8]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Pima} name={"Pima"} coords={[4,3,10]} setText={setText} />
                    <AnimatedMesh mesh={nodes.SantaCruz} name={"Santa Cruz"} coords={[5.7,3,14]} setText={setText} />
                    <AnimatedMesh mesh={nodes.Mohave} name={"Mohave"} coords={[-10.5,3,-7]} setText={setText} />

                </Canvas>
            </Suspense>
        </ThreeContainer>
    )
}
const ThreeContainer = styled.div`
    width: 60%;
    height: 100%;

    @media (max-width: 1366px) {
        
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 767px) {
        width: 100%;
        height: 70%;
      }
`;