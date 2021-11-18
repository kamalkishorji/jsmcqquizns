//a b d c a
let ans = [];
let correctans = ["3:4","3","5","-1","11"];
function getAnswer(){
    //document.getElementById("showresult").innerHTML="hello";
    let idx = 0;
    var ele = document.getElementsByTagName('input');
    for(let i=0;i<ele.length;i++){
        if(ele[i].type="radio"){
            if(ele[i].checked){
                ans[idx] = ele[i].value;
                idx++;
               // document.getElementById("showresult").innerHTML +=printresult()+" " ;
            }
        }
        
    }
    let count = countofCorrectans(ans,correctans);
    let finalresult = shoResult(count);
    //redirect();
    const page = window.open('result.html');
    page.addEventListener('DOMContentLoaded',()=>{
        const testdiv = page.document.getElementById('showresult')
        testdiv.textContent = finalresult;
    }) 
    document.getElementById("showresult").innerHTML = finalresult;
    //document.write(finalresult);
    //localStorage.setItem("a",finalresult);
    //document.getElementById("showresult").innerHTML = localStorage.getItem("a");
}
function countofCorrectans(ans,correctans){
    let cnt=0;
    for(let i=0;i<ans.length;i++){
        if(ans[i]==correctans[i]){
            cnt++;
        }
    }
    return cnt;


}
function shoResult(cnt){
    let result;
    if(cnt>=4){
        result="Yes";
    }
    else if(cnt<4 && cnt>=2){
        result="Maybe";

    }
    else{
        result= "No";
    }
    return result;
}
/*function printresult(){
   // document.write("Hello");
   return 10;
}*/
//document.getElementById("demo").innerHTML = 5+1;
/*function redirect(){
    window.location.href="result.html";
}*/