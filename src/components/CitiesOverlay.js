

import {Plane} from '@react-three/drei'
import {Landmark} from './graphicHelpers';

//wild. Way easier and probably nicer to have drawn much of this out on a plane in Blender.
// c is prop for color property
export default function LandmarkOverlay ({visibility}) {
    if (visibility.Cities){
    return (
        <>
            <Plane args={[75, 75]} position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial attach="material" transparent opacity={0.0} />

                <Landmark position={[0, -4.5, 2]}>Phoenix</Landmark>
                <Landmark position={[-10.5, -3, 2]}>Quartzsite</Landmark>
                <Landmark position={[-11, 1.8, 2]}>Lake Havasu</Landmark>
                <Landmark position={[.5, 3.9, 2.6]}>Sedona</Landmark>
                <Landmark position={[11.5, 1.5, 2]}>St. John's</Landmark>
                <Landmark position={[9, -14, 2.2]}>Bisbee</Landmark>
                <Landmark position={[1, 5, 2.5]}>Flagstaff</Landmark>
                <Landmark position={[5.5, -4.1, 2.2]}>Globe</Landmark>
                <Landmark position={[10, -7.3, 2.5]}>Safford</Landmark>
                <Landmark position={[12, -5.9, 2]}>Clifton</Landmark>
                <Landmark position={[-10.5, -.3, 2]}>Parker</Landmark>
                <Landmark position={[-9.5, 5, 2]}>Kingman</Landmark>
                <Landmark position={[8, 3, 2]}>Holbrook</Landmark>
                <Landmark position={[4.5, -10.3, 2]}>Tucson</Landmark>
                <Landmark position={[2.6, -5.9, 2]}>Florence</Landmark>
                <Landmark position={[4.7, -16, 1.7]}>Nogales</Landmark>
                <Landmark position={[-2, 2, 2.2]}>Prescott</Landmark>
                <Landmark position={[-12.2, -8.2, 2]}>Yuma</Landmark>

                
            </Plane>
        </>
    )} else {
        return
    }
}