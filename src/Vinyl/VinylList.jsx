import React, {useState} from 'react'
import { Flex, Box } from '@react-three/flex'
import Vinyl from "./Vinyl.jsx";
import vinyls from '../data/vinyl.json'
import '../index.css'
import {useThree} from "@react-three/fiber";
import {Center, Cylinder} from "@react-three/drei";

export default function VinylList(props) {
    const viewport = useThree((state) => state.viewport);
    const [hovered, setHover] = useState(false)
    return (
        <group position={[-viewport.width/2.6, viewport.height/2.7, 0]}>
            <Center>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'flex-start'}
                    flexWrap={'wrap'}
                    size={[viewport.width, 0, 0]}
                >
                    {Object.keys(vinyls).map(key => {
                        return (
                            <Box key={key} margin={0.1}>
                                <Vinyl
                                    album={key}
                                    setSelectedAlbum={props.setSelectedAlbum}
                                    setShowInfo={props.setShowInfo}
                                    onPointerOver={(e) => setHover(true)}
                                    onPointerOut={(e) => setHover(false)}
                                />



                            </Box>
                        )
                    })}
                </Flex>
            </Center>
        </group>
    )
}