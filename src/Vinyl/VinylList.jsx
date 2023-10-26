import React from 'react'
import { Flex, Box } from '@react-three/flex'
import Vinyl from "./Vinyl.jsx";
import vinyls from '../data/Vinyl.json'
import '../index.css'

export default function VinylList(props) {

    return (
        <group
            rotation-y={0.4}
            position={[-1.75, 2, 0]}
        >
            <Flex
                flexDirection={'row'}
                justifyContent={'space-between'}
                flexWrap={'wrap'}
                size={[8, 0, 0]}
            >
                {Object.keys(vinyls).map(key => {
                    return (
                        <Box marginRight={0.5} marginBottom={0.5}>
                            <Vinyl album={key} setSelectedAlbum={props.setSelectedAlbum} />
                        </Box>
                    )
                })}
            </Flex>
        </group>
    )
}