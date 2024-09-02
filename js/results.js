let coll = document.getElementsByClassName("collapsible");
let i;

const grading = localStorage.getItem("results");

const res = JSON.parse(grading);

console.log(res.data);

const pCrack = document.getElementById("Crack");
const pCraterCrack = document.getElementById("CraterCrack");
const pSurfacePore = document.getElementById("SurfacePore");
const pEndCraterPipe = document.getElementById("EndCraterPipe");
const pLackOfFusion = document.getElementById("LackOfFusion");
const pMLackOfFusion = document.getElementById("MLackOfFusion");
const pIncompleteRPen = document.getElementById("IncompleteRPen");
const pInterUcut = document.getElementById("InterUcut");
const pShrinkGroove = document.getElementById("ShrinkGroove");
const pIncorrectWToe = document.getElementById("IncorrectWToe");
const pOverlap = document.getElementById("Overlap");
const pNonFW = document.getElementById("NonFW");
const pBurnThrough = document.getElementById("BurnThrough");
const pExcessAsymmFW = document.getElementById("ExcessAsymmFW");
const pRootConcav = document.getElementById("RootConcav");
const pRootPoro = document.getElementById("RootPoro");
const pPoorStart = document.getElementById("PoorStart");
const pInsuffTT = document.getElementById("InsuffTT");
const pExcessTT = document.getElementById("ExcessTT");
const pStrayArc = document.getElementById("StrayArc");
const pSpatter = document.getElementById("Spatter");
const pTemperColour = document.getElementById("TemperColour");
const pLinearMis = document.getElementById("LinearMis");
const pIncorrRootGapOrFW = document.getElementById("IncorrRootGapOrFW");


const data = res.data;
pCrack.textContent = data.Crack;
pCraterCrack.textContent = data.CraterCrack;
pSurfacePore.textContent = data.SurfacePore;
pEndCraterPipe.textContent = data.EndCraterPipe;
pLackOfFusion.textContent = data.LackOfFusion;
pMLackOfFusion.textContent = data.MLackOfFusion;
pIncompleteRPen.textContent = data.IncompleteRPen;
pInterUcut.textContent = data.InterUcut;
pShrinkGroove.textContent = data.ShrinkGroove;
pIncorrectWToe.textContent = data.IncorrectWToe;
pOverlap.textContent = data.Overlap;
pNonFW.textContent = data.NonFW;
pBurnThrough.textContent = data.BurnThrough;
pExcessAsymmFW.textContent = data.ExcessAsymmFW;
pRootConcav.textContent = data.RootConcav;
pRootPoro.textContent = data.RootPoro;
pPoorStart.textContent = data.PoorStart;
pInsuffTT.textContent = data.InsuffTT;
pExcessTT.textContent = data.ExcessTT;
pStrayArc.textContent = data.StrayArc;
pSpatter.textContent = data.Spatter;
pTemperColour.textContent = data.TemperColour;
pLinearMis.textContent = data.LinearMis;
pIncorrRootGapOrFW.textContent = data.IncorrRootGapOrFW;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
