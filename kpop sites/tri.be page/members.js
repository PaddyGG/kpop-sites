topButton = document.getElementsByClassName("topBtn"); //Getting the button

//showing button when user scrolls 20px from the top
window.onscroll = function(){scrollFunction()}; 

function scrollFunction(){
    if (document.documentElement.scrollTop > 200){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}


//When user clicks the button page scroll back top
function topFunction(){
    document.documentElement.scrollTop = 0; 
}

