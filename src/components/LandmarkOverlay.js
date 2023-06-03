
import {Text, Plane} from '@react-three/drei'
import {Vector3, BufferGeometry, LineBasicMaterial, PointsMaterial, Points} from 'three'
import * as THREE from 'three'
/*
todo: which border goes where? Provisional list in this comment corresponding to order of Borders below:
*/
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

                <Landmark position={[20, 5, 4]}>Phoenix</Landmark>
                <Landmark position={[20, 5, 4]}>Quartzsite</Landmark>
                <Landmark position={[20, 5, 4]}>Lake Havasu</Landmark>
                <Landmark position={[20, 5, 4]}>Sedona</Landmark>
                <Landmark position={[20, 5, 4]}>St. John's</Landmark>
                <Landmark position={[20, 5, 4]}>Bisbee</Landmark>
                <Landmark position={[20, 5, 4]}>Flagstaff</Landmark>
                <Landmark position={[20, 5, 4]}>Globe</Landmark>
                <Landmark position={[20, 5, 4]}>Safford</Landmark>
                <Landmark position={[20, 5, 4]}>Clifton</Landmark>
                <Landmark position={[20, 5, 4]}>Parker</Landmark>
                <Landmark position={[20, 5, 4]}>Kingman</Landmark>
                <Landmark position={[20, 5, 4]}>Holbrook</Landmark>
                <Landmark position={[20, 5, 4]}>Tucson</Landmark>
                <Landmark position={[20, 5, 4]}>Florence</Landmark>
                <Landmark position={[20, 5, 4]}>Nogales</Landmark>
                <Landmark position={[20, 5, 4]}>Prescott</Landmark>
                <Landmark position={[20, 5, 4]}>Yuma</Landmark>

                
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

//Just to make the Plane labels cleaner and shorter
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
// Sheesh. Possible to add add multiple vertices to single Points geometry instance, but at cost of per-point events.
// Keep this set-up for interactivity in case of city-info clickables. + it's easier to understand than esoteric three.js optimizations
const Landmark = ({children, position}) =>{
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3))
    const material = new PointsMaterial({color: '#6ea5ff', size: 0.5})
    return (
        <>
            <primitive object={new THREE.Points(geometry, material)} />
            <MapLabel position={[position[0]+2, position[1]+1, position[2]]}>{children}</MapLabel>
        </>
    )
};
//reminder: webGL, which three is built on, gives no way to change line thickness. Would have to be long cylinders.
const Interstate = ({ start, stop }) => {
    const points = [new Vector3(...start), new Vector3(...stop)];
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({ color: 'aliceblue' });
    return (
        <primitive object={new THREE.Line(geometry, material)} />
    );
};