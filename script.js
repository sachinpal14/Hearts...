let body=document.querySelector("body")
let span=document.querySelector("span")

body.addEventListener("mousemove",(event) => {
    let x=event.offsetX;
    let y=event.offsetY;
    
    const spannew=document.createElement("span");

    spannew.style.left=x+"px";
    spannew.style.top=y+"px"
  
    const size=Math.random()*100
    spannew.style.width=size +"px"
    spannew.style.height=size +"px"
  
    body.appendChild(spannew);

    setTimeout(() => {
        spannew.remove()
      
    },3000 );
})
