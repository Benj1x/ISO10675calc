document.getElementById("gradeWeld").addEventListener("click", handleData);

function handleData(event){
  console.log("test");
  document.getElementById("gradeWeld").disabled=true;
  data = extractData();

  SurfacePore

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

