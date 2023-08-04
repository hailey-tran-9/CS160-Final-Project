import React from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, extend } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

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

// Toggle the settings menu
var settingsOpen = false;
document.getElementById( "settings-btn" ).onclick = 
function() {
    // console.log(settingsOpen);
    if (!settingsOpen) {
        document.getElementById( "settings-popup" ).style.visibility = "visible";
        settingsOpen = true;
    } else {
        document.getElementById( "settings-popup" ).style.visibility = "hidden";
        settingsOpen = false;
    }
};

// Toggle the keyboard controls menu
var keyBoardControlsOpen = false;
document.getElementById( "keyboard-controls-btn" ).onclick = 
function() {
    // console.log(keyBoardControlsOpen);
    if (!keyBoardControlsOpen) {
        document.getElementById( "keyboard-controls-popup" ).style.visibility = "visible";
        keyBoardControlsOpen = true;
    } else {
        document.getElementById( "keyboard-controls-popup" ).style.visibility = "hidden";
        keyBoardControlsOpen = false;
    }
};

function App() {

    return (

        <div id="canvas-container" style={{ width: "100%", height: "100vh" }}>

            <Canvas>

                <ambientLight />
                <directionalLight />

                <PerspectiveCamera makeDefault position={[7, 3, 0]} />
                <Rooms position={[0, 0, 0]}  scale={[8, 8, 8]}/>
                <Couch onPointerEnter={(e) => HighlightObject(e)} onPointerLeave={(e) => UnhighlightObject(e)} position={[-2.4, 0.28, -2.5]} rotation={[0, Math.PI, 0]} scale={[0.9, 0.9, 0.9]}/>
                <Desk onPointerEnter={(e) => HighlightObject(e)} onPointerLeave={(e) => UnhighlightObject(e)} position={[0, 0, 0]}/>
                
                <Controller onClick={(e) => DisplayInfo( "TEST" )} position={[0, 2, 0]} scale={[0.05, 0.05, 0.05]} />

                <OrbitControls />

            </Canvas>
            
        </div>
    )

  }

  //Model focus functions
function HighlightObject (e) {
    let thisScale = e.eventObject.scale;
    thisScale.set(thisScale.x * 1.2, thisScale.y * 1.2, thisScale.z * 1.2);
}

function UnhighlightObject (e) {
    let thisScale = e.eventObject.scale;
    thisScale.set(thisScale.x / 1.2, thisScale.y / 1.2, thisScale.z / 1.2);
}

// Helper func for clicking on game models
function DisplayInfo ( objName ) {
    for (let i in data) {
        // console.log(data[i]);
        if (data[i]["Game Title"] == objName) {
            console.log(data[i]);
        }
    }

}

// Store the info from descriptions.csv into an JS object
var data;
var papa_csv = Papa.parse('/descriptions.csv', {
    download: true,
    header: true,
    delimiter:",",
    complete: function(results) {
        console.log("Parse results: ", results.data);
        data = results.data;
    }
});
// console.log("console: ", data);
  
createRoot(document.getElementById('root')).render(<App />)
