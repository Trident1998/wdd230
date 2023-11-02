
function checkPasswordMatch(event) {
        
    const kp1 = document.querySelector("#password");
    const kp2 = document.querySelector("#confirmPassword");
    const message = document.querySelector("#formmessage");
    
    checkSame()


    function checkSame() {
        if (kp1.value !== kp2.value) {
            message.textContent = "❗Passwords DO NOT MATCH!";
            message.style.visibility = "visible";
            kp2.style.backgroundColor = "#fff0f3";
            kp2.value = "";
            kp2.focus();
            event.preventDefault();
        } else {
            message.style.visibility = "hidden";
            kp2.style.backgroundColor = "#fff";
            kp2.style.color = "#000";
        }
    }
}

function updateRatingDisplay() {
    var ratingDisplay = document.getElementById("ratingDisplay");
    var pageRating = document.getElementById("pageRating").value;
    ratingDisplay.innerText = pageRating;
}