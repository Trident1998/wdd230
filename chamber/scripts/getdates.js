const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

let slideIndex1 = 1;
showSlides1(1, 1);

let slideIndex2 = 1;
showSlides2(1, 2);

function plusSlides(n, slider) {
  if (slider === 1) {
    showSlides1(slideIndex1 += n, 1);
  } else if (slider === 2) {
    showSlides2(slideIndex2 += n, 2);
  }
}

function currentSlide(n, slider) {
  if (slider === 1) {
    showSlides1(slideIndex1 = n, 1);
  } else if (slider === 2) {
    showSlides2(slideIndex2 = n, 2);
  }
}

function showSlides1(n, slider) {
  let i;
  let slides = document.getElementsByClassName(`mySlides${slider}`);
  let dots = document.getElementsByClassName(`dot${slider}`);

  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
}

function showSlides2(n, slider) {
	let i;
	let slides = document.getElementsByClassName(`mySlides${slider}`);
	let dots = document.getElementsByClassName(`dot${slider}`);
  
	if (n > slides.length) {slideIndex2 = 1}    
	if (n < 1) {slideIndex2 = slides.length}
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex2-1].style.display = "block";  
	dots[slideIndex2-1].className += " active";
  }



const shares = document.querySelectorAll("script");
const forex = document.querySelector(".forex");
const futures = document.querySelector(".futures");


let sharesProperties = `{"symbols":[["Apple","AAPL|1D"],["Google","GOOGL|1D"],["Microsoft","MSFT|1D"]],"chartOnly":false,"width":"100%","height":350,"locale":"en","colorTheme":"light","autosize":true,"showVolume":false,"showMA":false,"hideDateRanges":false,"hideMarketStatus":false,"hideSymbolLogo":false,"scalePosition":"right","scaleMode":"Normal","fontFamily":"-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif","fontSize":10,"noTimeScale":false,"valuesTracking":"1","changeMode":"price-and-percent","chartType":"area","maLineColor":"#2962FF","maLineWidth":1,"maLength":9,"lineWidth":2,"lineType":0,"dateRanges":["1d|1","1m|30","3m|60","12m|1D","60m|1W","all|1M"]}`;
let forexProperties = `{"symbols":[["FX_IDC:EURUAH|1D"],["FX_IDC:USDUAH|1D"],["FX_IDC:CNYUAH|1D"]],"chartOnly":false,"width":"100%","height":"350","locale":"en","colorTheme":"light","autosize":true,"showVolume":false,"showMA":false,"hideDateRanges":false,"hideMarketStatus":false,"hideSymbolLogo":false,"scalePosition":"right","scaleMode":"Normal","fontFamily":"-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif","fontSize":"10","noTimeScale":false,"valuesTracking":"1","changeMode":"price-and-percent","chartType":"area","maLineColor":"#2962FF","maLineWidth":1,"maLength":9,"lineWidth":2,"lineType":0,"dateRanges":["1d|1","1m|30","3m|60","12m|1D","60m|1W","all|1M"]}`;
let futuresProperties = `{"symbols":[["NYMEX:CL1!|1D"],["COMEX:GC1!|1D"],["COMEX_MINI:SIL1!|1D"]],"chartOnly":false,"width":"100%","height":"350","locale":"en","colorTheme":"light","autosize":true,"showVolume":false,"showMA":false,"hideDateRanges":false,"hideMarketStatus":false,"hideSymbolLogo":false,"scalePosition":"right","scaleMode":"Normal","fontFamily":"-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif","fontSize":"10","noTimeScale":false,"valuesTracking":"1","changeMode":"price-and-percent","chartType":"area","maLineColor":"#2962FF","maLineWidth":1,"maLength":9,"lineWidth":2,"lineType":0,"dateRanges":["1d|1","1m|30","3m|60","12m|1D","60m|1W","all|1M"]}`;

const list = [sharesProperties, forexProperties, futuresProperties];
let i = 0;

shares.forEach(it => {
  it.innerHTML = list[i];
  i += 1;
})

