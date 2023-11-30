import React, { useRef, useState } from 'react'
import {useTexture} from "@react-three/drei";
import vinyls from "../data/vinyl.json";
import {useFrame} from "@react-three/fiber";
import Disc from "./Disc.jsx";

export default function Vinyl(props) {
    const meshRef = useRef()
    const albumArt = useTexture(vinyls[props.album].albumArt)
    const [hovered, setHover] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current.position.z < 0.3 && hovered === true) {
            meshRef.current.position.z += 0.015
        } else if (meshRef.current.position.z > 0 && hovered === false) {
            meshRef.current.position.z -= 0.015
        }

    })

    return (
        <group>
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
            <Disc
                hovered={hovered}
                setHover={setHover}
                outsideVinylColor={props.outsideVinylColor}
                insideVinylColor={props.insideVinylColor}
            />
        </group>

    )
}
