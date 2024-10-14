const hours=document.querySelector("#hours")
const minutes=document.querySelector("#minutes")
const seconds=document.querySelector("#seconds")
const sections=document.querySelector("#section")

const clock=document.querySelector("#clock")

// clock.innerHTML=new Date().getHours()
// clock.innerHTML=new Date().getMinutes()
//  clock.innerHTML=new Date().getSeconds()

 let displayTime=()=>{
    let hrs=new Date().getHours()
    let mins=new Date().getMinutes()
    let sec=new Date().getSeconds()

    if(hrs>=12){
        sections.innerHTML="PM"
    }else{
        sections.innerHTML="AM"
    }

    if(hrs>=12){
        hrs=hrs-12
    }
if(sec<10){
    sec="0"+sec
}
if(mins<10){
    mins="0"+mins
}
    hours.innerHTML=hrs
    minutes.innerHTML = mins
    seconds.innerHTML=sec
 }

 setInterval(displayTime,10)