// Sign In Page code

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinBtn.onclick =function(){
    namefield.style.maxHeight = "0";
    title.innerHTML="sign in";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable")
}
signupBtn.onclick =function(){
    namefield.style.maxHeight = "40px";
    title.innerHTML="sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable")
}

//End

// Code to popup a sign In Page

var signInButton1=document.getElementById("signInButton");
var signInContainer1=document.querySelector(".SignInContainer");

signInButton1.onclick=function(){

    // sectionBlock1.style.display="none";
    // signInContainer1.style.backgroundColor="black";
    signInContainer1.style.display="block";

}

var crosIcon=document.getElementById("crosIcon");

crosIcon.onclick=function(){

    signInContainer1.style.display="none";
}


// dropdown
function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
  }
  
  function selectCategory(category) {
    // alert("Selected category: " + category);
    // You can perform any action here based on the selected category
  }
  



