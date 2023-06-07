import {Plane} from '@react-three/drei'
import {Interstate} from './graphicHelpers';

//wild. Way easier and probably nicer to have drawn much of this out on a plane in Blender.
// c is prop for color property
export default function InterstateOverlay ({visibility}) {

    if (visibility.Interstates){
    return (
        <>
            <Plane args={[75, 75]} position={[0, 2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <meshBasicMaterial attach="material" transparent opacity={0.0} />

                <Interstate start={[14.1, 5, 2]} stop={[8, 3, 2]} />
                <Interstate start={[8, 3, 2]} apex={[5, 4, 2]} stop={[1, 5, 2.5]}  />
                <Interstate start={[1, 5, 2.5]} apex={[1, 5, 3.7]}  stop={[-4, 6, 2.5]}  />
                <Interstate start={[-4, 6, 2.5]}  stop={[-9.5, 5, 2]}  />
                <Interstate start={[-9.5, 5, 2]} stop={[-9.5, 3, 2]}  />
                <Interstate start={[-9.5, 3, 2]} stop={[-11.5, 2.7, 2]}  />

                <Interstate start={[1, 5, 2.5]} stop={[1.5, 2, 2.3]} />
                <Interstate start={[1.5, 2, 2.3]}   stop={[0, 1, 2.4]} />
                <Interstate start={[0, 1, 2.4]}  stop={[0, -4.5, 2]} />
                
                <Interstate start={[-11.9, -3.5, 2.2]} stop={[-10.5, -3, 2]}  />
                <Interstate start={[-10.5, -3, 2]} stop={[-10, -2.7, 2]} />
                <Interstate start={[-10, -2.7, 2]} stop={[-3, -4.5, 2]} />
                <Interstate start={[-3, -4.5, 2]} stop={[0, -4.5, 2]} />
                <Interstate start={[0, -4.5, 2]}  stop={[1.5, -7.5, 2]} />
                <Interstate start={[1.5, -7.5, 2]}  stop={[4.5, -10.3, 2]} />
                <Interstate start={[4.5, -10.3, 2]}  stop={[6.5, -11.5, 2]} />
                <Interstate start={[6.5, -11.5, 2]}  stop={[9, -11.5, 2.2]} />
                <Interstate start={[9, -11.5, 2.2]}  stop={[11.5, -10.3, 2.2]} />
                <Interstate start={[11.5, -10.3, 2.2]}  stop={[14.1, -11, 2.0]} />
                
                <Interstate start={[4.5, -10.3, 2]}  stop={[4.5, -13, 2]} />
                <Interstate start={[4.5, -13, 2]}  stop={[4.7, -16, 1.7]} />

                <Interstate start={[-12.2, -8.2, 2]}  stop={[-3, -7, 2]} />
                <Interstate start={[-3, -7, 2]}  stop={[1.5, -7.5, 2]} />

            </Plane>
        </>
    )} else {
        return
    }
}