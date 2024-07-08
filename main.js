const main = document.getElementById('main');
const mobileCheck=/Android|iPhone/i.test(navigator.userAgent);
if(mobileCheck&&document.title=="Web"){
    alert("모바일 환경에서는 사용이 제한됩니다.");
    // window.open("mobile.html");
}
