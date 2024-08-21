let body=document.querySelector("body")
let span=document.querySelector("span")

body.addEventListener("mousemove",(event) => {
    let x=event.offsetX;
    let y=event.offsetY;
    
    const spannew=document.createElement("span");
    const spannew2=document.createElement("h1")
    spannew.style.left=x+"px";
    spannew.style.top=y+"px"
    spannew2.style.left=x+150+"px";
    spannew2.style.top=y+200+"px"
    spannew2.innerText="Love You Pika ❤"
    const size=Math.random()*100
    spannew.style.width=size +"px"
    spannew.style.height=size +"px"
    spannew2.style.width=size+150+"px"
    spannew2.style.height=size+150+"px"
    body.appendChild(spannew);
    body.appendChild(spannew2);
    setTimeout(() => {
        spannew.remove()
        spannew2.remove()
    },3000 );
})
