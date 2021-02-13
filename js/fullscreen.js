// Full Screen Func
// https://www.w3schools.com/howto/howto_js_fullscreen.asp (modified)
// https://www.w3schools.com
function makeFullScreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } 
    else {
    // for Safari Web Browser
    document.documentElement.webkitRequestFullscreen();
    }
}