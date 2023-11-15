import React, {useState} from 'react'
import {Line} from '@react-three/drei'


export default function Lines(props) {
    const all = []
    for (let i = 0; i < 61; i++) {
        all.push(
            <>
                <Line
                    points={[[0, 4, 0],[10, 8, 0]]}
                    position={[-5,-i/3,0]}
                    color={props.color}
                    lineWidth={2}
                />
                <Line
                    points={[[0, 8, -1],[12,4,-1]]}
                    position={[-6,-i/3,0]}
                    color={props.color}
                    lineWidth={2}
                />
            </>
        )
    }
    return all
}