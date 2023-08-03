import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// const root = createRoot(document.querySelector('#taskbar'))

// root.render(
    
// )

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
