

import {Plane} from '@react-three/drei'
import {Border, MapLabel, Interstate, Landmark} from './graphicHelpers';

//wild. Way easier and probably nicer to have drawn much of this out on a plane in Blender.
// c is prop for color property
export default function LandmarkOverlay ({visibility}) {
   
    if (visibility.Places){
    return (
        <>
            <Plane args={[75, 75]} position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial attach="material" transparent opacity={0.0} />
                <MapLabel position={[3, 20, 2.01]} > Colorado Plateau </MapLabel>
                <MapLabel position={[3, 20, 2.01]} > Transition Zone </MapLabel>
                <MapLabel position={[3, 20, 2.01]} > Basin and Range </MapLabel>
                <MapLabel position={[-18, 1, 2.01]} > Sonoran Desert </MapLabel>
                <MapLabel position ={[0, 0, 0]}> Mojave Desert</MapLabel>
                <MapLabel position={[-18, 1, 2.01]}> Painted Desert</MapLabel>
                <MapLabel position={[-15, 14, 2.01]} > Grand Canyon </MapLabel>
                <Landmark position={[-15, 14, 2.01]} >Mt. Graham</Landmark>
                <MapLabel position={[-15, 14, 2.01]} > Lake Mead</MapLabel>
                <MapLabel position={[-15, 14, 2.01]} > Roosevelt lake</MapLabel>
    
            </Plane>
        </>
    )} else {
        return
    }
}