const firebaseConfig = {
    apiKey: "AIzaSyDLzmZyt5nZwCk98iZ6wi01y7Jxio1ppZQ",
    authDomain: "fine-bondedwarehouse.firebaseapp.com",
    databaseURL: "https://fine-bondedwarehouse-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fine-bondedwarehouse",
    storageBucket: "fine-bondedwarehouse.appspot.com",
    messagingSenderId: "415417723331",
    appId: "1:415417723331:web:15212f190062886281b576",
    measurementId: "G-SWBR4359JQ"
};
firebase.initializeApp(firebaseConfig);
const database_f = firebase.database();
const messaging = firebase.messaging();
const storage_f = firebase.storage();
const deptName = "WareHouseDept2";

const main = document.getElementById('main');
const mobileCheck=/Android|iPhone/i.test(navigator.userAgent);
console.log(mobileCheck);
if(!mobileCheck){
    // alert("모바일 환경에서는 사용이 제한됩니다.");
    // window.open("mobile.html");
    main.style.width = "30vw";
}

function submit(){
    const date = document.getElementById('date').innerHTML;
    const name = document.getElementById('inputName').value;
    const nopMn = document.getElementById('nopMn').value;
    const nopMh = document.getElementById('nopMh').value;
    const nopWM = document.getElementById('nopWm').value;
    const nopWo = document.getElementById('nopWo').value;
    const eW= document.getElementById('earlyWorking').value;
    database_f.ref("DeptName/"+deptName+"/workingCheck/"+date+"/"+name).update({
        name: name,
        nopMn: nopMn,
        nopMh: nopMh,
        nopWM: nopWM,
        nopWo: nopWo,
        eW: eW
    });
}