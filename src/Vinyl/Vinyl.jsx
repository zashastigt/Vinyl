import React, { useRef, useState } from 'react'
import {Cylinder, useTexture} from "@react-three/drei";
import vinyls from "../data/vinyl.json";

export default function Vinyl(props) {
    const meshRef = useRef()
    const albumArt = useTexture(vinyls[props.album].albumArt)
    const [hovered, setHover] = useState(false)

    return (
        <group rotation={hovered ? [0, 0, 0] : [0, 0, 0]} position={hovered ? [0, 0, 0.3] : [0, 0, 0]}>

            <mesh
                {...props}
                ref={meshRef}
                onClick={(e) => {
                    props.setSelectedAlbum(props.album)
                    props.setShowInfo(true)
                }}
                onPointerOver={(e) => setHover(true)}
                onPointerOut={(e) => setHover(false)}
            >
                <boxGeometry args={[1.5, 1.5, 0.0375]} />
                <meshStandardMaterial map={albumArt} color={'white'} />
            </mesh>
            <Cylinder args={[0.73, 0.73, 0.02]} position={hovered ? [0.73, 0, 0] : [0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material-color={'#111'} />
            <Cylinder args={[0.25, 0.25, 0.02]} position={hovered ? [0.73, 0, 0] : [0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material-color={'darkred'} />
        </group>

    )
}
