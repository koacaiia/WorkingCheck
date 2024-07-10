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
const result = document.getElementById('result');
const mobileCheck=/Android|iPhone/i.test(navigator.userAgent);
if(!mobileCheck){
    // alert("모바일 환경에서는 사용이 제한됩니다.");
    // window.open("mobile.html");
    main.style.width = "30vw";
    result.style.width = "30vw";
}

function submit(){
    const date = document.getElementById('date').innerHTML;
    const name = document.getElementById('inputName').value;
    const nopMn = document.getElementById('nopMn').value;
    const nopMh = document.getElementById('nopMh').value;
    const nopWM = document.getElementById('nopWm').value;
    const nopWo = document.getElementById('nopWo').value;
    const eW= document.getElementById('earlyWorking').value;
    // console.log(name.type);
    // if(name.type == undefined){
    //     alert("이름을 입력해주세요");
    //     return;
    // }
    database_f.ref("DeptName/"+deptName+"/workingCheck/"+date+"/"+name).update({
        name: name,
        nopMn: nopMn,
        nopMh: nopMh,
        nopWM: nopWM,
        nopWo: nopWo,
        eW: eW
    });
    window.location.reload();
}

function resultSubmit(){
    const date = document.getElementById('date').innerHTML;
    const name = document.getElementById('inputName').value;
    const nopMn = document.getElementById('r_nopMn');
    const nopMh = document.getElementById('r_nopMh');
    const nopWM = document.getElementById('r_nopWm');
    const nopWo = document.getElementById('r_nopWo');
    const eW= document.getElementById('r_earlyWorking');
    const result = document.getElementById('r_submit');
    
    database_f.ref("DeptName/"+deptName+"/workingCheck/"+date).get().then((v)=>{
        const database = v.val();
        if(database == null) return;
        const keys = Object.keys(database);
        let mN=0;
        let mH=0;
        let wM=0;
        let wO=0;
        let eWCount=0;
        result.innerHTML ="직원 중 "+keys.length+" 명 용역배정등록"
        keys.forEach((key)=>{
            mN+=Number(database[key].nopMn);
            mH+=Number(database[key].nopMh);
            wM+=Number(database[key].nopWM);
            wO+=Number(database[key].nopWo);
            eWCount+=Number(database[key].eW);
        });
                    
        nopMn.innerHTML = mN/keys.length+" 명";
        nopMh.innerHTML = mH/keys.length+" 명";
        nopWM.innerHTML = wM/keys.length+" 명";
        nopWo.innerHTML = wO/keys.length+" 명";
        eW.innerHTML = eWCount/keys.length+" 명";
    });
}

resultSubmit();