import React from 'react'
import vinyls from '../data/Vinyl.json'

export default function VinylInfo(props) {
    return (
        <div id={'infoBackground'} style={{backgroundImage: `url(${vinyls[props.album].albumArt})`}}>
            <div id={'title'} className={'blur'}>
                <span id={'album'}>{props.album}</span>
                <span id={'band'}>{vinyls[props.album].band}</span>
            </div>
            <div id={'spotify'} className={'blur'}>
                <iframe
                    src={vinyls[props.album].spotify}
                    width="100%" height="352" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>

        </div>
    )
}