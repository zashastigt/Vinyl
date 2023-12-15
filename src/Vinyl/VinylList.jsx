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
        <group position={[-viewport.width/2.6, viewport.height/2.7, 0]}>
            <Center>
                <Flex
                    flexDirection={'row'}
                    justifyContent={'flex-start'}
                    flexWrap={'wrap'}
                    size={[viewport.width, 0, 0]}
                >
                    {Object.keys(props.list).map(album => {
                        return (
                            <Box key={album} margin={0.1}>
                                <Vinyl
                                    album={album}
                                    setSelectedAlbum={props.setSelectedAlbum}
                                    setShowInfo={props.setShowInfo}
                                    outsideVinylColor={vinyls["List 1"][album].outsideColor}
                                    insideVinylColor={vinyls["List 1"][album].insideColor}
                                />
                            </Box>
                        )
                    })}
                </Flex>
            </Center>
        </group>
    )
}