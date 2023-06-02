
import {Text, Plane} from '@react-three/drei'
import {Vector3, BufferGeometry, LineBasicMaterial} from 'three'
import * as THREE from 'three'

export default function LandmarkOverlay () {
    return (
        <>
            <Plane args={[75, 75]} position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial attach="material" transparent opacity={0.0} />
                <MapLabel position={[3, 20, 2.01]}> Utah </MapLabel>
                <MapLabel position={[-18, 1, 2.01]}> California </MapLabel>
                <MapLabel position={[-15, 14, 2.01]}> Nevada </MapLabel>
                <MapLabel position={[-7, -20, 2.01]}> Mexico </MapLabel>
                <MapLabel position={[20, 3, 2.01]}> New Mexico </MapLabel>
                <MapLabel position={[22, 21, 2.01]}> Colorado </MapLabel>
                <Border start={[-12, 4, 1]} stop={[-35, 30, 1]}/>
                <Border start={[14.3, 16.2, 1]} stop={[40, 16.2, 1]}/>
                <Border start={[14.3, 16.2, 1]} stop={[14.3, 40, 1]}/>
                <Border start={[14.2, -16.17, 1]} stop={[20, -16.17, 1]}/>
                <Border start={[20, -16.17, 1]} stop={[20, -13, 1]}/>
                <Border start={[20, -13, 1]} stop={[40, -13, 1]}/>
                <Border start={[-9.7, 16.2, 1]} stop={[-9.7, 40, 1]}/>
                <Border start={[-12, -8.5, 1]} stop={[-45, -12, 1]}/>
            </Plane>
        </>
    )
}

const Border = ({ start, stop }) => {
    const points = [new Vector3(...start), new Vector3(...stop)];
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({ color: 'aliceblue' });

    return (
        <primitive object={new THREE.Line(geometry, material)} />
    );
};

//Just to make the Plane cleaner and shorter

const MapLabel = ({children, ...props}) =>{
    return (
        <Text
            color="aliceblue"
            scale={[1, 1, 1]}
            anchorX="center"
            anchorY="middle"
            {...props}
        >
            {children}
        </Text>
    )
}