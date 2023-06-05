

import {Plane} from '@react-three/drei'
import {Border, MapLabel, Interstate, Landmark} from './graphicHelpers';

//wild. Way easier and probably nicer to have drawn much of this out on a plane in Blender.
// c is prop for color property
export default function LandmarkOverlay () {
    const ic1= 'red';
    const ic2= 'purple';
    const ic3 = 'blue';
    const ic4 = 'yellow';
    const ic5 = 'green';
    const st = '#6ea5ff';
    const b = '#eb9234';
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

                <Landmark position={[0, -4.5, 2]}>Phoenix</Landmark>
                <Landmark position={[-10.5, -3, 2]}>Quartzsite</Landmark>
                <Landmark position={[-11, 1.8, 2]}>Lake Havasu</Landmark>
                <Landmark position={[.5, 3.9, 2.6]}>Sedona</Landmark>
                <Landmark position={[11.5, 1.5, 2]}>St. John's</Landmark>
                <Landmark position={[9, -14, 2.2]}>Bisbee</Landmark>
                <Landmark position={[1, 5, 2.5]}>Flagstaff</Landmark>
                <Landmark position={[5.5, -4.1, 2.2]}>Globe</Landmark>
                <Landmark position={[10, -7.3, 2.4]}>Safford</Landmark>
                <Landmark position={[12, -5.9, 2]}>Clifton</Landmark>
                <Landmark position={[-10.5, -.3, 2]}>Parker</Landmark>
                <Landmark position={[-9.5, 5, 2]}>Kingman</Landmark>
                <Landmark position={[8, 3, 2]}>Holbrook</Landmark>
                <Landmark position={[4.5, -10.3, 2]}>Tucson</Landmark>
                <Landmark position={[2.6, -5.9, 2]}>Florence</Landmark>
                <Landmark position={[4.7, -16, 1.7]}>Nogales</Landmark>
                <Landmark position={[-2, 2, 2.2]}>Prescott</Landmark>
                <Landmark position={[-12.2, -8.2, 2]}>Yuma</Landmark>

                <Interstate start={[14.1, 5, 2]} stop={[8, 3, 2]} c={ic1}/>
                <Interstate start={[8, 3, 2]} apex={[5, 4, 2]} stop={[1, 5, 2.5]} c={ic1} />
                <Interstate start={[1, 5, 2.5]} apex={[1, 5, 3.7]}  stop={[-4, 6, 2.5]} c={ic1} />
                <Interstate start={[-4, 6, 2.5]}  stop={[-9.5, 5, 2]} c={ic1} />
                <Interstate start={[-9.5, 5, 2]} stop={[-9.5, 3, 2]} c={ic1} />
                <Interstate start={[-9.5, 3, 2]} stop={[-11.5, 2.7, 2]} c={ic1} />

                <Interstate start={[1, 5, 2.5]} stop={[1.5, 2, 2.3]} c={ic5}/>
                <Interstate start={[1.5, 2, 2.3]}   stop={[0, 1, 2.4]} c={ic5}/>
                <Interstate start={[0, 1, 2.4]}  stop={[0, -4.5, 2]} c={ic5}/>
                
                <Interstate start={[-11.9, -3.5, 2.2]} stop={[-10.5, -3, 2]} c={ic2} />
                <Interstate start={[-10.5, -3, 2]} stop={[-10, -2.7, 2]} c={ic2}/>
                <Interstate start={[-10, -2.7, 2]} stop={[-3, -4.5, 2]} c={ic2}/>
                <Interstate start={[-3, -4.5, 2]} stop={[0, -4.5, 2]} c={ic2}/>
                <Interstate start={[0, -4.5, 2]}  stop={[1.5, -7.5, 2]} c={ic2}/>
                <Interstate start={[1.5, -7.5, 2]}  stop={[4.5, -10.3, 2]} c={ic2}/>
                <Interstate start={[4.5, -10.3, 2]}  stop={[6.5, -11.5, 2]} c={ic2}/>
                <Interstate start={[6.5, -11.5, 2]}  stop={[9, -11.5, 2.2]} c={ic2}/>
                <Interstate start={[9, -11.5, 2.2]}  stop={[11.5, -10.3, 2.2]} c={ic2}/>
                <Interstate start={[11.5, -10.3, 2.2]}  stop={[14.1, -11, 2.0]} c={ic2}/>
                
                <Interstate start={[4.5, -10.3, 2]}  stop={[4.5, -13, 2]} c={ic4}/>
                <Interstate start={[4.5, -13, 2]}  stop={[4.7, -16, 1.7]} c={ic4}/>

                <Interstate start={[-12.2, -8.2, 2]}  stop={[-3, -7, 2]} c={ic3}/>
                <Interstate start={[-3, -7, 2]}  stop={[1.5, -7.5, 2]} c={ic3}/>

                
            </Plane>
        </>
    )
}