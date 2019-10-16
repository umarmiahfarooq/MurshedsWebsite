var iframes = document.getElementsByTagName('iframe');
var form = document.getElementsByTagName('form');
function toggleMobileMenu(){
    //show menu
    if(document.getElementById("testingdrop").style.visibility != "visible"){
        document.getElementById("testingdrop").style.visibility = "visible";
        document.getElementById("testingdrop").style.transition = "0.5s";
        //document.getElementById("testingdrop").style.width = "55%";
        document.getElementById("dropdownIcon").style.color = "#ffc800";
        //get all iframes elements and change opacity
        for(var i=0; i<frames.length; i++){
            iframes[i].style.opacity = "0.5";
        }
    }
    //hide menu
    else{
        document.getElementById("testingdrop").style.visibility = "hidden";
        document.getElementById("testingdrop").style.width = "55%";
        document.getElementById("dropdownIcon").style.color = "black";
        for(var i=0; i<frames.length; i++){
            iframes[i].style.opacity = "1";
        }
    }
}


function toggleMobileMenuE(){
    //show menu
    if(document.getElementById("testingdrop").style.visibility != "visible"){
        document.getElementById("testingdrop").style.visibility = "visible";
        document.getElementById("testingdrop").style.transition = "0.5s";
        //document.getElementById("testingdrop").style.width = "55%";
        document.getElementById("dropdownIcon").style.color = "#ffc800";
        //change opacity of form
        for(var i=0; i<frames.length; i++){
            form[i].style.opacity = "0.5";
        }
        document.getElementById("enquiryHeading").style.opacity = "0.5";
    }
    //hide menu
    else{
        document.getElementById("testingdrop").style.visibility = "hidden";
        document.getElementById("testingdrop").style.width = "55%";
        document.getElementById("dropdownIcon").style.color = "black";
        for(var i=0; i<frames.length; i++){
            form[i].style.opacity = "1";
        }
        document.getElementById("enquiryHeading").style.opacity = "1";
    }
}