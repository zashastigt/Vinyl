import ReactDOM from 'react-dom/client'
import React from 'react'
import {useState} from "react";
import { Canvas } from '@react-three/fiber'
import {Scroll, ScrollControls} from '@react-three/drei'
import VinylList from "./Vinyl/VinylList.jsx"
import './index.css'
import VinylInfo from "./Vinyl/VinylInfo.jsx"
import Lines from "./lines/lines"
import vinyls from './data/vinyl.json'

function Page() {
    const [selectedList, setSelectedList] = useState('List 1')
    const [selectedAlbum, setSelectedAlbum] = useState(Object.keys(vinyls[selectedList])[0])
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div id={'container'}>
            <div id={"listSelect"}>
                {Object.keys(vinyls).map(key => {
                    return (
                        <div className={'specialFont'} key={key} onClick={() => {
                            setSelectedList(key)
                            setShowInfo(false)
                        }}>{key}</div>
                    )
                })}
            </div>
            <div id={'list'}>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[0, 0, 5]} intensity={40} />
                    <ScrollControls pages={2} damping={0.1} >
                        <Scroll>
                            <VinylList
                                list={vinyls[selectedList]}
                                selectedList={selectedList}
                                setSelectedAlbum={setSelectedAlbum}
                                showInfo={showInfo}
                                setShowInfo={setShowInfo}
                            />
                            <Lines color={vinyls["List 1"][selectedAlbum].outsideColor} />
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </div>
            <div id={'info'}>
                <VinylInfo
                    list={vinyls[selectedList]}
                    album={selectedAlbum}
                    showInfo={showInfo}
                    setShowInfo={setShowInfo}
                />
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Page />
  </React.StrictMode>
)
