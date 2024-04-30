//functions
function initFrameList(n){
    for (let index = 0; index < n; index++) {
        const frame = document.createElement("div")
        frame.style.backgroundColor=rgb(100,255-i*24,0+i*20)
        frameList.push(frame)
    }
}

//const values
const frameList = []

//let
let frameIndex= 3

//main
initFrameList(7)

