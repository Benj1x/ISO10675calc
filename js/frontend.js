import { BGrading } from '../js/GradeB.js';
import { CGrading } from '../js/GradeC.js';
import { DGrading } from '../js/GradeD.js';
document.getElementById("gradeWeld").addEventListener("click", handleData);
localStorage.clear();
function handleData(event) {
  console.log("test");
  document.getElementById("gradeWeld").disabled = true;
  let data = extractData();

  if (data.Grading.includes("GradeB")) {
    const res = { Grade: 'D', data: BGrading(0, data.T, data.isFilletWeld) };//Create a proper json string instead
    const resJson = JSON.stringify(res);
    localStorage.setItem("results", resJson);
  }
  if (data.Grading.includes("GradeC")) {
    const res = { Grade: 'C', data: CGrading(data.S, 0, data.T, data.isFilletWeld) };//Create a proper json string instead
    const resJson = JSON.stringify(res);
    localStorage.setItem("results", resJson);
  }
  if (data.Grading.includes("GradeD")) {
    const res = { Grade: 'D', data: DGrading(data.S, 0, data.T, data.isFilletWeld) };//Create a proper json string instead
    const resJson = JSON.stringify(res);
    localStorage.setItem("results", resJson);
  }
}

function extractData() {
  let InputData = {};
  InputData.T = document.getElementById("PlateT_id").value;
  InputData.S = document.getElementById("WeldT_id").value;
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/js/service-worker.js')
    .then(() => { console.log('Service Worker Registered'); });
}
