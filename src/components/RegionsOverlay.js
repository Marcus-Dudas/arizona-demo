
import {Plane} from '@react-three/drei'
import {MapLabel, Landmark, Zone} from './graphicHelpers';

//Way easier and probably prettier to have drawn much of this out on a plane in Blender.
// c is prop for color property
export default function RegionsOverlay ({visibility}) {
   
    if (visibility.Climate){
    return (
        <>
            <Plane args={[75, 75]} position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial attach="material" transparent opacity={0.0} />
                
                

                <MapLabel position={[-8, -5, 2.01]} scale={[.8, .8, .8]}> Sonoran Desert </MapLabel>
                <MapLabel position ={[-9, 4, 2.01]} scale={[.8, .8, .8]}> Mojave Desert</MapLabel>
                <MapLabel position={[3, 6, 2.1]} rotation={[0, 0, -.5]} scale={[.6, .6, .6]}> Painted Desert</MapLabel>

                <MapLabel position={[-1, 11, 2.2]} > Grand Canyon </MapLabel>
                <Landmark position={[9, -8.1, 2.6]} >Mt. Graham</Landmark>
                <Landmark position={[1, 7.5, 2.5]} >Humphrey's Peak</Landmark>
                <MapLabel position={[-12.3, 11.4, 2.01]} scale={[.8, .8, .8]} rotation={[0, 0, .3]}> Lake Mead</MapLabel>
                <MapLabel position={[3, -4, 2]} rotation={[0, 0, -.5]} scale={[.4, .4, .4]}> Roosevelt Lake</MapLabel>
                <MapLabel position={[3, 16.5, 2]} rotation={[0, 0, 0]} scale={[.5, .5, .5]}> Lake Powell</MapLabel>
    
            </Plane>
        </>
    )} else {
        return
    }
}
//<MapLabel position={[7, 8, 3.01]} rotation={[0, 0, -.3]}> Colorado Plateau </MapLabel>
//<MapLabel position={[1, 1, 3.01]} rotation={[0, 0, -.4]}> Transition Zone </MapLabel>
//<MapLabel position={[-4, -6, 3.01]} rotation={[0, 0, .3]}> Basin and Range </MapLabel>