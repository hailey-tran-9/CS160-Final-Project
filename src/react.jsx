import React, { useRef, useState, Suspense, useMemo, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Bounds, useBounds, Sky, useAnimations, useGLTF } from '@react-three/drei'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'
import { MathUtils } from 'three'
import { Water } from "three-stdlib";
extend({ Water });
import * as THREE from 'three';
import * as easing from "maath/easing";

import { OrbitControls as OrbitC } from 'three/examples/jsm/controls/OrbitControls';

import Papa from 'papaparse'

import { Rooms } from '../static/Rooms'
import { Rooms_1 } from '../static/Rooms_1';
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
import { KawaiiArcade } from '../static/KawaiiArcade'
import { AdjustableDesk } from '../static/AdjustableDesk'
import { FlatTv } from '../static/FlatTv'
import { BarCounter } from '../static/BarCounter'
import { ModernRug } from '../static/ModernRug'
import { InvisibleWall } from '../static/InvisibleWall'
import { StardewValley } from '../static/StardewValley'
import { Sink } from '../static/Sink'
import { Fridge } from '../static/Fridge'
import { TavernCouch } from '../static/TavernCouch'
import { TavernCouchSmall } from '../static/TavernCouchSmall'
import { TavernShelf } from '../static/TavernShelf'
import { Champagne } from '../static/Champagne'


import jjk from '../static/jjk.jpeg'
import AnimalCross from '../static/ac.jpg'
import ruby from '../static/ruby.png'
import erased from '../static/erased.png'
import silentHill from '../static/SilentHill.jpeg'
import ff7 from '../static/FF7.jpeg'

var camera;

