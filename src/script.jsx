import React from 'react'
import { createRoot } from 'react-dom/client'

// HTML element vars
const settingsOverlay = document.getElementById( "settings-overlay" );
const keyboardControlsOverlay = document.getElementById( "keyboard-controls-overlay" );
const helpOverlay = document.getElementById( "help-overlay" );
const creditsOverlay = document.getElementById( "credits-overlay" );

const zoomKeybindContainer = document.getElementById( "zoom-keybind-container" );
const movementKeybindContainer = document.getElementById( "movement-keybind-container" );
const rotationKeybindContainer = document.getElementById( "rotation-keybind-container" );

// Keybinds
var toggleSettingsKey = "Escape";
var ToggleKeyboardControlsKey = "t";

// Handle keyboard input
document.onkeydown = 
function( e ) {
    // console.log(e.key);

    if (e.key == "Escape") {
        ToggleSettings();
    }

};


// Overlay vars
var settingsOpen = false;
var keyBoardControlsOpen = false;
var helpOpen = false;
var creditsOpen = false;

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
        settingsOverlay.style.visibility = "visible";
        settingsOpen = true;
    } else if (settingsOpen) {
        settingsOverlay.style.visibility = "hidden";
        settingsOpen = false;
    }
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
}

// Toggle the help overlay
function ToggleHelp() {
    if (!helpOpen) {
        helpOverlay.style.visibility = "visible";
        helpOpen = true;

        settingsOverlay.style.visibility = "hidden";
        settingsOpen = false;
    }
}

// Toggle the credits overlay
function ToggleCredits() {
    if (!creditsOpen) {
        creditsOverlay.style.visibility = "visible";
        creditsOpen = true;

        settingsOverlay.style.visibility = "hidden";
        settingsOpen = false;
    }
}

function CreateKeybind( control, key ) {
    return (
        <div className="keybind-container" id={control+"-keybind"}>

            <div className="row">
                <div className="large-keybind-btn">
                    <button type="button" className="btn btn-dark">{key}</button>
                </div>

                <p className="align-middle text-center ml-2">{control}</p>
            </div>
           
        </div>
    )
}

function GenerateZoomKeybinds () {
    return (
        <>
            {CreateKeybind("Toggle Settings", "ESC")}
            {CreateKeybind("Zoom In", "SHIFT")}
            {CreateKeybind("Zoom Out", "CTRL")}
        </>
    )
}

function GenerateMovementKeybinds () {
    return (
        <>
            {CreateKeybind("Move Up", "W")}
            {CreateKeybind("Move Left", "A")}
            {CreateKeybind("Move Down", "S")}
            {CreateKeybind("Move Right", "D")}
        </>
    )
}

function GenerateRotationKeybinds () {
    return (
        <>
            {CreateKeybind("Rotate Up", "↑")}
            {CreateKeybind("Rotate Left", "←")}
            {CreateKeybind("Rotate Down", "↓")}
            {CreateKeybind("Rotate Right", "→")}
        </>
    )
}

createRoot(zoomKeybindContainer).render(<GenerateZoomKeybinds />)
createRoot(movementKeybindContainer).render(<GenerateMovementKeybinds />)
createRoot(rotationKeybindContainer).render(<GenerateRotationKeybinds />)