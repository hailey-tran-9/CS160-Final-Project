import React, { useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, extend } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Bounds, useBounds } from '@react-three/drei'
import { Outline } from '@react-three/postprocessing'
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'

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

// to reference Camera later

function App() {
    const cameraRef = useRef()

    return (

        <div id="canvas-container" style={{ width: "100%", height: "100vh" }}>

            <Canvas>

                <ambientLight />
                <directionalLight />

                <PerspectiveCamera ref = {cameraRef} makeDefault position={[8, 3, 0]} />
                <Rooms position={[0, 0, 0]}  scale={[8, 8, 8]}/>
                <Bounds>
                    <FocusObject>
                        <Couch 
                            onPointerEnter={(e) => HighlightObject(e, cameraRef)} 
                            onPointerLeave={(e) => UnhighlightObject(e, cameraRef)} 
                            position={[-2.4, 0.28, -2.5]} rotation={[0, Math.PI, 0]} 
                            scale={[0.9, 0.9, 0.9]}
                        />
                        <Couch 
                            onPointerEnter={(e) => HighlightObject(e, cameraRef)} 
                            onPointerLeave={(e) => UnhighlightObject(e, cameraRef)} 
                            position={[-3.25, 0.28, -1.5]} rotation={[0, - Math.PI / 2, 0]} 
                            scale={[0.9, 0.9, 0.9]}
                        />

                        <Desk 
                            onPointerEnter={(e) => HighlightObject(e, cameraRef)} 
                            onPointerLeave={(e) => UnhighlightObject(e, cameraRef)} 
                            position={[-1.6, 0.270, 1.5]}
                            scale={[0.3, 0.3, 0.3]}
                        />

                        <ElectricGuitar 
                            onClick={(e) => DisplayInfo( "[ME][TA]L" )} 
                            onPointerEnter={(e) => HighlightObject(e, cameraRef)} 
                            onPointerLeave={(e) => UnhighlightObject(e, cameraRef)} 
                            position={[-1.25, 0.125, -2.25]} 
                            rotation={[0, -Math.PI/2, 0]} 
                            scale={[0.04, 0.04, 0.04]} 
                        />


                    </FocusObject>   
                </Bounds>            
                    
                {/* <Controller onClick={(e) => DisplayInfo( "TEST" )} position={[0, 2, 0]} scale={[0.05, 0.05, 0.05]} /> */}

                <OrbitControls />

            </Canvas>
            
        </div>
    )

  }
  
// set up a camera's position storage var
let cameraPos; 
  
  //Model focus functions
function HighlightObject (e, cameraRef) {
    let thisScale = e.eventObject.scale;
    thisScale.set(thisScale.x * 1.2, thisScale.y * 1.2, thisScale.z * 1.2)
}

function UnhighlightObject (e, cameraRef) {
    let thisScale = e.eventObject.scale;
    thisScale.set(thisScale.x / 1.2, thisScale.y / 1.2, thisScale.z / 1.2);
}

function FocusObject({children}) {
    // get and set the position of the object that the Camera want to focus on
    console.log()
    const api = useBounds()
    return (
        <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
            {children}
        </group>
    )
}

function UnfocusObject(e) {

}

// Helper func for clicking on game models
var gamePopupOpen = false;
function DisplayInfo ( objName ) {
    for (let i in data) {
        if (data[i]["Game Title"] == objName) {
            // console.log(data[i]);

            // Get HTML elements
            var gamePopup = document.getElementById( "game-popup" );
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
            gameUrl.innerHTML = data[i]["Itch.io Link"];

            // Toggle game popup
            if (!gamePopupOpen) {
                gamePopup.style.visibility = "visible";
                gamePopupOpen = true;
            } else {
                gamePopup.style.visibility = "hidden";
                gamePopupOpen = false;
            }
            
        }
    }

}

// Store the info from descriptions.csv into an JS object
var data;
var papa_csv = Papa.parse('/descriptions.csv', {
    download: true,
    header: true,
    quoteChar: '"',
    delimiter:",",
    complete: function(results) {
        console.log("Parse results: ", results.data);
        data = results.data;
    }
});
// console.log("console: ", data);
  
createRoot(document.getElementById('root')).render(<App />)
