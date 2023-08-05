// Menu vars
var settingsOpen = false;
var keyBoardControlsOpen = false;

// Toggle the settings menu
document.getElementById( "settings-btn" ).onclick = 
function() {
    // console.log(settingsOpen);
    if (keyBoardControlsOpen && !settingsOpen) {
        document.getElementById( "keyboard-controls-overlay" ).style.visibility = "hidden";
        keyBoardControlsOpen = false;
    } else if (!settingsOpen) {
        document.getElementById( "settings-overlay" ).style.visibility = "visible";
        settingsOpen = true;
    } else if (settingsOpen) {
        document.getElementById( "settings-overlay" ).style.visibility = "hidden";
        settingsOpen = false;
    }
};

// Toggle the keyboard controls menu
document.getElementById( "keyboard-controls-btn" ).onclick = 
function() {
    // console.log(keyBoardControlsOpen);
    if (!keyBoardControlsOpen) {
        document.getElementById( "keyboard-controls-overlay" ).style.visibility = "visible";
        keyBoardControlsOpen = true;

        document.getElementById( "settings-overlay" ).style.visibility = "hidden";
        settingsOpen = false;
    }
};