import styled from 'styled-components'

import { Canvas} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF, SpotLight} from '@react-three/drei'
import { Suspense, useState, useEffect} from 'react'
import AnimatedMesh from './AnimatedMesh'
import CitiesOverlay from './CitiesOverlay'
import ResOverlay from './ResOverlay'
import StatesOverlay from './StatesOverlay'
import InterstateOverlay from './InterstateOverlay'



export default function SceneDisplay ({setText, target, visibility}) {
    const [camera, setCamera] = useState([0, 40, 3]) // extracted from PerspectiveCamera for coordinate translations
    const {nodes} = useGLTF('/models/Arizona.glb', true)
    const [visible, setVisible] = useState(null) //paired with useEff. this is an über quick fix to prevent meshes from being caught up in overlay re-renders.
    const handleCanvasClick = (event) => {
        // If the event is not stopped, no mesh was clicked
        if (!event.isPropagationStopped()) {
            setText('Arizona');
        }
    };

    const handleCamera = (coords) => {
        //const cameraCoords = [transX(coords[0]), transY(coords[1]), transz(coords[2])]
        //setCamera(cameraCoords)
    }
    
    //this iterates through object nodes and replaces them with copies to unbind meshes from each other so that pointer effects are confined to the mesh interacted with, not the entire group.
    for (let nodeName in nodes) {
        if (nodes[nodeName].material) {
            nodes[nodeName].material = nodes[nodeName].material.clone()
        }};
    useEffect(()=>{
        setVisible(visibility)
    }, [visibility])
    //NOTICE: Animated Mesh props are growing
    return(
        <ThreeContainer>
            <Suspense fallback={'Loading models...'}>
                <Canvas onPointerDown={handleCanvasClick}>
                    <PerspectiveCamera
                        makeDefault={true}
                        position={camera}
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
                    <CitiesOverlay visibility={visible} />
                    <ResOverlay visibility={visible}/>
                    <StatesOverlay visibility={visible} />
                    <InterstateOverlay visibility={visible} />
                    <AnimatedMesh mesh={nodes.Apache} name={"Apache"} coords={[11.5,3,-6]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={false}/>
                    <AnimatedMesh mesh={nodes.Cochise} name={"Cochise"} coords={[10, 3, 11]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={false} />
                    <AnimatedMesh mesh={nodes.Navajo} name={"Navajo"} coords={[7, 3, -7]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={false}/>
                    <AnimatedMesh mesh={nodes.Maricopa} name={"Maricopa"} coords={[-5,3,5]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.Coconino} name={"Coconino"} coords={[1,3,-10]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.Gila} name={"Gila"} coords={[5,3,1]} setText={setText} handleCamera={handleCamera} visibility={visible} target={target} gain={false} />
                    <AnimatedMesh mesh={nodes.Yavapai} name={"Yavapai"} coords={[-5,3,-2]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.Greenlee} name={"Greenlee"} coords={[12.5, 3, 3]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.Graham} name={"Graham"} coords={[8.5, 3, 5]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.LaPaz} name={"La Paz"} coords={[-8.3,3, -.5]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={false}/>
                    <AnimatedMesh mesh={nodes.Pinal} name={"Pinal"} coords={[2,3,7]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.Yuma} name={"Yuma"} coords={[-9,3,8]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.Pima} name={"Pima"} coords={[2,3,11]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.SantaCruz} name={"Santa Cruz"} coords={[4.2, 3, 13.15]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>
                    <AnimatedMesh mesh={nodes.Mohave} name={"Mohave"} coords={[-10.5,3,-9]} setText={setText} handleCamera={handleCamera} target={target} visibility={visible} gain={true}/>

                </Canvas>
            </Suspense>
        </ThreeContainer>
    )
}
const ThreeContainer = styled.div`
    width: 55%;
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

//camera transformation helpers:

const transformX = (coord) =>{
    return (coord)
}
const transformY = (coord) =>{
    return (coord)
}
const transformZ = (coord) =>{
    return (coord)
}