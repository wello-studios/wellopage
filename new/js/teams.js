function engteam(){
    document.getElementById("discordtitle").innerHTML = "If you would like to apply to the team?"
    document.getElementById("mua").innerHTML = "MUA"
    document.getElementById("simire").innerHTML = "SIMIRE"
    document.getElementById("join").innerHTML = "Click Here ›"
    document.getElementById("privacy").innerHTML = "Privacy Policy"
    document.getElementById("tos").innerHTML = "TOS"
    document.getElementById("email").innerHTML = "Rejection of Unauthorized Email Address Collection"
    document.getElementById("discord").innerHTML = "Discord"
}
function korteam(){
    document.getElementById("discordtitle").innerHTML = "팀에 지원하고 싶다면?"
    document.getElementById("mua").innerHTML = "무아"
    document.getElementById("simire").innerHTML = "사미르"
    document.getElementById("join").innerHTML = "클릭하기 ›"
    document.getElementById("privacy").innerHTML = "개인정보 처리방침"
    document.getElementById("tos").innerHTML = "서비스 이용 약관"
    document.getElementById("email").innerHTML = "이메일 무단 수집 거부"
    document.getElementById("discord").innerHTML = "디스코드"
}
function jateam(){
    document.getElementById("discordtitle").innerHTML = "チームにサポートしたい場合は？"
    document.getElementById("mua").innerHTML = "MUA"
    document.getElementById("simire").innerHTML = "SIMIRE"
    document.getElementById("join").innerHTML = "クリック ›"
    document.getElementById("privacy").innerHTML = "個人情報処理方針"
    document.getElementById("tos").innerHTML = "サービス利用規約"
    document.getElementById("email").innerHTML = "メール不正収集拒否"
    document.getElementById("discord").innerHTML = "DISCORD"
}


if(navigator.language != null) lang = navigator.language;
lang = lang.toLowerCase().substring(0.2);
if(lang == "ko") korteam();
else if(lang =="en") engteam();
else if(lang == "ja") jateam();