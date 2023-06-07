

import {Plane} from '@react-three/drei'
import {Border, MapLabel} from './graphicHelpers';

// c is prop for color property
export default function StatesOverlay ({visibility}) {
    const st = '#6ea5ff';
    const b = '#eb9234';
    if (visibility.States){
    return (
        <>
            <Plane args={[75, 75]} position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial attach="material" transparent opacity={0.0} />
                <MapLabel position={[3, 20, 2.01]} c={st}> Utah </MapLabel>
                <MapLabel position={[-18, 1, 2.01]} c={st}> California </MapLabel>
                <MapLabel position={[-15, 14, 2.01]} c={st}> Nevada </MapLabel>
                <MapLabel position={[-7, -20, 2.01]} c={st}> Mexico </MapLabel>
                <MapLabel position={[20, 3, 2.01]} c={st}> New Mexico </MapLabel>
                <MapLabel position={[22, 21, 2.01]} c={st}> Colorado </MapLabel>

                <Border start={[-12, 4, 1]} stop={[-35, 30, 1]} c={b}/>
                <Border start={[14.3, 16.2, 1]} stop={[40, 16.2, 1]} c={b}/>
                <Border start={[14.3, 16.2, 1]} stop={[14.3, 40, 1]} c={b}/>
                <Border start={[14.2, -16.17, 1]} stop={[20, -16.17, 1]} c={b}/>
                <Border start={[20, -16.17, 1]} stop={[20, -13, 1]} c={b}/>
                <Border start={[20, -13, 1]} stop={[40, -13, 1]} c={b}/>
                <Border start={[-9.7, 16.2, 1]} stop={[-9.7, 40, 1]} c={b}/>
                <Border start={[-12, -8.5, 1]} stop={[-45, -12, 1]} c={b}/>
            </Plane>
        </>
    )} else {
        return
    }
}