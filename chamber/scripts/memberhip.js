
window.onload = function() {
    var currentTimestamp = new Date().toISOString(); 
    document.getElementById("timestamp").value = currentTimestamp;
}

document.querySelector("#membership")
    .addEventListener("change", () => { showBenefits() });


const reset = function() { 
    document.querySelector('main').classList.toggle('open');
    document.querySelector('.benefits-container').style.display = "none";
    document.querySelectorAll('.benefits-container div').forEach(it => it.style.display = "none");

}


const showBenefits = function() {
    reset();
    document.querySelector('.benefits-container').style.display = 'block';
    const benefitType = document.getElementById('membership').value;
    document.querySelector('main').classList.toggle('open');


    switch(benefitType) {
        case 'np':
            document.querySelector('.np').style.display = 'block';
            break;
        case 'bronze':
            document.querySelector('.bronze').style.display = 'block';            
            break;
        case 'silver':
            document.querySelector('.silver').style.display = 'block';         
            break;
        case 'gold':
            document.querySelector('.gold').style.display = 'block';
            break;
        default:
            reset();
    }
};

reset();
