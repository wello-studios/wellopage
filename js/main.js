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


숨겨진 웹사이트:mua1048.github.io/newello/realpage`,'font-size:1px; color:#fcfcfc; spacing:0;');
//var name = prompt("이름이 뭐야??")
//alert("안녕!"+name+"!")

document.documentElement.style.setProperty("--menu-height", "5rem");
time = new Date();
hour = time.getHours();
minute = time.getMinutes().toString();
minutes = minute.length<2 ? "0" + time.getMinutes() : time.getMinutes();

var emit = 1000;
setInterval("setTime()", emit);
function setTime() {
    time = new Date();
    hour = time.getHours();
    minute = time.getMinutes().toString();
    minutes = minute.length<2 ? "0" + time.getMinutes() : time.getMinutes();
    hours = hour < 12 ? "오전 " + hour : "오후 " + (hour - 12);
    document.getElementById("timesjs").innerHTML = hours + ":" + minutes;
}

function secret() {
    var key = prompt("암호를 대라! *암호는 진짜진짜 마지막 사이트에서 잘 찾아봐. 4글자야.", "4번째 글자:2");
    if (key == "0102") {
        alert("안타깝지만 업데이트 예정이네.");
    }
    else {
        alert("틀렸어.")
    }
}

function shutdown() {
    alert("나 간다...");
    document.getElementById("body").style.opacity = "0";
    document.getElementById("body").style.background = "black";
}
function restart() {
    alert("나 갔다 올게!");
    var reset = document.getElementById("body")
    document.getElementById("boot").classList.remove("boott");
    void reset.offsetWidth;
    document.getElementById("boot").classList.add("boott");
}

(function() {
    var timectx = document.getElementById("timesjs")
timectx.innerHTML = hour + ":" + minutes;
}());

let closeCount = 0;

function closepage() {
    closeCount++;
    if (closeCount <= 4) {
        alert("어딜 나가려고 하는거야??");
    }
    if (closeCount == 5) {
        console.log(closeCount)
        alert("내가 싫은거야...? 3rd = 0");
    }
    if (closeCount == 6) {
        alert("그만.")
        closeCount = 93094;
    }
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

function privacy() {
    var priv = confirm("다른 사이트로 이동할거야. 괜찮아?");
    if (priv) {
        window.open("https://muring.itare.xyz/privacy/");
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
        document.title = "404스튜디오"; 
        document.getElementById("t1").innerHTML = "404 Studio<br>안녕하세요<br>merhaba<br>Hola<br>ciao<br>привет<br>hallo<br>bonjour<br>aloha<br>Hello"
    }
}

function brand() {
    alert("안 만들었어.");
}

function project() {
    alert("안 만들었지만 알려줄게. 웰로우의 프로젝트는 뮤링봇, 맞춤법, 우엥이, 타워 디펜스가 있어.");
    var proj = confirm("자세히 들을래?");
    if (proj) {
        var projectName = prompt("알고싶은 프로젝트명을 적어줘!(뮤링봇, 맞춤법, 우엥이, 타워 디펜스)");
        if (projectName) {
            switch (projectName) {
                case "뮤링봇" : alert("뮤링봇은 웰로우의 첫 번째 봇이야. 아직 개발중이고 홈페이지가 있어: https://muring.itare.xyz/");
                    break;
                case "맞춤법" : alert("맞춤법은 간단하게 디스코드에서 맞춤법을 확인할 수 있게 만들어진 봇이야. 지금 초대할 수 있어.: https://cyw.itare.xyz/")
                    break;
                case "우엥이" : alert("우엥이는 현실 코인처럼 빠르게 바뀌는 가격에서 잘 투자해서 돈을 버는 봇이야. 아직 개발중이야.")
                    break;
                case "타워 디펜스" : alert("타워 디펜스는 마인크래프트에서 하는 게임이야. 아직 개발중이지.")
                    break;
                default : alert("미안하지만 그런 프로젝트는 없는 것 같아...")
            }
        }
        else {
            alert("프로젝트를 들어줘서 고마워!!!");
        }
    }
    else {
        alert("알겠어..");
    }
}

function startpage() {
    var open =  confirm("진짜 사이트를 시작할거야???");
    if (open) {
        var password = prompt("암호를 입력해줘!", "ueng");
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

let startMenu = false;

function menuopen() {
    if (startMenu) {
        document.getElementById("startMenu").style.display = "none";
        startMenu = false;
    }
    else {
        document.getElementById("startMenu").style.display = "flex";
        startMenu = true;
    }
};


let dark = false;

const darkmode = function () {
    if (dark) {
        var darkmoding = confirm("진짜 화이트모드 쓸꺼야..?");
        if (darkmoding) {
            alert("...");
            document.getElementById("c1").style.backgroundColor = "white";
            document.getElementById("t1").style.color = "black";
            document.getElementById("t2").style.color = "black";
            dark = false;
        }
        else{
            alert("안 쓸꺼야!");
        }
    }
    else {
        alert("다크모드야!!!");
        document.getElementById("c1").style.backgroundColor = "black";
        document.getElementById("t1").style.color = "white";
        document.getElementById("t2").style.color = "white";
        dark = true;
    }
};