function App() {
    const cameraRef = useRef();
    camera = cameraRef;

    return (

        <div id="canvas-container" style={{ width: "100%", height: "100vh" }}>

            <Canvas>
                <ambientLight intensity={.7}/>
                <directionalLight />
                <PerspectiveCamera ref = {cameraRef} makeDefault position={[-1, 3, 15]} near={0.1} far={1000} fov={45}/>
                <Rooms_1 position={[0, 0, 0]}  scale={[8, 8, 8]}/>
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
                            position={[-2.6, 0.22, -0.5]} rotation={[0, 7*Math.PI/5, 0]} 
                            scale={[0.04, 0.04, 0.04]}
                        />

                        <ToyBlocks
                            onPointerEnter={(e) => HighlightObject(e)} 
                            onPointerLeave={(e) => UnhighlightObject(e)}
                            position={[-2.5, 1.04, 1.35]} rotation={[0, 0, 0]}
                            scale={[2, 2, 2]}
                        />
                        
                    </SelectToZoom>
                </Selection>

                    {/* Gaming room */}

                    <InvisibleWall
                        onPointerOver={(e) => e.stopPropagation()} 
                        position={[-1.17, 0, -0.9]} rotation={[0, Math.PI/2, 0]}
                        scale={[25, 21, 1]} 
                    />

                    <InvisibleWall
                        onPointerOver={(e) => e.stopPropagation()} 
                        position={[-1.17, 0, 1.85]} rotation={[0, Math.PI/2, 0]}
                        scale={[9, 21, 1]} 
                    />

                    <InvisibleWall
                        onPointerOver={(e) => e.stopPropagation()} 
                        position={[-2.1, 0, 2.5]} rotation={[0, 0, 0]}
                        scale={[21, 21, 1]} 
                    />

                    {/* adjust this invisible wall tmrw!! */}
                    <InvisibleWall
                        onPointerOver={(e) => e.stopPropagation()} 
                        position={[-2.1, 0, 2.5]} rotation={[0, 0, 0]}
                        scale={[21, 21, 1]} 
                    />
                    
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
                    
                    <AdjustableDesk 
                        position={[-1.48, 0.125, 1.7]}
                        rotation={[0, Math.PI, 0]} 
                        scale={[0.5, 0.35, 0.46]}
                    />

                    <Pc
                        position={[-1.4, 0.6, 1.35]}
                        scale={[0.15, 0.15, 0.15]}
                    />

                    <Carpet
                        position={[-2.4, 0.15, -1.5]} rotation={[0, Math.PI, 0]} 
                        scale={[0.7, 0.6, 0.6]}
                    />

                    <TvStand
                        position={[1.88, 0.1, 4]} rotation={[0, Math.PI/2, 0]} 
                        scale={[0.016, 0.016, 0.016]}
                    />

                    <Tv  
                        position={[-1.5, 0.45, -1.35]} rotation={[0, -Math.PI/2, 0]} 
                        scale={[0.07, 0.07, 0.07]} 
                    />

                    <CoffeeTable
                        position={[-2.4, 0.25, -1.5]} rotation={[0, Math.PI/2, 0]} 
                        scale={[0.9, 0.3, 0.9]}
                    />

                    <Controller
                        position={[-1.5, 0.29, -1.7]} rotation={[0,-Math.PI/3, 0]} 
                        scale={[0.006, 0.006, 0.006]}
                    />

                    <Polaroids
                        position={[-1.27, 1.2, -0.1]} rotation={[0, Math.PI, 0]}
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
                        position={[-3.5, 0.03, 0.77]} rotation={[0, Math.PI/2, 0]}
                        scale={[0.7, 0.7, 0.7]}
                    />

                    <Bed
                        position={[-5.3, 0.92, -3]} rotation={[0, -Math.PI/2, 0]}
                        scale={[0.015, 0.01, 0.015]}
                    />

                    <JJK />

                    <AnimalCrossing />

                    <Ruby />

                    <Erased />

                    <SilentHill />

                    <FinalFantasy />

                    <FigPlant
                        position={[-1.5, 0.15, -2.6]}
                        scale={[0.1, 0.1, 0.1]}
                    />

                    <Railing
                        position={[-1.8, 1.1, 1]} rotation={[0, 0, 0]}
                        scale={[0.8, 0.3, 0.6]}
                    />

                    <Nightstand
                        position={[-1.4, 1.1, 1.5]} rotation={[0, Math.PI, 0]}
                        scale={[0.3, 0.3, 0.3]}
                    />

                    <Shirts
                        position={[-2.6, 0.17, 0.3]} rotation={[0, Math.PI/9, 0]}
                        scale={[0.3, 0.3, 0.3]}
                    />




                    {/* Industry Event Room */}
                    <IeShelves 
                        position={[-1.975 + 0.5, 0.4, 2.66]} rotation={[0, -Math.PI/2, 0]} 
                        scale={[0.01, 0.01, 0.01]} 
                    />

                    <IeShelves 
                        position={[-2., 0.12, -3.2]} rotation={[0, -Math.PI/2, 0]} 
                        scale={[1.25, 1.25, 1.25]} 
                    />

                    <IeShelves 
                        position={[-3.03 + 0.5, 0.4, -3.1]} rotation={[0, -Math.PI/2, 0]} 
                        scale={[0, 0, 0]} 
                    />

                    <StardewValley
                        position={[-1.56, 1.12, -3.2]}
                        scale={[0.035, 0.035, 0.035]}
                        rotation={[-0.25, 0, 0]}
                        onPointerEnter={(e) => HighlightObject(e)} 
                        onPointerLeave={(e) => UnhighlightObject(e)}
                    />




                    {/* Tavern */}
                    <KawaiiArcade 
                        position={[-0.9, 0.45, 1.5]}
                        rotation={[0, Math.PI/2, 0]}
                        scale={[20, 20, 20]}
                    />
                    
                    <BarCounter
                        position={[-0.5, 0.1, -2.8]}
                        rotation={[0, Math.PI/2, 0]}
                        scale={[4.5, 1.2, 1.6]}
                    />

                    <Sink
                        position={[-1, 0.09, -2.23]}
                        rotation={[0, Math.PI, 0]}
                        scale={[1.2, 1.2, 1.2]}
                    />

                    <FlatTv
                        position={[-.8, 1.5, -0.9]}
                        scale={[0.25, 0.25, 0.25]}
                        rotation={[0, Math.PI/2, 0]} 
                    />

                    <Fridge
                        position={[-0.9, 0.09, -1.4]}
                        rotation={[0, -Math.PI/2, 0]}
                        scale={[0.8, 0.5, 0.6]} 
                    />

                    <Fridge
                        position={[-0.9, 0.09, -1.8]}
                        rotation={[0, -Math.PI/2, 0]}
                        scale={[0.8, 0.5, 0.6]} 
                    />

                    {/* <ModernRug 
                        position={[0.2, 0.125, 0.4]}
                        rotation={[0, Math.PI/2, 0]}
                        scale={[0.17, 0.17, 0.17]}
                    /> */}

                    <ModernRug 
                        position={[0.7, 0.125, -0.8]}
                        rotation={[0, 0, 0]}
                        scale={[0.17, 0.17, 0.17]}
                    />

                    <TavernCouch
                        position={[1.1, 0.12, -0.80]}
                        rotation={[0, -Math.PI/2, 0]}
                        scale={[0.19, 0.19, 0.19]}
                    />
                    
                    <TavernCouchSmall
                        position={[0.6, 0.12, -1.5]}
                        rotation={[0, -Math.PI + Math.PI, 0]}
                        scale={[0.19, 0.19, 0.19]}
                    />

                    <TavernCouchSmall
                        position={[0.6, 0.12, -0.1]}
                        rotation={[0, Math.PI, 0]}
                        scale={[0.19, 0.19, 0.19]}
                    />


                </Bounds>
                <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} enableDamping={false} maxDistance = {25} minDistance= {4}/>
                <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
                <CameraOrbitController />
            </Canvas>
        </div>
    )

}

