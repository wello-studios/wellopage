console.log(`%c
888       888          888 888          
888   o   888          888 888          
888  d8b  888          888 888          
888 d888b 888  .d88b.  888 888  .d88b.  
888d88888b888 d8P  Y8b 888 888 d88""88b 
88888P Y88888 88888888 888 888 888  888 
8888P   Y8888 Y8b.     888 888 Y88..88P 
888P     Y888  "Y8888  888 888  "Y88P"  

`+
`%c.d8888b.   888                  888 d8b         
d88P  Y88b 888                  888 Y8P         
Y88b.      888                  888             
 "Y888b.   888888 888  888  .d88888 888  .d88b. 
    "Y88b. 888    888  888 d88" 888 888 d88""88b
      "888 888    888  888 888  888 888 888  888
Y88b  d88P Y88b.  Y88b 888 Y88b 888 888 Y88..88P
 "Y8888P"   "Y888  "Y88888  "Y88888 888  "Y88P" 
`
 +`%c학생들이 세상을 구한다.
 
 
 
 `,
'color:#5dff68;font-family: "DungGeunMo";',
'color:#ffffff; background:#000000;font-family: "DungGeunMo";','font-family: "DungGeunMo"; font-size: 20px;');


console.log(
    '%c콘솔 보지마...',
	'font-size:20px; font-family: "DungGeunMo";',
);
console.log("%c여기 볼거 없어.",'font-family: "DungGeunMo";')
console.log("%c뭐 할거면 팀에 들어가서 하자! > > > > > https://wello.mua.co.kr/cast/",'font-family: "DungGeunMo"; font-size:16px;');
console.log(`%c


숨겨진 웹사이트:mua1048.github.io/newello/realpage`,'font-size:1px; color:#fcfcfc;')
document.documentElement.style.setProperty("--menu-height", "5rem");
time = new Date();
hour = time.getHours();
minute = time.getMinutes().toString();
minutes = minute.length<2 ? "0" + time.getMinutes() : time.getMinutes();

var timectx = document.getElementById("timesjs")
timectx.innerHTML = hour + ":" + minutes;

function closepage() {
    alert("어딜 나가려고 하는거야??");
}

function fullpage() {
if (!document.fullscreenElement) {
    alert("넌 곧 전체 화면이 될 거야!!");
    document.documentElement.requestFullscreen()
    } else {
    if (document.exitFullscreen) {
        alert("넌 이제 전체 화면이 아니야!");
        document.exitFullscreen()
    }
    }
}

function minipage() {
    alert("제발 최소화하지 말아줘...")
}

function introduce() {
    var intro = confirm("아직 페이지를 안 만들었어. 누르면 404 페이지가 나올거야. 그래도 들어갈래?");
    if (intro) {
        alert("너는 404페이지를 좋아하는구나!");
        window.open("introduce.html");
    }
}

function brand() {
    alert("안 만들었어.");
}

function project() {
    alert("안 만들었지만 알려줄게. 웰로우의 프로젝트는 뮤링봇, 맞춤법, 우엥이, 타워 디펜스가 있어.");
}

function startpage() {
    var open =  confirm("진짜 사이트를 시작할거야???");
    if (open) {
        var password = prompt("암호를 임력해줘!: ");
        if (password == "ueng") {
            alert("사이트에 온걸 환영해. 이제 시작할거야!!!");
            window.location.href = ("https://mua1048.github.io/newello/");
        }
        else {
            alert("넌 암호를 틀렸어!");
        }
    }
    else {
        alert("넌 사이트를 시작할 수 없어!");
    }
}

let isMenuOpen = false;

const Menu = function () {
    if (isMenuOpen) {
        document.documentElement.style.setProperty("--menu-height", "5rem");
        isMenuOpen = false;
    }
    else {
        document.documentElement.style.setProperty("--menu-height", "30rem");
        isMenuOpen = true;
    }
};

let dark = false;

const darkmode = function () {
    if (dark) {
        document.getElementById("c1").style.backgroundColor = "white";
        document.getElementById("t1").style.color = "black";
        document.getElementById("t2").style.color = "black";
        dark = false;
    }
    else {
        document.getElementById("c1").style.backgroundColor = "black";
        document.getElementById("t1").style.color = "white";
        document.getElementById("t2").style.color = "white";
        dark = true;
    }
};