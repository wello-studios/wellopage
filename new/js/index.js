function engteam(){
    document.getElementById("learn").innerHTML = "Learn more"
    document.getElementById("welloinfo").innerHTML = "Welcome Studio is a team created in June 2022.<br>So far, various projects have been carried out <br>and various experiences have been provided to users."
    document.getElementById("join").innerHTML = "Join ›"
    document.getElementById("discordtitle").innerHTML = "Join our Discord server."
    document.getElementById("privacy").innerHTML = "Privacy Policy"
    document.getElementById("tos").innerHTML = "TOS"
    document.getElementById("email").innerHTML = "Rejection of Unauthorized Email Address Collection"
    document.getElementById("discord").innerHTML = "Discord"
}
function korteam(){
    document.getElementById("learn").innerHTML = "더 알아보기"
    document.getElementById("welloinfo").innerHTML = "웰로우 스튜디오는 2022년 6월에 만들어진 팀으로<br>현재까지 다양한 프로젝트를 진행하며 유저에게 다양한 경험을<br>드리고 있습니다."
    document.getElementById("join").innerHTML = "참가하기 ›"
    document.getElementById("discordtitle").innerHTML = "디스코드에서 다양한 소식을 만나보세요."
    document.getElementById("privacy").innerHTML = "개인정보 처리방침"
    document.getElementById("tos").innerHTML = "서비스 이용 약관"
    document.getElementById("email").innerHTML = "이메일 무단 수집 거부"
    document.getElementById("discord").innerHTML = "디스코드"
}
function jateam(){
    document.getElementById("learn").innerHTML = "詳細"
    document.getElementById("welloinfo").innerHTML = "ウェロースタジオは2022年6月に作成されたチームで、<br>現在まで様々なプロジェクトを進めており、<br>ユーザーに多様な経験をお届けしています。"
    document.getElementById("join").innerHTML = "加入 ›"
    document.getElementById("discordtitle").innerHTML = "DISCORDで様々なニュースに出会う。"
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