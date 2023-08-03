import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

const root = createRoot(document.querySelector('#canvas'))

root.render(
    <>
        < mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="hotpink" transparent />
            onClick={(e) => console.log('click')}
            onContextMenu={(e) => console.log('context menu')}
            onDoubleClick={(e) => console.log('double click')}
            onWheel={(e) => console.log('wheel spins')}
            onPointerUp={(e) => console.log('up')}
            onPointerDown={(e) => console.log('down')}
            onPointerOver={(e) => console.log('over')}
            onPointerOut={(e) => console.log('out')}
            onPointerEnter={(e) => console.log('enter')} // see note 1
            onPointerLeave={(e) => console.log('leave')} // see note 1
            onPointerMove={(e) => console.log('move')}
            onPointerMissed={() => console.log('missed')}
            onUpdate={(self) => console.log('props have been updated')}
        </mesh>
    </>
)

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
