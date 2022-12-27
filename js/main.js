// var list=document.getElementsByClassName('list')
// var lij=document.getElementsByClassName('lij')
// console.log(list)
// console.log(lij)
// window.onscroll=function(){
//     for(var i=0 ; i<list.length ; i++){
//   if(scrollY > list[i].offsetTop && scrolly < list[i].offsetTop +list.length)
  
//     }
// }
var mybut=document.getElementById('top')
window.onscroll = function(){
  if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 30){
    mybut.style.display='block'
  }
  else{
    mybut.style.display='none'
  }
}
mybut.onclick=function(){
  document.documentElement.scrollTop=0;
}