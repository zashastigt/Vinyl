import React from 'react'
import { Flex, Box } from '@react-three/flex'
import Vinyl from "./Vinyl.jsx";
import vinyls from '../data/vinyl.json'
import '../index.css'
import {useThree} from "@react-three/fiber";
import {Center} from "@react-three/drei";

export default function VinylList(props) {
    const viewport = useThree((state) => state.viewport);
    return (
        <group position={[-viewport.width/2.5, viewport.height/3, 0]}>
            <Center>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'flex-start'}
                    flexWrap={'wrap'}
                    size={[viewport.width, 0, 0]}
                >
                    {Object.keys(vinyls).map(key => {
                        return (
                            <Box key={key} margin={0.2}>
                                <Vinyl album={key} setSelectedAlbum={props.setSelectedAlbum} setShowInfo={props.setShowInfo} />
                            </Box>
                        )
                    })}
                </Flex>
            </Center>
        </group>
    )
}