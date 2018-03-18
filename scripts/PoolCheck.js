document.addEventListener("click");


var pH = 0;
var chlorine = 0;
var alkalinity = 0;
var stabilizer = "";
var gallons = 0;

function gallons() {
    if (gallons !== 0) {
        gallons = 0;
        document.getElementById("gallons").innerHTML = gallons;
    }
}

function ph62() {
    if (pH !== 0) {
        pH = 0;
        pH += 6.2;
        document.getElementById("pHLevel").innerHTML = pH;
    }
}

function ph68() {
    if (pH !== 0) {
        pH = 0;
        pH += 6.8;
        document.getElementById("pHLevel").innerHTML = pH;
    }
}

function ph72() {
    if (pH !== 0) {
        pH = 0;
        pH += 7.2;
        document.getElementById("pHLevel").innerHTML = pH;
    }
}

function ph78() {
    if (pH !== 0) {
        pH = 0;
        pH += 7.8;
        document.getElementById("pHLevel").innerHTML = pH;
    }
}

function ph84() {
    if (pH !== 0) {
        pH = 0;
        pH += 8.4;
        document.getElementById("pHLevel").innerHTML = pH;
    }
}


function c0() {
    if (chlorine !== 0) {
        chlorine = 0;
        chlorine += ".0";
        document.getElementById("chlorineLevel").innerHTML = chlorine;
    }

}

function c05() {
    if (chlorine !== 0) {
        chlorine = 0;
        chlorine += .5;
        document.getElementById("chlorineLevel").innerHTML = chlorine;
    }
}

function c1() {
    if (chlorine !== 0) {
        chlorine = 0;
        chlorine += 1;
        document.getElementById("chlorineLevel").innerHTML = chlorine;
    }

}

function c3() {
    if (chlorine !== 0) {
        chlorine = 0;
        chlorine += 3;
        document.getElementById("chlorineLevel").innerHTML = chlorine;
    }
}

function c5() {
    if (chlorine !== 0) {
        chlorine = 0;
        chlorine += 5;
        document.getElementById("chlorineLevel").innerHTML = chlorine;
    }
}

function c10() {
    if (chlorine !== 0) {
        chlorine = 0;
        chlorine += 10;
        document.getElementById("chlorineLevel").innerHTML = chlorine;
    }
}


function a0() {
    if (alkalinity !== 0) {
        alkalinity = 0;
        alkalinity += ".0";
        document.getElementById("alkalinityLevel").innerHTML = alkalinity;
    }
}

function a40() {
    if (alkalinity !== 0) {
        alkalinity = 0;
        alkalinity += 40;
        document.getElementById("alkalinityLevel").innerHTML = alkalinity;
    }
}

function a80() {
    if (alkalinity !== 0) {
        alkalinity = 0;
        alkalinity += 80;
        document.getElementById("alkalinityLevel").innerHTML = alkalinity;
    }
}

function a120() {
    if (alkalinity !== 0) {
        alkalinity = 0;
        alkalinity += 120;
        document.getElementById("alkalinityLevel").innerHTML = alkalinity;
    }
}

function a180() {
    if (alkalinity !== 0) {
        alkalinity = 0;
        alkalinity += 180;
        document.getElementById("alkalinityLevel").innerHTML = alkalinity;
    }
}

function a240() {
    if (alkalinity !== 0) {
        alkalinity = 0;
        alkalinity += 240;
        document.getElementById("alkalinityLevel").innerHTML = alkalinity;
    }
}
function s0() {
    if (stabilizer !== 0) {
        stabilizer = "";
        stabilizer += "0";
        document.getElementById("stabilizerLevel").innerHTML = stabilizer;
    }
}
function s3050() {
    if (stabilizer !== 0) {
        stabilizer = "";
        stabilizer += "30/50";
        document.getElementById("stabilizerLevel").innerHTML = stabilizer;
    }
}
function s100() {
    if (stabilizer !== 0) {
        stabilizer = "";
        stabilizer += "100";
        document.getElementById("stabilizerLevel").innerHTML = stabilizer;
    }
}
function s150() {
    if (stabilizer !== 0) {
    stabilizer = "";
    stabilizer += "150";
    document.getElementById("stabilizerLevel").innerHTML = stabilizer;
    }
}
function s300() {
    if (stabilizer !== 0) {
        stabilizer = "";
        stabilizer += "300";
        document.getElementById("stabilizerLevel").innerHTML = stabilizer;
    }
}
