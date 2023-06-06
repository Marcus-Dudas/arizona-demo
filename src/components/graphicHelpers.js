import {useEffect, useState} from 'react'
import {Text} from '@react-three/drei'
import {Vector3, BufferGeometry, LineBasicMaterial, PointsMaterial, QuadraticBezierCurve3, Line, Points, Float32BufferAttribute} from 'three'
import * as THREE from 'three'

export const Border = ({ start, stop, c='aliceblue'}) => {
    const points = [new Vector3(...start), new Vector3(...stop)];
    const geometry = new BufferGeometry().setFromPoints(points);
    const material = new LineBasicMaterial({ color: c });
    return (
        <primitive object={new Line(geometry, material)} />
    );
};

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
// Possible to add add multiple vertices to single Points geometry instance, but at cost of per-point events, BUT
// keep this set-up for interactivity in case of city-info clickables. Easier to work with when number of instantiations limited.
export const Landmark = ({children, position, c='aliceblue'}) =>{
    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new Float32BufferAttribute(position, 3))
    const material = new PointsMaterial({color: c, size: 0.5})
    return (
        <>
            <primitive object={new Points(geometry, material)} />
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

//Can either reduce values to relative differences nearest 0 to THEN translate by position prop to conform to existing axes values
//or position prop can be translation prop and coordinate declaration can be more visually useful during creation. Chose latter.
// OH boy. there are plane buffer geometries that have an easier time rendering faces between vertices, but this is a Blender job for a real project.
// This only works with three triplet (XYZ) coordinates to make triangular faces.
//Keep, but Blender model was used in place of giant arrays of vertices
export const Zone = ({translateXYZ, coordArr, ...props}) => {
    
    const vertices = new Float32Array(coordArr);
    const translatedVertices = vertices.map((value, index) => value + translateXYZ[index % 3]);
    // Create a BufferGeometry and set the attribute 'position' to be the vertices
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(translatedVertices), 3));
  
    return (
      <mesh  geometry={geometry}>
        <meshBasicMaterial color="red" transparent opacity={0.5} {...props}/>
      </mesh>
    )
}
