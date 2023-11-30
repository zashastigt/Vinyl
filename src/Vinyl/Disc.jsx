import React, { useRef } from 'react'
import {Cylinder, useTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

export default function Disc(props) {
    const meshRef = useRef()

    useFrame((state, delta) => {
        if (meshRef.current.position.x < 0.73 && props.hovered === true) {
            meshRef.current.position.x += 0.02
        } else if (meshRef.current.position.x > 0 && props.hovered === false) {
            meshRef.current.position.x -= 0.02
        }
        if (meshRef.current.position.z < 0.3 && props.hovered === true) {
            meshRef.current.position.z += 0.015
        } else if (meshRef.current.position.z > 0 && props.hovered === false) {
            meshRef.current.position.z -= 0.015
        }

    })

    return (
        <mesh
            {...props}
            ref={meshRef}
            onClick={(e) => {
                props.setSelectedAlbum(props.album)
                props.setShowInfo(true)
            }}
            onPointerOver={(e) => props.setHover(true)}
            onPointerOut={(e) => props.setHover(false)}
        >
            <Cylinder args={[0.73, 0.73, 0.02]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material-color={props.outsideVinylColor} />
            <Cylinder args={[0.25, 0.25, 0.02]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material-color={props.insideVinylColor} />
        </mesh>
    )

}
