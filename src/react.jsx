import React, { useRef, useState, Suspense, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Bounds, useBounds, Sky} from '@react-three/drei'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'
import { MathUtils } from 'three'
import { Water } from "three-stdlib";
extend({ Water });
import * as THREE from 'three';

import Papa from 'papaparse'

import { Rooms } from '../static/Rooms'
import { Couch } from '../static/Couch'
import { BoxClosed } from '../static/BoxClosed'
import { BoxingRing } from '../static/BoxingRing'
import { BoxOpen } from '../static/BoxOpen'
import { CardboardBox } from '../static/CardboardBox'
import { ElectricGuitar } from '../static/ElectricGuitar'
import { Controller } from '../static/Controller'
import { CoffeeTable } from '../static/CoffeeTable'
import { Coffee } from '../static/Coffee'
import { Desk } from '../static/Desk'
import { Catharsis } from '../static/Catharsis'
import { Carpet } from '../static/Carpet'
import { TvStand } from '../static/TvStand'
import { Tv } from '../static/Tv'
import { Pc } from '../static/Pc'
import { IeShelves } from '../static/IeShelves'
import { Polaroids } from '../static/Polaroids'
import { Switch } from '../static/Switch'
import { Shelves } from '../static/Shelves'
import { GamingChair } from '../static/GamingChair'
import { Stairs } from '../static/Stairs'
import { Bed } from '../static/Bed'
import { FigPlant } from '../static/FigPlant'
import { Nightstand } from '../static/Nightstand'
import { Railing } from '../static/Railing'
import { ToyBlocks } from '../static/ToyBlocks'
import { Shirts } from '../static/Shirts'

import jjk from '../static/jjk.jpeg'
import AnimalCross from '../static/ac.jpg'
import ruby from '../static/ruby.png'



