function upDate(previewPic){
    console.log(previewPic);
   document.getElementById('image').style.backgroundImage= 'url('+previewPic.src+')';
     document.getElementById('image').innerHTML=previewPic.alt;
}
   
       function unDo(){
        document.getElementById('image').style.background='#8e68ff';
     document.getElementById('image').innerHTML='Hover over an image below to display here.';
 }
  
function functionSet() {
            var images = document.querySelectorAll(".preview");
            for (let i = 0; i < images.length; i++) {
                images[i].setAttribute("tabindex", "0");
                console.log("tabindex set for: " + images[i].alt);
            }
        }
window.addEventListener('load', functionSet);