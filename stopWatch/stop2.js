let time = document.getElementById("sw-time");
let resetbtn = document.getElementById("rst");
let gobtn = document.getElementById("go");
let i = document.getElementsByTagName("i");
let isrun = false;
let h= 0;
let m=0;
let s=0;
let tim;



function start(){
    if(isrun== false){
        i[1].classList.remove("fa-play");
        i[1].classList.add("fa-pause");
        isrun = true
       timer()
    }
    else{
        i[1].classList.add("fa-play");
        i[1].classList.remove("fa-pause");
        isrun = false
        clearTimeout(tim)
    }
    
    

}
function timer(){
    s= parseInt(s)
   m= parseInt(m)
   h=parseInt(h)
 if(isrun==true){
   
    
    s++;
    if(s==60){
        s=0;
        m++
    }
    if(m==60){
        m=0;
        h++
    }
  if(s<10){
    s="0"+s
  }
  if(m<10){
    m="0"+m
  }
  if(h<10){
    h="0"+h
  }
 tim =setTimeout(timer, 1000);

 }
 
 time.innerHTML= h+":"+m+":"+s;
 
 


}
function reset() {
   clearTimeout(tim)
    isrun= false;
    h=0;
    m=0;
    s=0;
    time.innerHTML= "00:00:00"
    
}