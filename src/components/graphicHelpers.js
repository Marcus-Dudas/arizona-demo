import {useEffect, useState} from 'react'
import {Text} from '@react-three/drei'
import {Vector3, BufferGeometry, LineBasicMaterial, PointsMaterial, QuadraticBezierCurve3, Line} from 'three'
import * as THREE from 'three'

export const Border = ({ start, stop, c='aliceblue'}) => {
    const points = [new Vector3(...start), new Vector3(...stop)];
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({ color: c });
    return (
        <primitive object={new THREE.Line(geometry, material)} />
    );
};

//Just to make the Plane labels cleaner and shorter
export const MapLabel = ({children, c='aliceblue', ...props}) =>{
    return (
        <Text
            color= {c}
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
export const Landmark = ({children, position, c='aliceblue'}) =>{
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3))
    const material = new PointsMaterial({color: c, size: 0.5})
    return (
        <>
            <primitive object={new THREE.Points(geometry, material)} />
            <MapLabel scale={[.5, .5, .5]} position={[position[0]+1, position[1]+.5, position[2]]}>{children}</MapLabel>
        </>
    )
};
//reminder: webGL gives no way to change line thickness for actual line. Would have to be long cylinders.

export const Interstate = ({ start, stop, apex, c='aliceblue' }) => {
    const [lineObject, setLineObject] = useState(null);

    useEffect(() => {
        if (apex) {
            const curve = new QuadraticBezierCurve3(
                new Vector3(...start),
                new Vector3(...apex),
                new Vector3(...stop)
            );
            const points = curve.getPoints(50);
            const geometry = new BufferGeometry().setFromPoints(points);
            const material = new LineBasicMaterial({ color: c });
            setLineObject(new Line(geometry, material));
        } else {
            const points = [new Vector3(...start), new Vector3(...stop)];
            const geometry = new BufferGeometry().setFromPoints(points);
            const material = new LineBasicMaterial({ color: c });
            setLineObject(new Line(geometry, material));
        }
    }, [start, stop, apex]);  // useEffect dependency array

    return lineObject && <primitive object={lineObject} />;
};