// Importing 2d images
function JJK() {
    const texture = useLoader(THREE.TextureLoader, jjk);

    return (
        <mesh position={[-3.0, 1.15, -2.83]}>
        <planeGeometry attach="geometry" args={[0.6, 0.8]} />
        <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

function AnimalCrossing() {
    const texture = useLoader(THREE.TextureLoader, AnimalCross);

    return (
        <mesh position={[-2.3, 1, -2.81]}>
        <planeGeometry attach="geometry" args={[0.7, 0.7]} />
        <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

function Ruby() {
    const texture = useLoader(THREE.TextureLoader, ruby);

    return (
        <mesh position={[-1.9, 1.3, -2.83]}>
        <planeGeometry attach="geometry" args={[1.1, 0.8]} />
        <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

function Erased() {
    const texture = useLoader(THREE.TextureLoader, erased);

    return (
        <mesh position={[-1.25, 0.9, 0.4]} rotation={[0, -Math.PI/2, 0]}>
        <planeGeometry attach="geometry" args={[0.4, 0.55]} />
        <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

function SilentHill() {
    const texture = useLoader(THREE.TextureLoader, silentHill);

    return (
        <mesh position={[-1.25, 1.4, -2.2]} rotation={[0, -Math.PI/2, 0]}>
        <planeGeometry attach="geometry" args={[0.5, 0.65]} />
        <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

function FinalFantasy() {
    const texture = useLoader(THREE.TextureLoader, ff7);

    return (
        <mesh position={[-1.25, 1.4, -0.75]} rotation={[0, -Math.PI/2, 0]}>
        <planeGeometry attach="geometry" args={[0.6, 0.8]} />
        <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}

// function Ocean() {
//     const ref = useRef()
//     const gl = useThree((state) => state.gl)
//     const waterNormals = useLoader(THREE.TextureLoader, '/Water_preview.png')
//     waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
//     const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
//     const config = useMemo(
//       () => ({
//         textureWidth: 512,
//         textureHeight: 512,
//         waterNormals,
//         sunDirection: new THREE.Vector3(),
//         sunColor: 0xffffff,
//         waterColor: 0x001e0f,
//         distortionScale: 10,
//         fog: false,
//         format: gl.encoding
//       }),
//       [waterNormals]
//     )
//     useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta/10))
//     return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
// }

// -------------------------------------------------------------------------------------------------

// Reset camera position
function ResetCameraPos() {
    if (camera) {
        // console.log(camera.current.getFocalLength());
        camera.current.zoom = 1;
        camera.current.updateProjectionMatrix();
        camera.current.position.set(-10, 3, 0);
    }
}

// Zooming
function ZoomIn() {
    if (camera) {
        if (camera.current.zoom < 9) {
            camera.current.zoom += 0.1;
            camera.current.updateProjectionMatrix();
            // console.log(camera.current.zoom);
        }
    }
}

function ZoomOut() {
    if (camera) {
        if (camera.current.zoom >= 0.6) {
            camera.current.zoom -= 0.1;
            camera.current.updateProjectionMatrix();
            // console.log(camera.current.zoom);
        }  
    }
}

function ResetZoom() {
    if (camera) {
        camera.current.zoom = 1;
    }
}

// Set movement controls
function SetMovementKeybinds( controls, u, l, b, r ) {
    controls.keys["UP"] = u;
    controls.keys["LEFT"] = l;
    controls.keys["BOTTOM"] = b;
    controls.keys["RIGHT"] = r;
    // console.log(controls.keys);
}

var movementControls;

// Orbit Controller with keyboard functionality
const CameraOrbitController = () => {
    const { camera, gl } = useThree();

    useEffect(() => {
        const controls = new OrbitC(camera, gl.domElement);
        movementControls = controls;
        controls.keyPanSpeed = 20.0;
        SetMovementKeybinds(controls, "KeyW", "KeyA", "KeyS", "KeyD");
        // console.log(controls.keys);
        controls.listenToKeyEvents( window );
        return () => {
            controls.dispose();
        };
    }, [camera, gl]);
    return null;
};

// REF: https://codesandbox.io/s/bounds-and-makedefault-rz2g0?file=/src/App.js
// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }) {
    const api = useBounds()
    // const ref = useRef()
    // const clicked = useRef()
    // useEffect(() => {
    //     clicked.current = ref.current.getObjectByName(params?.id)
    //     if (clicked.current) {
    //         clicked.current.parent.updateWorldMatrix(true, true)
    //         clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25))
    //         clicked.current.parent.getWorldQuaternion(q)
    //     }
    // })
    // useFrame((state, dt) => {
    //     easing.damp3(state.camera.position, p, 0.4, dt)
    //     easing.dampQ(state.camera.quaternion, q, 0.4, dt)
    // })
    return (
        <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())}>
        {children}
        </group>
    )
}
  
// Model focus functions
function HighlightObject (e) {
    let thisScale = e.eventObject.scale;
    thisScale.set(thisScale.x * 1.2, thisScale.y * 1.2, thisScale.z * 1.2)
}

function UnhighlightObject (e) {
    let thisScale = e.eventObject.scale;
    thisScale.set(thisScale.x / 1.2, thisScale.y / 1.2, thisScale.z / 1.2);
}

// -------------------------------------------------------------------------------------------------
// OVERLAYS, POPUPS

// HTML element vars
const settingsOverlay = document.getElementById( "settings-overlay" );
const keyboardControlsOverlay = document.getElementById( "keyboard-controls-overlay" );
const helpOverlay = document.getElementById( "help-overlay" );
const creditsOverlay = document.getElementById( "credits-overlay" );
const keybindPopup = document.getElementById( "keybind-popup" );

const zoomKeybindContainer = document.getElementById( "zoom-keybind-container" );
const movementKeybindContainer = document.getElementById( "movement-keybind-container" );
const snapKeybindContainer = document.getElementById( "snap-keybind-container" );

var keybindPrompt = document.getElementById("keybind-prompt");
var keybindError = document.getElementById("keybind-error");

const navBarGameLst = document.getElementById( "nav-bar-game-lst" );
var navBarToggleBtn = document.getElementById( "nav-bar-toggle-btn" );

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

// To prevent clicking elsewhere activating the popup
function CloseGamePopup() {
    // console.log(gamePopupOpen);
    if (gamePopupOpen) {
        ToggleGamePopup();
    }
}

// When a game model is clicked, load the corresponding info
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

// Create the Go To buttons with their room names
function CreateGoToBtn( {roomName} ) {
    return (
        <button type="button" className="btn btn-primary" id={"go-to-" + roomName + "-btn"}>Go To</button>
    );
}

createRoot(document.getElementById('go-to-lobby-btn-container')).render(<CreateGoToBtn roomName="lobby" />)
createRoot(document.getElementById('go-to-games-btn-container')).render(<CreateGoToBtn roomName="games" />)
createRoot(document.getElementById('go-to-ie-btn-container')).render(<CreateGoToBtn roomName="ie" />)
createRoot(document.getElementById('go-to-faq-btn-container')).render(<CreateGoToBtn roomName="faq" />)

// document.getElementById("go-to-games-btn").onclick =
// function () {
//     if (camera) {
//         camera.current.position.set();
//     }
// };

// Keybinds
const keybinds = new Set();
keybinds.add("Control");
keybinds.add("Tab");
const keybindsDict = 
{
    "Toggle Settings": "",
    "Zoom In": "",
    "Zoom Out": "",
    "Move Up": "",
    "Move Left": "",
    "Move Down": "",
    "Move Right": "",
    "Snap Up": "",
    "Snap Left": "",
    "Snap Down": "",
    "Snap Right": ""
};
var setToKey;
var validKeybind;
var changeControl;

// Handle keyboard input
document.onkeydown = 
function( e ) {
    // console.log(e.key);

    if (keybindOpen) {
        let prefix = keybindPrompt.innerHTML.split("to")[0];
        // console.log(keybinds);
        // console.log(e.key);
        // console.log(keybinds.has(e.key));
        if (!keybinds.has(e.key)) {
            if (e.key == "ArrowUp") {
                keybindPrompt.innerHTML = prefix + "to ↑";
            } else if (e.key == "ArrowLeft") {
                keybindPrompt.innerHTML = prefix + "to ←";
            } else if (e.key == "ArrowDown") {
                keybindPrompt.innerHTML = prefix + "to ↓";
            } else if (e.key == "ArrowRight") {
                keybindPrompt.innerHTML = prefix + "to →";
            } else {
                keybindPrompt.innerHTML = prefix + "to " + e.key;
            }
            keybindError.style.visibility = "hidden";
            setToKey = e.key;
            validKeybind = true;
        } else {
            if (e.key == "Control" || e.key == "Tab") {
                keybindPrompt.innerHTML = prefix + "to " + e.key;
                keybindError.innerHTML = "This is an illegal keybind. Please use another key.";
                validKeybind = false;
                keybindError.style.color = "red";
                keybindError.style.visibility = "visible";
            } else {
                let errorPostfix = "is already being used. Enter a different key.";
                if (e.key == "ArrowUp") {
                    keybindPrompt.innerHTML = prefix + "to ↑";
                    keybindError.innerHTML = "'↑' " + errorPostfix;
                } else if (e.key == "ArrowLeft") {
                    keybindPrompt.innerHTML = prefix + "to ←";
                    keybindError.innerHTML = "'←' " + errorPostfix;
                } else if (e.key == "ArrowDown") {
                    keybindPrompt.innerHTML = prefix + "to ↓";
                    keybindError.innerHTML = "'↓' " + errorPostfix;
                } else if (e.key == "ArrowRight") {
                    keybindPrompt.innerHTML = prefix + "to →";
                    keybindError.innerHTML = "'→' " + errorPostfix;
                } else {
                    keybindPrompt.innerHTML = prefix + "to " + e.key;
                    keybindError.innerHTML = `'${e.key}' ` + errorPostfix;
                }
                validKeybind = false;
                keybindError.style.color = "red";
                keybindError.style.visibility = "visible";
            }
        }
    }

    if (e.key == keybindsDict["Toggle Settings"]) {
        if (!keybindOpen) {
            // if (camera) {
            //     console.log(camera.current.getFocalLength());
            // }
            ToggleSettings();
        }
    }

    if (e.key == keybindsDict["Zoom In"]) {
        ZoomIn();
    }

    if (e.key == keybindsDict["Zoom Out"]) {
        ZoomOut();
    }

    if (e.key == "r") {
        ResetCameraPos();
    }
    
    if (e.key == keybindsDict["Snap to Lobby"]) {
        GoToLobby();
    }

    if (e.key == keybindsDict["Snap to Games"]) {
        GoToGames();
    }
    
    if (e.key == keybindsDict["Snap to Industry Events"]) {
        GoToIe();
    }

    if (e.key == keybindsDict["Snap to FAQ"]) {
        GoToFaq();
    }

};

// Overlay vars
var settingsOpen = false;
var keyBoardControlsOpen = false;
var helpOpen = false;
var creditsOpen = false;
var navBarOpen = false;
var anySettingsOpen = false;

// Toggle the settings overlay by clicking
document.getElementById( "settings-btn" ).onclick = 
function() {
    ToggleSettings();
};

// Toggle the keyboard controls overlay by clicking
document.getElementById( "keyboard-controls-btn" ).onclick = 
function() {
    ToggleKeyboardControls();
};

// Toggle the help overlay by clicking
document.getElementById( "help-btn" ).onclick = 
function() {
    ToggleHelp();
};

// Toggle the credits overlay by clicking
document.getElementById( "credits-btn" ).onclick = 
function() {
    ToggleCredits();
};

// Change the navBarOpen var onclick
navBarToggleBtn.onclick = 
function() {
    ToggleNavBar();
};

function UpdateAnySettingsOpen() {
    anySettingsOpen = settingsOpen || keyBoardControlsOpen || helpOpen || creditsOpen;
    if (anySettingsOpen) {
        navBarToggleBtn.disabled = true;
    } else {
        navBarToggleBtn.disabled = false;
    }
}

// Toggle the settings overlay
function ToggleSettings() {
    // console.log(settingsOpen);
    if (keyBoardControlsOpen && !settingsOpen) {
        keyboardControlsOverlay.style.visibility = "hidden";
        keyBoardControlsOpen = false;
    } else if (helpOpen && !settingsOpen) {
        helpOverlay.style.visibility = "hidden";
        helpOpen = false;
    } else if (creditsOpen && !settingsOpen) {
        creditsOverlay.style.visibility = "hidden";
        creditsOpen = false;
    } else if (!settingsOpen) {
        if (!navBarOpen) {
            settingsOverlay.style.visibility = "visible";
            settingsOpen = true;
        }
    } else if (settingsOpen) {
        settingsOverlay.style.visibility = "hidden";
        settingsOpen = false;
    }

    UpdateAnySettingsOpen();
}

// Toggle the keyboard controls overlay
function ToggleKeyboardControls() {
    // console.log(keyBoardControlsOpen);
    if (!keyBoardControlsOpen) {
        keyboardControlsOverlay.style.visibility = "visible";
        keyBoardControlsOpen = true;

        settingsOverlay.style.visibility = "hidden";
        settingsOpen = false;
    }

    UpdateAnySettingsOpen();
}

// Toggle the help overlay
function ToggleHelp() {
    if (!helpOpen) {
        helpOverlay.style.visibility = "visible";
        helpOpen = true;

        settingsOverlay.style.visibility = "hidden";
        settingsOpen = false;
    }

    UpdateAnySettingsOpen();
}

// Toggle the credits overlay
function ToggleCredits() {
    if (!creditsOpen) {
        creditsOverlay.style.visibility = "visible";
        creditsOpen = true;

        settingsOverlay.style.visibility = "hidden";
        settingsOpen = false;
    }

    UpdateAnySettingsOpen();
}

// Change the navBarOpen var
function ToggleNavBar() {
    if (!navBarOpen) {
        navBarOpen = true;
    } else {
        navBarOpen = false;
    }
}

function CreateKeybind( control, key ) {
    keybinds.add(key);
    keybindsDict[control] = key;

    if (key == "ArrowUp") {
        key = "↑";
    } else if (key == "ArrowLeft") {
        key = "←";
    } else if (key == "ArrowDown") {
        key = "↓";
    } else if (key == "ArrowRight") {
        key = "→";
    }

    return (
        <div className="keybind-container">

            <div className="row">
                <div className="col-6">
                    <button type="button" className="btn btn-dark keybind-btn" id={control+"-btn"}>{key}</button>
                </div>
                <div className="col-6">
                    <p className="align-middle text-left ml-2">{control}</p>
                </div>
            </div>
           
        </div>
    )
}

function GenerateZoomKeybinds () {
    return (
        <>
            {CreateKeybind("Toggle Settings", "Escape")}
            {CreateKeybind("Zoom In", "Shift")}
            {CreateKeybind("Zoom Out", "z")}
        </>
    )
}

function GenerateMovementKeybinds () {
    return (
        <>
            {CreateKeybind("Move Up", "w")}
            {CreateKeybind("Move Left", "a")}
            {CreateKeybind("Move Down", "s")}
            {CreateKeybind("Move Right", "d")}
        </>
    )
}

function GenerateSnapKeybinds () {
    return (
        <>
            {CreateKeybind("Snap to Lobby", "ArrowUp")}
            {CreateKeybind("Snap to Games", "ArrowLeft")}
            {CreateKeybind("Snap to Industry Events", "ArrowDown")}
            {CreateKeybind("Snap to FAQ", "ArrowRight")}
        </>
    )
}

createRoot(zoomKeybindContainer).render(<GenerateZoomKeybinds />)
createRoot(movementKeybindContainer).render(<GenerateMovementKeybinds />)
createRoot(snapKeybindContainer).render(<GenerateSnapKeybinds />)

// Keybind Popup vars
var keybindOpen = false;

var allKeybindBtns = document.getElementsByClassName( "keybind-btn" );

// Open the keybind popup
function OpenKeybind() {
    if (!keybindOpen) {
        setToKey = "";
        keybindError.style.visibility = "hidden";
        keybindPopup.style.visibility = "visible";
        keybindOpen = true;
    }
}

// Close the keybind popup
function CloseKeybind() {
    if (keybindOpen) {
        keybindError.style.visibility = "hidden";
        keybindPopup.style.visibility = "hidden";
        keybindOpen = false;
    }
}

function GoToLobby() {
    if (camera) {
        camera.current.position.set(10, 3, 0);
        camera.current.lookAt(0, 0, 0);
        camera.current.updateProjectionMatrix();
    }
}

function GoToGames() {
    if (camera) {
        camera.current.position.set(-10, 3, 0);
        camera.current.lookAt(0, 0, 0);
        camera.current.updateProjectionMatrix();
    }
}

function GoToIe() {
    if (camera) {
        camera.current.position.set(-1, 3, -15);
        camera.current.lookAt(0, 0, 0);
        camera.current.updateProjectionMatrix();
    }
}

function GoToFaq() {
    if (camera) {
        camera.current.position.set(-1, 3, 15);
        camera.current.lookAt(0, 0, 0);
        camera.current.updateProjectionMatrix();
    }
}

// Wait for the doc to load, then assign all keybind btn onclick events to open the keybind popup
$( document ).ready(function() {
    var goToLobbyBtn = document.getElementById("go-to-lobby-btn");
    if (goToLobbyBtn) {
        goToLobbyBtn.onclick =
        function () {
            GoToLobby();
        };
    }

    var goToGamesBtn = document.getElementById('go-to-games-btn')
    if (goToGamesBtn) {
        goToGamesBtn.onclick =
        function () {
            GoToGames();
        };
    }

    var goToIeBtn = document.getElementById('go-to-ie-btn')
    if (goToIeBtn) {
        goToIeBtn.onclick =
        function () {
            GoToIe();
        };
    }

    var goToFaqBtn = document.getElementById('go-to-faq-btn')
    if (goToFaqBtn) {
        goToFaqBtn.onclick =
        function () {
            GoToFaq();
        };
    }

    for ( let keybind of allKeybindBtns ) {
        keybind.onclick = 
            function () {
                changeControl = keybind.id.replace("-btn", "");
                keybindPrompt.innerHTML = "Change " + keybind.innerHTML + " to ___";
                OpenKeybind();
            };
    }
});

document.getElementById("keybind-confirm-btn").onclick =
function () {
    if (setToKey != "" && validKeybind) {
        keybinds.delete(keybindsDict[changeControl]);
        keybindsDict[changeControl] = setToKey;
        keybinds.add(setToKey);

        let key = keybindsDict[changeControl];

        let upKey = "Key" + (keybindsDict["Move Up"]).toUpperCase();
        let leftKey = "Key" + (keybindsDict["Move Left"]).toUpperCase();
        let downKey = "Key" + (keybindsDict["Move Down"]).toUpperCase();
        let rightKey = "Key" + (keybindsDict["Move Right"]).toUpperCase();

        if (movementControls) {
            if (changeControl == "Move Up" || changeControl == "Move Left" || changeControl == "Move Down" ||
                changeControl == "Move Right") {
                SetMovementKeybinds(movementControls, upKey, leftKey, downKey, rightKey)
            }
        }

        if (key == "ArrowUp") {
            document.getElementById( changeControl + "-btn" ).innerHTML = "↑";
        } else if (key == "ArrowLeft") {
            document.getElementById( changeControl + "-btn" ).innerHTML = "←";
        } else if (key == "ArrowDown") {
            document.getElementById( changeControl + "-btn" ).innerHTML = "↓";
        } else if (key == "ArrowRight") {
            document.getElementById( changeControl + "-btn" ).innerHTML = "→";
        } else {
            document.getElementById( changeControl + "-btn" ).innerHTML = keybindsDict[changeControl];
        }

        CloseKeybind();
    }
};

document.getElementById("keybind-cancel-btn").onclick =
function () {
    CloseKeybind();
};

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
        createRoot(navBarGameLst).render(<GenerateGameLst />)
    }
});
// console.log("console: ", data);

function CreateGameTab( gameTitle, description, link ) {
    return (
        <div className="card" id={gameTitle+"-tab"} key={gameTitle+"-tab"}>
            <img src={gameTitle+".png"} className="card-img-top" alt={gameTitle + " cover"}></img>
            <div className="card-body">
                <h5 className="card-title">{gameTitle}</h5>
                <p className='card-description'>{description}</p>
                <a href={link} target="_blank" className="btn btn-primary">Play the game</a>
            </div>
        </div>
    )
}

function GenerateGameLst() {
    let tabs = [];
    for (let i in data) {
        tabs.push(CreateGameTab(data[i]["Game Title"], data[i]["Description"], data[i]["Itch.io Link"]));
    }

    return (
        <>
            {tabs}
        </>
    )
}

var lobbyCollapseBtn = document.getElementById("lobby-collapse-btn");
var lobbyCollapseOpen = false;
lobbyCollapseBtn.onclick =
function () {
    if (!lobbyCollapseOpen) {
        lobbyCollapseOpen = true;
        lobbyCollapseBtn.innerHTML = "Hide";
    } else {
        lobbyCollapseOpen = false;
        lobbyCollapseBtn.innerHTML = "Show";
    }
};

var gamesCollapseBtn = document.getElementById("games-collapse-btn");
var gamesCollapseOpen = false;
gamesCollapseBtn.onclick =
function () {
    if (!gamesCollapseOpen) {
        gamesCollapseOpen = true;
        gamesCollapseBtn.innerHTML = "Hide";
    } else {
        gamesCollapseOpen = false;
        gamesCollapseBtn.innerHTML = "Show";
    }
};

var ieCollapseBtn = document.getElementById("ie-collapse-btn");
var ieCollapseOpen = false;
ieCollapseBtn.onclick =
function () {
    if (!ieCollapseOpen) {
        ieCollapseOpen = true;
        ieCollapseBtn.innerHTML = "Hide";
    } else {
        ieCollapseOpen = false;
        ieCollapseBtn.innerHTML = "Show";
    }
};

var faqCollapseBtn = document.getElementById("faq-collapse-btn");
var faqCollapseOpen = false;
faqCollapseBtn.onclick =
function () {
    if (!faqCollapseOpen) {
        faqCollapseOpen = true;
        faqCollapseBtn.innerHTML = "Hide";
    } else {
        faqCollapseOpen = false;
        faqCollapseBtn.innerHTML = "Show";
    }
};

// animation name: body|Take 001|BaseLayer
function BearMO () {
    const { scene, animations } = useGLTF('bearmofloat.glb');
    const modelRef = useRef();
    const animationAction = useRef();
    const {actions} = useAnimations(animations);

    const playAnimation = (name) => {
        if (actions['body|Take 001|BaseLayer']) {
            actions['body|Take 001|BaseLayer'].play();
        }
    }
    
    return <primitive object = {scene} ref = {modelRef} onclick = {() => playAnimation('body|Take 001|BaseLayer')}/>;
}



createRoot(document.getElementById('root')).render(<App />)