import React, { useRef, useState } from 'react'
import {useTexture} from "@react-three/drei";
import vinyls from "../data/vinyl.json";

export default function Vinyl(props) {
    const meshRef = useRef()
    const albumArt = useTexture(vinyls[props.album].albumArt)
    const [hovered, setHover] = useState(false)

    return (
        <mesh
            {...props}
            ref={meshRef}
            onClick={(e) => {
                props.setSelectedAlbum(props.album)
                props.setShowInfo(true)
            }}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}>
            <boxGeometry args={hovered ? [2, 2, 0.5] : [2, 2, 0.05]} />
            <meshStandardMaterial map={albumArt} color={hovered ? 'white' : 'lightgray'} />
        </mesh>
    )
}
