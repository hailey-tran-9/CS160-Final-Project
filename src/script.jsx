import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'

import Papa from 'papaparse'

// HTML element vars
const settingsOverlay = document.getElementById( "settings-overlay" );
const keyboardControlsOverlay = document.getElementById( "keyboard-controls-overlay" );
const helpOverlay = document.getElementById( "help-overlay" );
const creditsOverlay = document.getElementById( "credits-overlay" );
const keybindPopup = document.getElementById( "keybind-popup" );

const zoomKeybindContainer = document.getElementById( "zoom-keybind-container" );
const movementKeybindContainer = document.getElementById( "movement-keybind-container" );
const rotationKeybindContainer = document.getElementById( "rotation-keybind-container" );

var keybindPrompt = document.getElementById("keybind-prompt");
var keybindError = document.getElementById("keybind-error");

const navBarGameLst = document.getElementById( "nav-bar-game-lst" );

// Keybinds
const keybinds = new Set();
const keybindsDict = 
{
    "Toggle Settings": "",
    "Zoom In": "",
    "Zoom Out": "",
    "Move Up": "",
    "Move Left": "",
    "Move Down": "",
    "Move Right": "",
    "Rotate Up": "",
    "Rotate Left": "",
    "Rotate Down": "",
    "Rotate Right": ""
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
            let errorPostfix = keybindError.innerHTML.split("is")[1];
            if (e.key == "ArrowUp") {
                keybindPrompt.innerHTML = prefix + "to ↑";
                keybindError.innerHTML = "'↑' is" + errorPostfix;
            } else if (e.key == "ArrowLeft") {
                keybindPrompt.innerHTML = prefix + "to ←";
                keybindError.innerHTML = "'←' is" + errorPostfix;
            } else if (e.key == "ArrowDown") {
                keybindPrompt.innerHTML = prefix + "to ↓";
                keybindError.innerHTML = "'↓' is" + errorPostfix;
            } else if (e.key == "ArrowRight") {
                keybindPrompt.innerHTML = prefix + "to →";
                keybindError.innerHTML = "'→' is" + errorPostfix;
            } else {
                keybindPrompt.innerHTML = prefix + "to " + e.key;
                keybindError.innerHTML = `'${e.key}' is` + errorPostfix;
            }
            validKeybind = false;
            keybindError.style.color = "red";
            keybindError.style.visibility = "visible";
        }
    }

    if (e.key == keybindsDict["Toggle Settings"]) {
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
            {CreateKeybind("Zoom Out", "Control")}
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

function GenerateRotationKeybinds () {
    return (
        <>
            {CreateKeybind("Rotate Up", "ArrowUp")}
            {CreateKeybind("Rotate Left", "ArrowLeft")}
            {CreateKeybind("Rotate Down", "ArrowDown")}
            {CreateKeybind("Rotate Right", "ArrowRight")}
        </>
    )
}

createRoot(zoomKeybindContainer).render(<GenerateZoomKeybinds />)
createRoot(movementKeybindContainer).render(<GenerateMovementKeybinds />)
createRoot(rotationKeybindContainer).render(<GenerateRotationKeybinds />)

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

// Wait for the doc to load, then assign all keybind btn onclick events to open the keybind popup
document.addEventListener("DOMContentLoaded", function() {
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

        let key = keybindsDict[changeControl];
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
        <div className="game-tab" id={gameTitle+"-tab"} key={gameTitle+"-tab"}>

            <div className="row">
                <div className="col-4">
                    <button type="button" className="btn btn-light" id={gameTitle+"-btn"}>{gameTitle}</button>
                </div>
                <div className="col-8">
                    <p>{description}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-4"></div>
                <div className="col-8">
                    <a href={link} target="_blank">{link}</a>
                </div>
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