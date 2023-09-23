const stopwatchAction = document.querySelector("#start-stop");
const reset = document.querySelector("#reset")
const currentSession = document.querySelector(".current-lap");
let isRunning = false;
let startTime = 0;
let resumeTime 
let currentTime =0;
let displayContent 
let id


const handleStartStop = ()=>{
if(!isRunning){
    if(resumeTime){
        startTime = Date.now()-(resumeTime?resumeTime:0);
    }else{
        startTime = Date.now()-(startTime?startTime:0);
    }
    id =  setInterval(updateUI, 10)
    stopwatchAction.textContent = "Stop"
}else{
    clearInterval(id)
    resumeTime = currentTime  
}
isRunning = !isRunning
}

const updateUI=()=>{
     currentTime = Date.now()- startTime
    const minutes = Math.floor(currentTime/60000);
    const seconds = Math.floor((currentTime%60000)/1000);
    const milliSeconds = Math.floor((currentTime%1000)/10)
    displayContent = `${String(minutes).padStart(2,0)}: ${String(seconds).padStart(2,0)} : ${String(milliSeconds).padStart(2,0)}`;
    currentSession.textContent = displayContent;
}

const handleReset = () =>{
    currentSession.textContent = "00:00:00";
    resumeTime = undefined;
    startTime = 0;
    isRunning = false
    clearInterval(id)
}


reset.addEventListener('click',handleReset)

stopwatchAction.addEventListener("click",handleStartStop)