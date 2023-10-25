import ReactDOM from 'react-dom/client'
import React from 'react'
import {useState} from "react";
import { Canvas } from '@react-three/fiber'
import {Scroll, ScrollControls} from '@react-three/drei'
import VinylList from "./assets/Vinyl/VinylList.jsx"
import './index.css'
import VinylInfo from "./assets/Vinyl/VinylInfo.jsx";

function Page() {
    const [selectedAlbum, setSelectedAlbum] = useState('Lotus')
    return (
        <div id={'container'}>
            <div id={'list'}>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[0, 0, 2]} intensity={50} />
                    <ScrollControls pages={6.5} damping={0.1}>
                        <Scroll>
                            <VinylList setSelectedAlbum={setSelectedAlbum} />
                        </Scroll>
                    </ScrollControls>
                </Canvas>
            </div>
            <div id={'info'}>
                <VinylInfo album={selectedAlbum} />
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Page />
  </React.StrictMode>
)
