
import {Plane} from '@react-three/drei'
import {MapLabel, Landmark} from './graphicHelpers';

// c is prop for color property
export default function ResOverlay ({visibility}) {
   //XZ-Y
    if (visibility.Reservations){
    return (
        <>
            <Plane args={[6, 6]} position={[-1, 4, 11.5]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'#0000ff'} transparent opacity={0.5} />
                <MapLabel position={[0, 0, 1]} scale={[.6, .6, .6]}> Tohono O'Odham</MapLabel>
            </Plane>
            
            <Plane args={[12, 10]} position={[8, 4.4, -11]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'blue'} transparent opacity={0.5} />
                <MapLabel position={[2, 1.5, 1]} scale={[.8, .8, .8]}> Navajo</MapLabel>
            </Plane>

            <Plane args={[3.6, 3.6]} position={[7, 4.5, -9]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'red'} transparent opacity={0.5} />
                <MapLabel position={[-.2, 0, .2]} scale={[.7, .7, .7]}> Hopi</MapLabel>
            </Plane>
            <Plane args={[4, 3.5]} position={[-5.5, 4.1, -9]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'red'} transparent opacity={0.5} />
                <MapLabel position={[0, 0, .2]} scale={[.5, .5, .5]}> Hualapai</MapLabel>
            </Plane>
            <Plane args={[6, 2.7]} position={[8, 4.3, 1]} rotation={[-Math.PI / 2, 0, -.1]}>
                <meshBasicMaterial color={'red'} transparent opacity={0.5} />
                <MapLabel position={[0, 0, .3]} rotation={[0, 0, .1]} scale={[.6, .6, .6]}> White Mountain</MapLabel>
            </Plane>
            <Plane args={[5, 3]} position={[8.5, 4.2, 4.3]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'red'} transparent opacity={0.5} />
                <MapLabel position={[0, 0, .3]} scale={[.6, .6, .6]}> San Carlos</MapLabel>
            </Plane>
            <Plane args={[5, 3]} position={[-11, 4.1, 1]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'red'} transparent opacity={0} />
                <Landmark c={'orange'} position={[0, 0, 0]} scale={[.6, .6, .6]}> Colorado River</Landmark>
            </Plane>
            <Plane args={[5, 3]} position={[-12, 4.1, -5]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'red'} transparent opacity={0} />
                <Landmark c={'orange'} position={[0, 0, 0]} scale={[.6, .6, .6]}>Fort Mojave</Landmark>
            </Plane>
            <Plane args={[5, 3]} position={[0.5, 4.1, 5.8]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'red'} transparent opacity={0} />
                <Landmark c={'orange'} position={[0, 0, 0]} scale={[.6, .6, .6]}>Gila River</Landmark>
            </Plane>
            <Plane args={[35, 35]} position={[0, 3.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial color={'white'} transparent opacity={0} />
                <Landmark c={'orange'} position={[0.5, -7, 0.5]} scale={[.6, .6, .6]}>Ak-Chin</Landmark>
                <Landmark c={'orange'} position={[4, 14, 1]} scale={[.6, .6, .6]}>Southern Paiute</Landmark>
                <Landmark c={'orange'} position={[-3, 15, 1]} scale={[.6, .6, .6]}>Kaibab Paiute</Landmark>
                <Landmark c={'orange'} position={[-2.5, 10.5, 1]} scale={[.6, .6, .6]}>Havasupai</Landmark>
                <Landmark c={'orange'} position={[11, 1.5, 1]} scale={[.6, .6, .6]}>Zuni</Landmark>
                <Landmark c={'orange'} position={[3, 1, 1]} scale={[.6, .6, .6]}>Tonto Apache</Landmark>
                <Landmark c={'orange'} position={[-.2, 1.6, 1]} scale={[.6, .6, .6]}>Yavapai-Apache</Landmark>
                <Landmark c={'orange'} position={[-2.5, 2.7, 1]} scale={[.6, .6, .6]}>Yavapai-Prescott</Landmark>
                <Landmark c={'orange'} position={[2, -3, 1]} scale={[.6, .6, .6]}>Fort McDowell</Landmark>
                <Landmark c={'orange'} position={[1.3, -4, 1]} scale={[.6, .6, .6]}>Salt River</Landmark>
                <Landmark c={'orange'} position={[-12.5, -9, 1]} scale={[.6, .6, .6]}>Cocopah</Landmark>
                <Landmark c={'orange'} position={[-11.2, -7, 1]} scale={[.6, .6, .6]}>Quechan</Landmark>
                <Landmark c={'orange'} position={[5, -10.5, 0.5]} scale={[.6, .6, .6]}>Pascua Yaqui</Landmark>
            </Plane>
        </>
    )} else {
        return
    }
}
//<MapLabel position={[7, 8, 3.01]} rotation={[0, 0, -.3]}> Colorado Plateau </MapLabel>
//<MapLabel position={[1, 1, 3.01]} rotation={[0, 0, -.4]}> Transition Zone </MapLabel>
//<MapLabel position={[-4, -6, 3.01]} rotation={[0, 0, .3]}> Basin and Range </MapLabel>
      /*        <MapLabel position={[-8, -5, 2.01]} scale={[.8, .8, .8]}> Sonoran Desert </MapLabel>
                <MapLabel position ={[-9, 4, 2.01]} scale={[.8, .8, .8]}> Mojave Desert</MapLabel>
                <MapLabel position={[3, 6, 2.1]} rotation={[0, 0, -.5]} scale={[.6, .6, .6]}> Painted Desert</MapLabel>

                <MapLabel position={[-1, 11, 2.2]} > Grand Canyon </MapLabel>
                <Landmark position={[9, -8.1, 2.6]} >Mt. Graham</Landmark>
                <Landmark position={[1, 7.5, 2.5]} >Humphrey's Peak</Landmark>
                <MapLabel position={[-12.3, 11.4, 2.01]} scale={[.8, .8, .8]} rotation={[0, 0, .3]}> Lake Mead</MapLabel>
                <MapLabel position={[3, -4, 2]} rotation={[0, 0, -.5]} scale={[.4, .4, .4]}> Roosevelt Lake</MapLabel>
                <MapLabel position={[3, 16.5, 2]} rotation={[0, 0, 0]} scale={[.5, .5, .5]}> Lake Powell</MapLabel>
    */