import SetMovementKeybinds from './react.jsx'
import keybindsDict from './script.jsx'

var movementKeybinds = {
    "UP": keybindsDict["Move Up"],
    "LEFT": keybindsDict["Move Left"],
    "BOTTOM": keybindsDict["Move Down"],
    "RIGHT": keybindsDict["Move Right"],
}

document.getElementById("keybind-confirm-btn").onclick =
function () {
    SetMovementKeybinds(movementKeybinds, keybindsDict["Move Up"], keybindsDict["Move Left"], keybindsDict["Move Down"], keybindsDict["Move Right"]);
    console.log(movementKeybinds);
};