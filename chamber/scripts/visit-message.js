document.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.getElementById('message');
    var lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
        var now = new Date();
        var timeDifference = now - new Date(lastVisit);
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else {
            messageElement.textContent = "You last visited " + daysDifference + (daysDifference === 1 ? " day" : " days") + " ago.";
        }
    } else {
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', new Date());
});