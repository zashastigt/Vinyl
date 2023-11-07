import ReactDOM from 'react-dom/client'
import React from 'react'
import {useState} from "react";
import { Canvas, useThree } from '@react-three/fiber'
import {CameraControls, Scroll, ScrollControls} from '@react-three/drei'
import VinylList from "./Vinyl/VinylList.jsx"
import './index.css'
import VinylInfo from "./Vinyl/VinylInfo.jsx";
import vinyls from './data/vinyl.json'

function Page() {
    const [selectedAlbum, setSelectedAlbum] = useState(Object.keys(vinyls)[0])
    const [showInfo, setShowInfo] = useState(true)
    return (
        <div id={'container'}>
            <div id={'list'}>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[0, 0, 2]} intensity={40} />
                    <ScrollControls pages={2} damping={0.1} >
                        <Scroll>
                            <VinylList setSelectedAlbum={setSelectedAlbum} showInfo={showInfo} setShowInfo={setShowInfo} />
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </div>
            <div id={'info'}>
                <VinylInfo album={selectedAlbum} showInfo={showInfo} setShowInfo={setShowInfo} />
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Page />
  </React.StrictMode>
)
