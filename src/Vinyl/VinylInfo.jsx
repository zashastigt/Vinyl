import React, {useState} from 'react'
import vinyls from '../data/vinyl.json'
import {Canvas} from "@react-three/fiber";
import {CameraControls, Circle, Cylinder, Tube} from "@react-three/drei";

export default function VinylInfo(props) {

    return (
        <div id={'info'}>
            {props.showInfo ?
                <>
                    <div id={'infoBackground'} style={{backgroundImage: `url(${vinyls[props.album].albumArt})`}}>
                        <div className={'close blur'} onClick={(e) => props.setShowInfo(false)}>
                            <img src={'/x-button.png'}/>
                        </div>
                        <div id={'title'} className={'blur'}>
                            <span id={'album'}>{props.album}</span>
                            <span id={'band'}>{vinyls[props.album].band}</span>
                        </div>
                    </div>
                    <div id={'spotify'} className={'blur'}>
                        <iframe
                            src={vinyls[props.album].spotify}
                            width="100%" height="352" frameBorder="0" allowFullScreen=""
                            allow="autoplay; clipboard-write encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                        </iframe>
                    </div>
                </>
                :
                <>
                    <div>
                        <h3> This is a list a all the vinyl lp's I own</h3>
                        <div className={'lp'}>
                            <Canvas>
                                <ambientLight />
                                <pointLight position={[0, 0, 5]} intensity={40} />
                                <CameraControls />
                                <Cylinder args={[1, 1, 0.05]} material-color={'#111'} />
                            </Canvas>
                        </div>

                    </div>
                </>

            }

        </div>
    )
}