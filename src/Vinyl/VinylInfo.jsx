import React from 'react'
import vinyls from '../data/vinyl.json'

export default function VinylInfo(props) {

    return (
        <div id={'info'}>
            {props.showInfo ?
                <>
                    <div id={'infoBackground'} style={{backgroundImage: `url(${vinyls[props.album].albumArt})`}}>
                        <div className={'close blur'} onClick={(e) => props.setShowInfo(false)}>
                            <img src={'../x-button.png'} alt={'close'}/>
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
                    <div className={'specialFont'}>
                        <h3> This is a list a all the vinyl lp's I own</h3>
                        <table>
                            <tr>
                                <th>Album</th>
                                <th>Band/Artist</th>
                            </tr>
                            {Object.keys(vinyls).map(key => {
                                return (
                                    <tr>
                                        <td>{key}</td>
                                        <td>{vinyls[key].band}</td>
                                    </tr>
                                )
                            })}
                        </table>

                    </div>
                </>

            }

        </div>
    )
}