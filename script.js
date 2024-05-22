//functions
function initFrameList(n){
    for (let index = 0; index < n; index++) {
        const frame = document.createElement("div")
        frame.classList.add(colorList[index])
        frame.style.backgroundColor=colorList[index]
        frameList.push(frame)
    }
}
function initBtn(){
    frameList.forEach(f=>{
        const btn = document.createElement("button");
        btn.classList.add("frameBtn");
        btn.addEventListener("click", e=>{actionBtn(e)})
        btnParentList.appendChild(btn);
    })
    
}

function actionBtn(e){
    console.log(e)
    for (let index = 0; index < frameIndex.length; index++) {
        console.log(btnList)
        if(btnList[index]===e.target){
            frameIndex=index
        }
        
    }
    setSliderFrame()

}

//const values
const left = document.querySelector(".left")
const center = document.querySelector(".center")
const right = document.querySelector(".right")
const leftBtn = document.querySelector(".leftBtn")
leftBtn.addEventListener("click",()=>{
    if(frameIndex>0){
        frameIndex--
    }
    setSliderFrame()
})
const rightBtn = document.querySelector(".rightBtn")
rightBtn.addEventListener("click",()=>{
    if(frameIndex<6){
        frameIndex++
    }
    setSliderFrame()
})
const colorList = ["red","orange","purple","green","yellow","blue","viola"]
const frameList = []
const currInd = []
const btnList = []
const btnParentList = document.querySelector(".btn-list")
const setSliderFrame = () => {
    left.innerHTML=""
    center.innerHTML = ""
    right.innerHTML=""
    left.style.backgroundColor = ""
    center.style.backgroundColor = ""
    right.style.backgroundColor=""

    if(frameIndex==0){
        frameList[frameIndex].classList.add("center")
        frameList[frameIndex+1].classList.add("right")

        center.style.backgroundColor=colorList[frameIndex]
        right.style.backgroundColor=colorList[frameIndex+1]


    }else if(frameIndex == 6){
        frameList[frameIndex].classList.add("center")
        frameList[frameIndex-1].classList.add("left")

        center.style.backgroundColor=colorList[frameIndex]
        left.style.backgroundColor=colorList[frameIndex-1]

    }else{
        frameList[frameIndex-1].classList.add("right")
        frameList[frameIndex].classList.add("center")
        frameList[frameIndex+1].classList.add("right")

        center.style.backgroundColor=colorList[frameIndex]
        right.style.backgroundColor=colorList[frameIndex+1]
        left.style.backgroundColor=colorList[frameIndex-1]
    }
    const a = Array.from(btnParentList.childNodes)
    a.forEach(e=>{
        e.style.backgroundColor=""
    })
    a[frameIndex].style.backgroundColor="lightslategrey"
    console.log(a[2].style.backgroundColor)
    //btnParentList.children[frameIndex].style.backgroundColor="grey"
}

//let
let frameIndex= 3

//main
initFrameList(7)
initBtn()
setSliderFrame()




