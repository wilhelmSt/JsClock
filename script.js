const deg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
});

function themeChanger() {

    var divBody = document.querySelector(".div-body");
    var checkBody = document.querySelector(".div-check-btn");

    var clock = document.querySelector(".clock");
    var clockDot = document.querySelector(".clock-dot");

    var minLine = document.querySelector(".min-line");
    var secLine = document.querySelector(".sec-line");
    
    var checkBox = document.querySelector('.check');

    if(checkBox.checked == true) {
        // BODY
        divBody.style.backgroundColor = "rgb(220,220,220)";
        checkBody.style.backgroundColor = "rgb(220,220,220)";

        // CLOCK 
        clock.style.border = "4px solid rgb(220,220,220)";
        clock.style.boxShadow = `0 -15px 15px var(--shadow-white2),
                                inset 0 -15px 15px var(--shadow-white2),
                                0 15px 15px var(--shadow-black2),
                                inset 0 15px 15px var(--shadow-black2)`;
        clockDot.style.backgroundColor = "var(--bg-white2)";

        // CLOCK LINES
        minLine.style.backgroundColor = "var(--bg-white2)";
        secLine.style.backgroundColor = "var(--bg-white2)";

    } else {
        // BODY
        divBody.style.backgroundColor = "var(--bg-color)";
        checkBody.style.backgroundColor = "var(--bg-color)";

        // CLOCK
        clock.style.border = "4px solid var(--bg-color)";
        clock.style.boxShadow = `0 -15px 15px var(--shadow-white),
                                inset 0 -15px 15px var(--shadow-white),
                                0 15px 15px var(--shadow-black),
                                inset 0 15px 15px var(--shadow-black)`;
        clockDot.style.backgroundColor = "var(--bg-white)";

        // CLOCK LINES
        minLine.style.backgroundColor = "var(--bg-white)";
        secLine.style.backgroundColor = "var(--bg-white)";
    }
}