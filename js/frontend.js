import { DGrading } from '../js/GradeD.js';
document.getElementById("gradeWeld").addEventListener("click", handleData);

function handleData(event){
  console.log("test");
  document.getElementById("gradeWeld").disabled=true;
  let data = extractData();

  //console.log(DGrading(0, data.S, 0, data.T, 0))
  if (data.Grading === "GradeD"){
    console.log(DGrading(0, data.S, 0, data.T, 0))
  }

}

function extractData(){
    let InputData={};
    InputData.T = document.getElementById("PlateT_id").value;
    InputData.S = document.getElementById("WeldT_id").value;
    InputData.B = document.getElementById("WidthOfW_id").value;
    InputData.isFilletWeld = document.forms.DataForm_id.weld.value === "filletweld" ? true : false;
    var checkedValue = ""
    var inputElements = document.getElementsByName('weldGrade');
    for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue += inputElements[i].value;
      }
    }
    InputData.Grading = checkedValue;
    console.log("Extracted"); console.log(InputData);
    return InputData;
  }

