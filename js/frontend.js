import { BGrading } from '../js/GradeB.js';
import { CGrading } from '../js/GradeC.js';
import { DGrading } from '../js/GradeD.js';
document.getElementById("gradeWeld").addEventListener("click", handleData);


document.getElementById("toInfo").addEventListener("click", Navigate);
function Navigate(){
  window.location.href="info.html"
}

localStorage.clear();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
  .then(registration => {
      console.log('Service Worker registered with scope:', registration.scope);
  })
  .catch(error => {
      console.log('Service Worker registration failed:', error);
  });
}


document.getElementById("buttweld").addEventListener('change', toggleVisible);
document.getElementById("filletweld").addEventListener('change', toggleVisible);

function handleData(event) { //503 617 512 5213 5214 617 == kun for kantsøm. 4021 5013 502 504 (509, 511) 510 515 516 507 == Kun stumpsøm
  document.getElementById("gradeWeld").disabled = true;
  let data = extractData();

  if (data.Grading.includes("GradeB")) {
    const res = { Grade: 'B', data: BGrading(0, data.T, data.B, data.isFilletWeld) };//Create a proper json string instead
    const resJson = JSON.stringify(res);
    localStorage.setItem("results", resJson);
  }
  if (data.Grading.includes("GradeC")) {
    const res = { Grade: 'C', data: CGrading(data.S, Data.A, data.T, data.B, data.isFilletWeld) };//Create a proper json string instead
    const resJson = JSON.stringify(res);
    localStorage.setItem("results", resJson);
  }
  if (data.Grading.includes("GradeD")) {
    const res = { Grade: 'D', data: DGrading(data.S, Data.A, data.T, data.B, data.isFilletWeld) };//Create a proper json string instead
    const resJson = JSON.stringify(res);
    localStorage.setItem("results", resJson);
  }

  window.location.href="results.html"
}

function extractData() {
  let InputData = {};
  InputData.T = document.getElementById("PlateT_id").value;
  InputData.A = document.getElementById("WeldT_id").value;
  InputData.B = document.getElementById("WidthOfW_id").value;
  InputData.isFilletWeld = document.forms.DataForm_id.weld.value === "filletweld" ? true : false;
  var checkedValue = "";
  var inputElements = document.getElementsByName('weldGrade');
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      checkedValue += inputElements[i].value;
    }
  }
  InputData.Grading = checkedValue;
  console.log("Extracted"); console.log(InputData);
  return InputData;
}

//This ain't working
function toggleVisible(event){
  let elements = document.getElementById("buttWeldHide");
  if (document.getElementById("buttweld").value == "buttweld"){
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("setHidden");
      
    }

  }else{
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("setHidden");
    }
  }

}