function App() {
    const cameraRef = useRef()

    return (

        <div id="canvas-container" style={{ width: "100%", height: "100vh" }}>

            <Canvas>
                <ambientLight intensity={.7}/>
                <directionalLight />
                <PerspectiveCamera ref = {cameraRef} makeDefault position={[-8, 3, 0]}/>
                <Rooms position={[0, 0, 0]}  scale={[8, 8, 8]}/>
                <Bounds fit clip observe margin={1.2}>
                <Selection>
                <EffectComposer multisampling={8} autoClear={false}>
                    <Outline blur={true} visibleEdgeColor='white' edgeStrength={1000} width={10000} />
                </EffectComposer>
                    <SelectToZoom>
                        <ElectricGuitar 
                            onClick={(e) => DisplayInfo( "[ME][TA]L" )} 
                            onPointerEnter={(e) => HighlightObject(e)} 
                            onPointerLeave={(e) => UnhighlightObject(e)}
                            onPointerMissed={(e) => CloseGamePopup()} 
                            position={[-1.25, 0.125, -2.25]} 
                            rotation={[0, -Math.PI/2, 0]} 
                            scale={[0.04, 0.04, 0.04]} 
                        />

                        <CardboardBox
                            onPointerEnter={(e) => HighlightObject(e)} 
                            onPointerLeave={(e) => UnhighlightObject(e)}
                            position={[-1.6, 0.15, -0.6]} 
                            rotation={[0, Math.PI/4, 0]} 
                            scale={[1.3, 1.3, 1.3]} 
                        />

                        <Catharsis
                            onPointerEnter={(e) => HighlightObject(e)} 
                            onPointerLeave={(e) => UnhighlightObject(e)}
                            position={[-2.4, 0.37, -1.1]} rotation={[0, 7*Math.PI/5, 0]} 
                            scale={[0.3, 0.3, 0.3]}
                        />

                        <BoxingRing
                            onPointerEnter={(e) => HighlightObject(e)} 
                            onPointerLeave={(e) => UnhighlightObject(e)}
                            position={[-2.6, 0.2, -0.5]} rotation={[0, 7*Math.PI/5, 0]} 
                            scale={[0.04, 0.04, 0.04]}
                        />
                    </SelectToZoom>
                </Selection>

                    {/* Gaming room */}
                    
                    <BoxOpen
                            position={[-1.4, 0.125, 0]} 
                            rotation={[0, -Math.PI/9, 0]} 
                            scale={[1, 1, 1]} 
                    />

                    <Couch  
                        position={[-2.4, 0.28, -2.5]} rotation={[0, Math.PI, 0]} 
                        scale={[0.8, 0.8, 0.8]} 
                    />

                    <Couch 
                        position={[-3.2, 0.28, -1.4]} rotation={[0, - Math.PI / 2, 0]} 
                        scale={[0.8, 0.8, 0.8]}
                    />

                    <Desk 
                        position={[-1.6, 0.270, 1.6]}
                        scale={[0.5, 0.35, 0.46]}
                    />

                    <Pc
                        position={[-1.4, 0.6, 1.35]}
                        scale={[0.15, 0.15, 0.15]}
                    />

                    <Carpet
                        position={[-2.4, 0.13, -1.5]} rotation={[0, Math.PI, 0]} 
                        scale={[0.7, 0.6, 0.6]}
                    />

                    <TvStand
                        position={[1.88, 0.1, 4]} rotation={[0, Math.PI/2, 0]} 
                        scale={[0.016, 0.016, 0.016]}
                    />

                    <Tv  
                        position={[-1.5, 0.45, -1.35]} rotation={[0, -Math.PI/2, 0]} 
                        scale={[0.06, 0.06, 0.06]} 
                    />

                    <CoffeeTable
                        position={[-2.4, 0.25, -1.5]} rotation={[0, Math.PI/2, 0]} 
                        scale={[0.9, 0.3, 0.9]}
                    />

                    <Controller
                        position={[-2.4, 0.33, -1.7]} rotation={[0,-Math.PI/3, 0]} 
                        scale={[0.008, 0.008, 0.008]}
                    />

                    <Polaroids
                        position={[-1.25, 0.9, -0.3]} rotation={[0, Math.PI, 0]}
                        scale={[0.5, 0.5, 0.5]}
                    />

                    <Switch
                        position={[-1.5, 0.37, -1.1]} rotation={[0, Math.PI/2, 0]}
                        scale={[0.5, 0.5, 0.5]}
                    />

                    <GamingChair
                        position={[-1.7, 0.12, 7.7]} rotation={[0, Math.PI/3, 0]}
                        scale={[0.015, 0.012, 0.015]}
                    />

                    <Stairs
                        position={[-3.5, 0, 0.85]} rotation={[0, Math.PI/2, 0]}
                        scale={[0.65, 0.65, 0.65]}
                    />

                    <Bed
                        position={[-5.3, 0.8, -3]} rotation={[0, -Math.PI/2, 0]}
                        scale={[0.015, 0.01, 0.015]}
                    />

                    <JJK />

                    <AnimalCrossing />

                    <Ruby />

                    <FigPlant
                        position={[-1.5, 0.1, -2.6]}
                        scale={[0.08, 0.08, 0.08]}
                    />

                    <Railing
                        position={[-1.45, 1, 1]} rotation={[0, 0, 0]}
                        scale={[0.3, 0.3, 0.3]}
                    />
                    <Railing
                        position={[-2.1, 1, 1]} rotation={[0, 0, 0]}
                        scale={[0.3, 0.3, 0.3]}
                    />





                    {/* Industry Event Room */}
                    <IeShelves 
                        position={[-1.975 + 0.5, 0.4, 2.66]} rotation={[0, -Math.PI/2, 0]} 
                        scale={[0.01, 0.01, 0.01]} 
                    />

                    <IeShelves 
                        position={[-2.5 + 0.5, 0.4, 2.66]} rotation={[0, -Math.PI/2, 0]} 
                        scale={[0.5, 0.5, 0.5]} 
                    />

                    <IeShelves 
                        position={[-3.03 + 0.5, 0.4, 2.66]} rotation={[0, -Math.PI/2, 0]} 
                        scale={[0.5, 0.5, 0.5]} 
                    />

                    {/* Tavern */}

                </Bounds>
                <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} enableDamping={false} />
                <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
            </Canvas>
        </div>
    )

  }

  // Importing 2d images
  function JJK() {
    const texture = useLoader(THREE.TextureLoader, jjk);

    return (
      <mesh scale={[1/8, 1.5/8, 4/8]} position={[-3.2, 0.9, -2.84]}>
        <planeBufferGeometry attach="geometry" args={[3, 3]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    )
  }

  function AnimalCrossing() {
    const texture = useLoader(THREE.TextureLoader, AnimalCross);

    return (
      <mesh position={[-2.7, 0.85, -2.84]}>
        <planeBufferGeometry attach="geometry" args={[0.5, 0.5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    )
  }

  function Ruby() {
    const texture = useLoader(THREE.TextureLoader, ruby);

    return (
      <mesh position={[-1.8, 0.9, -2.84]}>
        <planeBufferGeometry attach="geometry" args={[0.85, 0.5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
    )
  }



// REF: https://codesandbox.io/s/bounds-and-makedefault-rz2g0?file=/src/App.js
// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }) {
    const api = useBounds()
    return (
        <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit().to({position: [-8, 3, 0]})}>
        {children}
        </group>
    )
}
  
//Model focus functions
function HighlightObject (e) {
    let thisScale = e.eventObject.scale;
    thisScale.set(thisScale.x * 1.2, thisScale.y * 1.2, thisScale.z * 1.2)
}

function UnhighlightObject (e) {
    let thisScale = e.eventObject.scale;
    thisScale.set(thisScale.x / 1.2, thisScale.y / 1.2, thisScale.z / 1.2);
}

// Helper func for clicking on game models
var gamePopup = document.getElementById( "game-popup" );
var gamePopupOpen = false;

// Toggle game popup
function ToggleGamePopup () {
    // console.log(gamePopupOpen);
    if (!gamePopupOpen) {
        gamePopup.style.visibility = "visible";
        gamePopupOpen = true;
    } else {
        gamePopup.style.visibility = "hidden";
        gamePopupOpen = false;
    }
}

function CloseGamePopup() {
    // console.log(gamePopupOpen);
    if (gamePopupOpen) {
        ToggleGamePopup();
    }
}

function DisplayInfo ( objName ) {
    for (let i in data) {
        if (data[i]["Game Title"] == objName) {
            // console.log(data[i]);

            // Get HTML elements
            var gameTitle = document.getElementById( "game-title" );
            var gameImg = document.getElementById( "game-img" );
            var gameDescription = document.getElementById( "game-description" );
            var gameUrl = document.getElementById( "game-url" );

            // Change the text and image src
            gameTitle.innerHTML = data[i]["Game Title"];

            var img = new Image();
            img.onload = function() {
                // console.log(this.width + 'x' + this.height);
                gameImg.style.width = (this.width / 6) + "px";
                gameImg.style.height =  (this.height / 6) + "px";
            }
            gameImg.src = data[i]["Game Title"] + ".png";
            img.src = data[i]["Game Title"] + ".png";

            gameDescription.innerHTML = data[i]["Description"];
            gameUrl.href = data[i]["Itch.io Link"];
            gameUrl.innerHTML = data[i]["Itch.io Link"];

            ToggleGamePopup();
        }
    }
}

function Ocean() {
    const ref = useRef()
    const gl = useThree((state) => state.gl)
    const waterNormals = useLoader(THREE.TextureLoader, '/Water_preview.png')
    waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
    const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
    const config = useMemo(
      () => ({
        textureWidth: 512,
        textureHeight: 512,
        waterNormals,
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 10,
        fog: false,
        format: gl.encoding
      }),
      [waterNormals]
    )
    useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta/10))
    return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
}

// Store the info from descriptions.csv into an JS object
var data;
var papa_csv = Papa.parse('/descriptions.csv', {
    download: true,
    header: true,
    quoteChar: '"',
    delimiter:",",
    complete: function(results) {
        // console.log("Parse results: ", results.data);
        data = results.data;
    }
});
// console.log("console: ", data);

function CameraZoom (q = new THREE.Quaternion(), p = new THREE.Vector3()) {
    const ref = useRef();
    const cameraRef = useRef();
    useEffect(() => {
            
    })
    useFrame((state, dt) => {
        easing.damp3(state.camera.position, p, 0.4, dt)
        easing.dampQ(state.camera.quaternion, q, 0.4, dt)
    })
}
  
createRoot(document.getElementById('root')).render(<App />)
