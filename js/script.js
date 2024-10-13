let main = document.querySelector('.main');

main.addEventListener('click',function(){
    // console.log("click is occured");   
})
main.addEventListener('dblclick',function(){
    // console.log("dubbol click is occured");   
})
main.addEventListener('mousedown',function(){
    // console.log("mousedown is occured");   
})
main.addEventListener('mouseup',function(){
    // console.log("mouseup is occured");   
})
main.addEventListener('mouseenter',function(){
    // console.log("mouseenter is occured");   
})
main.addEventListener('mouseleave',function(){
    // console.log("mouseleave is occured");   
})
main.addEventListener('mouseover',function(){
    // console.log("mouseover is occured");   
})
main.addEventListener('mousemove',function(){
    // console.log("mousemove is occured");   
})
main.addEventListener('mousemove',function(e){
    //   console.log('clientX = ' + e.clientX + ' ClientY = ' + e.clientY);
    //   console.log('OffsetX = ' + e.offsetX + ' OffsetY = ' + e.offsetY);
       
})

let buttons = document.querySelectorAll('.main2');
 Array.from(buttons).map((item)=>{
    item.addEventListener('click',function(e){
        console.log(e.target.innerText);
        
    })
   
 })

