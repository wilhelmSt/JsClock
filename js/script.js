const deg = 6;
const hrA = document.querySelector('#hr');
const minA = document.querySelector('#min');
const secA = document.querySelector('#sec');

const dayD = document.querySelector('.dia span');
const hrD = document.querySelector('.hora span');
const minD = document.querySelector('.minutos span');
const secD = document.querySelector('.segundos span');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let dd = day.getDay();

    let days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    dayD.innerHTML = days[dd];

    var am = document.querySelector('.am');
    var pm = document.querySelector('.pm');
    if(changeAmFm()) {
        if(hh/30 <= 12) {
            hrD.innerHTML = hh/30;
            am.style.opacity = '1';
            pm.style.opacity = '0.15';
        } else {
            hrD.innerHTML = (hh/30) - 12;
            pm.style.opacity = '1';
            am.style.opacity = '0.15';
        }
    } else {
        hrD.innerHTML = hh/30;
        am.style.opacity = '0.15';
        pm.style.opacity = '0.15';
    }
    
    
    minD.innerHTML = mm/deg;
    secD.innerHTML = ss/deg;
    
    hrA.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    minA.style.transform = `rotateZ(${mm}deg)`;
    secA.style.transform = `rotateZ(${ss}deg)`;
});

function themeChanger() {
    
    var checkBody = document.querySelector(".div-check-btn");
    var checkBox = document.querySelector('.check');
    var changeClock = document.querySelector(".change-clock h4 ");

    // ANALOGIC
    var divBodyAnalogic = document.querySelector(".div-body-analogic");
    var clock = document.querySelector(".clock");
    var clockDot = document.querySelector(".clock-dot");
    var minLine = document.querySelector(".min-line");
    var secLine = document.querySelector(".sec-line");
    
    // DIGITAL
    var divBodyDigital = document.querySelector(".div-body-digital");
    var digital = document.querySelector(".digital");
    var divDia = document.querySelector(".dia");
    var divHora = document.querySelector(".hora");
    var divMinutos = document.querySelector(".minutos");
    var divSegundos = document.querySelector(".segundos");
    var AmPm = document.querySelector(".am-pm");


    if(checkBox.checked == true) {
        // BODY
        changeClock.style.color = "var(--bg-color)";
        checkBody.style.backgroundColor = "var(--bg-white)";

        // ANALOGIC
        // BODY
        divBodyAnalogic.style.backgroundColor = "var(--bg-white)";

        // CLOCK 
        clock.style.border = "4px solid var(--bg-white)";
        clock.style.boxShadow = "0 -15px 15px var(--shadow-white2), inset 0 -15px 15px var(--shadow-white2), 0 15px 15px var(--shadow-black2), inset 0 15px 15px var(--shadow-black2)";
        clockDot.style.backgroundColor = "var(--bg-color)";

        // CLOCK LINES
        minLine.style.backgroundColor = "var(--bg-color)";
        secLine.style.backgroundColor = "var(--bg-color)";


        // DIGITAL
        // BODY
        divBodyDigital.style.backgroundColor = "var(--bg-white)";
        digital.style.backgroundColor = "rgb(220,220,220)";
        digital.style.boxShadow = "0 -15px 15px var(--shadow-white2), inset 0 -15px 15px var(--shadow-white2), 0 15px 15px var(--shadow-black2), inset 0 15px 15px var(--shadow-black2)";

        // CLOCK
        divDia.style.color = 'var(--bg-white)';
        divHora.style.color = 'var(--bg-white)';
        divMinutos.style.color = 'var(--bg-white)';
        divSegundos.style.color = 'var(--bg-white)';
        AmPm.style.color = 'var(--bg-white)';

    } else {
        // BODY
        changeClock.style.color = "var(--bg-white)";
        checkBody.style.backgroundColor = "rgb(220,220,220)";

        // ANALOGIC
        // BODY
        divBodyAnalogic.style.backgroundColor = "rgb(220,220,220)";

        // CLOCK
        clock.style.border = "4px solid rgb(220,220,220)";
        clock.style.boxShadow = "0 -15px 15px var(--shadow-white), inset 0 -15px 15px var(--shadow-white), 0 15px 15px var(--shadow-black), inset 0 15px 15px var(--shadow-black)";
        clockDot.style.backgroundColor = "var(--bg-white)";

        // CLOCK LINES
        minLine.style.backgroundColor = "var(--bg-white)";
        secLine.style.backgroundColor = "var(--bg-white)";


        // DIGITAL
        // BODY
        divBodyDigital.style.backgroundColor = "rgb(220,220,220)";
        digital.style.backgroundColor = "var(--bg-white)";
        digital.style.boxShadow = "0 -15px 15px var(--shadow-white), inset 0 -15px 15px var(--shadow-white), 0 15px 15px var(--shadow-black), inset 0 15px 15px var(--shadow-black)";

        // CLOCK
        divDia.style.color = 'var(--bg-color)';
        divHora.style.color = 'var(--bg-color)';
        divMinutos.style.color = 'var(--bg-color)';
        divSegundos.style.color = 'var(--bg-color)';
        AmPm.style.color = 'var(--bg-color)';
    }
}


function changeAmFm() {
    var checkBoxAmpm = document.querySelector(".btn-ampm");

    if(checkBoxAmpm.checked == true) {
        return true;
    } else {
        return false;
    }
}

function clockChanger(tipo) {
    var dig = document.querySelector(".div-body-digital");
    var ana = document.querySelector(".div-body-analogic");

    if(tipo == 'digital') {
        dig.style.display = "flex";
        ana.style.display = "none";
    } else {
        dig.style.display = "none";
        ana.style.display = "flex";
    }
}