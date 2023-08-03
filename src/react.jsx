import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// const root = createRoot(document.querySelector('#taskbar'))

// root.render(
    
// )

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