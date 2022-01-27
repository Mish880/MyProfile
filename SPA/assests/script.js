document.getElementById("customerpage").style.display="none";
document.getElementById("itempage").style.display="none";


/*Home Page*/
document.getElementById("homeBtn").addEventListener("click",function () {
     document.getElementById("customerpage").style.display="none";
     document.getElementById("itempage").style.display="none";
     document.getElementById("mainpage").style.display="block";
})

/*Customer page*/
document.getElementById("customerBtn").addEventListener("click",function () {
   document.getElementById("mainpage").style.display="none";
   document.getElementById("itempage").style.display="none";
   document.getElementById("customerpage").style.display="block";
})

/*Item Page*/
document.getElementById("itemBtn").addEventListener("click",function () {
   document.getElementById("mainpage").style.display="none";
   document.getElementById("customerpage").style.display="none";
   document.getElementById("itempage").style.display="block";
})
