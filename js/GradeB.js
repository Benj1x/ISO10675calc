//Limits for imperfections for quality levels 
//CHECK REMARKS VED ALLE
//Gå igennem alle formler, og sørg for at alle er der OG ingen mangler
//Gå igennem alle og gør noget ved "Not permitted"
function BGrading(d, s, a, t, h){
    BSurfacePore
    BEndCraterPipe
    BIncompleteRootPenetration
    BShrinkageGroove
    BExcessWeldMetal
    BExcessiveConvexity
    BExcessPenetration
    BIncorrectWeldToe
    BOverlap
    BNonFilledWeld
    BBurnThrough
    BExcessiveAsymmetryFilletWeld
    BRootConcavity
    BRootPorosity
    BPoorStart
    BInsufficientThroatThickness
    BExcessiveThroatThickness //error here
    BStrayArc
    BSpatter
    BTempercolour
    BLinearMisalignment
    BIncorrectRootGapOrFilletWelds
}
//Overfladepore/Surface pore
//For a D
//Acceptniveauer t => 0,5mm
//d <= 0,3 * s (eller a) //s = stumpsøm, a = kantsøm

//Acceptniveauer t => 0,5mm
//d <= 0,3 * s (eller a) //s = stumpsøm, a = kantsøm

//For a C
//d <= 0,2 * s* (eller a) //s = stumpsøm, a = kantsøm

//Use form to figure out the grading to use
//Call a function relative to the grade

//Maybe return a struct?
/** 
 * Calculate Surface Pore 
 * @param {number} s weld thickness 
 * @param {number} d Diameter of gas pore
 * @param {number} a fillet weld
 * @returns {string} First viable grade 
 */
function BSurfacePore(s, d, a = 0)
{
    if (s === 0){
        s = a;
    }
    //C
    d <= 0.2 * s //if valid return

    //D 
    d <= 0.3 * s //if valid return
}
//Åben kraterpore/End crater pipe
//For a D
// h ≤ 0,2 x t

//Acceptniveauer t > 3 mm
//h ≤ 0,2 x t (max 2 mm)

//For a C
//Acceptniveauer t > 3 mm
//h ≤ 0,1 x t (max 1 mm)
//
/** 
 * Calculate End crater pipe 
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BEndCraterPipe(t, h)
{
    //C
    h <= 0.1 * t //if valid return

    //D 
    h <= 0.2 * t //if valid return
}

//Ref. ISO 6520-1 No: 401 Acceptniveauer t ≥ 0,5 mm (Missing for title) 

//*MikroBindingsfejl /*Micro lack of fusion
//Permitted for D C B
//*Mikrobindingsfejl kun detekterbare ved mikroundersøglse / Only detected by micro examination

//Rodfejl/Incomplete root penetration
//Acceptniveauer t ≥ 0,5 mm
//for a D
//*h ≤ 0,2 x t (max 2 mm)
//Not allowed for C & B
/** 
 * Calculate Incomplete root penetration 
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BIncompleteRootPenetration(t, h){
    h <= 0.2 * t
}
//Rodkærv/Shrinkage groove
//For a D
//h ≤ 0,2 mm + 0,1 x t*

//Acceptniveauer t > 3 mm
//h ≤ 0,2 x t (max 2 mm)*

//For a C
//h ≤ 0,1 x t*

//Acceptniveauer t > 3 mm
//h ≤ 0,1 x t (max 1mm)*

//For a B
//Acceptniveauer t > 3 mm
//h ≤ 0,05 x t (max 0,5mm)*

/** 
 * Calculate Shrinkage Groove
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BShrinkageGroove(t, h){
    //For a B (lower? B)
    h <= 0.05 * t //(max 0,5mm)* 
    //For a C
    h <= 0.1 * t*
    //For a D
    h <= 0.2 + 0.1 * t
}

//Overvulst/Excess weld metal
//Acceptniveauer t ≥ 0,5 mm
//For a D
//h ≤ 1,0 mm + 0,25 x b (max 10 mm)
//For a C
//h ≤ 1,0 mm + 0,15 x b (max 7 mm)
//For a B
//h≤1,0 mm+0,1 x b (max 5 mm)
/** 
 * Calculate Excess weld metal
 * @param {number} b Width of weld reinforcement
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessWeldMetal(b, h){
    //For a B
    h <= 1.0+0.1 * b //(max 5mm)* 
    //For a C
    h <= 1.0 + 0.15 * b //(max 7 mm)
    //For a D
    h <= 1.0 + 0.25 * b //(max 10 mm)
}
//Konveks sømoverflade/Excessive convexity
//Acceptniveauer t ≥ 0,5 mm
//For a D
//h ≤ 1,0 mm + 0,25 x b (max 5 mm)
//For a C
//h ≤ 1,0 mm + 0,15 x b (max 4 mm)
//For a B
//h ≤ 1,0 mm + 0,1 x b (max 3 mm)
/** 
 * Calculate Excessive Convexity
 * @param {number} b Width of weld reinforcement
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessiveConvexity(b, h){
    //For a B
    h <= 1.0+0.1 * b //(max 3 mm)* 
    //For a C
    h <= 1.0 + 0.15 * b //(max 4 mm)
    //For a D
    h <= 1.0 + 0.1 * b //(max 5 mm)
}
//Rodvulst/Excess penetration
//Acceptniveauer t = 0,5 - 3 mm
//For a D
//h ≤ 1mm + 0,6 x b
//For a C
//h ≤ 1mm + 0,3 x b
//For a B
//h ≤ 1mm + 0,1 x b

//Acceptniveauer t > 3 mm
//For a D
//h ≤ 1mm + 1,0 x b (max 5 mm)
//For a C
//h ≤ 1mm + 0,6 x b (max 4 mm)
//For a B
//h ≤ 1mm + 0,2 x b (max 3 mm)

/** 
 * Calculate Excess penetration
 * @param {number} b Width of weld reinforcement
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessPenetration(b, h){
    //For a B
    h <= 1+0.1 * b //(max 3 mm)* 
    //For a C
    h <= 1.0 + 0.3 * b //(max 4 mm)
    //For a D
    h <= 1.0 + 0.6 * b //(max 5 mm)
}
//Forkert overgang / Incorrect Weld toe MISSING DATA
function BIncorrectWeldToe(b){
    
}
//Overløbning/Overlap
//Acceptniveauer t ≥ 0,5 mm
//For a D
//h ≤ 0,2 x b
/** 
 * Calculate Overlap
 * @param {number} b Width of weld reinforcement
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BOverlap(b, h){
    //For a B
    //For a C
    //For a D
    h <= 0.2 * b
}
//Mangelfuld Opfyldning / Non filled weld
//Acceptniveauer t = 0,5 - 3 mm
//For a D
//h ≤ 0,25 x t*
//For a C
//h ≤ 0,1 x t*
//For a B
//Ikke tilladt
//Acceptniveauer t > 3 mm
//For a D
//h ≤ 0,25 x t (max 2 mm)
//For a C
//h ≤ 0,1 x t (max 1 mm)
//For a B
//h ≤ 0,05 x t (max 0,5 mm)
/** 
 * Calculate Non filled weld
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BNonFilledWeld(t, h){
    //For a B
    //For a C
    h <= 0.1 * t
    //For a D
    h <= 0.25 * t
}
//Gennembrænding/Burn through
function BBurnThrough(){
    //Not permitted for any
} 


//Ulige store ben/Excessive asymmetry of fillet weld
//Acceptniveauer t ≥ 0,5 mm
//For a D
//h ≤ 2mm + 0,2 x a
//For a C
//h ≤ 2mm + 0,15 x a
//For a B
//h ≤ 1,5mm + 0,15 x a
/** 
 * Calculate Excessive asymmetry of fillet weld
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessiveAsymmetryFilletWeld(a, h){
    //For a B
    h <= 1.5 + 0.15 * a
    //For a C
    h <= 2 + 0.15 * a
    //For a D
    h <= 2 + 0.2 * a
} 
//Indadvælving i roden / Root concavity
//Acceptniveauer t = 0,5 - 3 mm
//For a D
//h ≤ 0,2 + 0,1 x t
//For a C
//h ≤ 0,1 x t*
//For a B
//Not permitted
//Acceptniveauer t > 3 mm
//For a D
//h ≤ 0,2 x t (max 2 mm)*
//For a C
// h ≤ 0,1 x t (max 1mm)*
//For a B
//h ≤ 0,05 x t (max 0,5mm)*
/** 
 * Calculate Root concavity
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BRootConcavity(t, h){
    //For a B
    //Not permitted
    //For a C
    h <= 0.1 * t
    //For a D
    h <= 0.2 + 0.1 * t
} 
//Porøsitet i rodvulst/Root porosity
//Acceptniveauer t ≤ 0,5 mm
//For a D
//Tilladt lokalt/Locally permitted
//For C & B 
//Not permitted
/** 
 * Calculate Root porosity
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function BRootPorosity(){
    //For a D
    //Tilladt lokalt/Locally permitted
    //For C & B 
    //Not permitted
} 
//Fejl ved genstart/Poor start
//Acceptniveauer t ≤ 0,5 mm
//For a D
//"Tilladt Grænsen afhænger af fejltypen opstået ved genstart. / 
//The limit depends on the type of Imperfection occurred due to restart."
//Not permitted for C & B
/** 
 * Calculate Poor start
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function BPoorStart(){
    //Acceptniveauer t ≤ 0,5 mm
    //For a D
    //"Tilladt Grænsen afhænger af fejltypen opstået ved genstart. / 
    //The limit depends on the type of Imperfection occurred due to restart."
    //Not permitted for C & B
} 
//Utilstrækkeligt A-mål / Insufficient throat thickness
//For a B
//Not permitted
//Acceptniveauer t = 0,5 - 3 mm
//For a D
//h ≤ 0,2 mm + 0,1x a* 
//For a C
//h ≤ 0,2 mm*
//Acceptniveauer t > 3 mm
//For a D
//h ≤ 0,3 mm + 0,1 x a (max 2mm)*
//For a C
//h ≤ 0,3 mm + 0,1 x a (max 1mm)*
/** 
 * Calculate Insufficient throat thickness
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BInsufficientThroatThickness(a, h){
    //Not permitted for B
    //For a C
    h <= 0.2
    //For a D
    h <= 0.2 + 0.1 * a 
} 
//For stort a-mål / Excessive throat thickness
//For a D 
//Unlimited
//Acceptniveauer t ≤ 0,5 mm
//For a C 
//h ≤ 1,0 mm + 0,2 x a (max 4 mm)
//h ≤ 1,0 mm + 0,15 x a (max 3 mm)
/** 
 * Calculate Insufficient Throat Thickness
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessiveThroatThickness(a, h){
    //For a B
    h <= 1,0 + 0,15 * a
    //For a C
    h <= 0.2
    //For a D
    h <= 0.2 + 0.1 * a 
    //For a D 
    //Unlimited
} 
//Tændsår / Stray arc
//For C & B
//Not permitted
//Acceptniveauer t ≤ 0,5 mm
//For a D
// Tilladt, hvis egenskaberne I grundmaterialet ikke påvirkes. /
// Permitted if the properties of the parent metal are not affected
/** 
 * Calculate Stray arc
 * @param {number} a Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function BStrayArc(){
    //For a B & C
    //Not permitted
    //For a D
    // Tilladt, hvis egenskaberne I grundmaterialet ikke påvirkes. /
    // Permitted if the properties of the parent metal are not affected
}
//Svejsesprøjt / Spatter
//Acceptniveauer t ≤ 0,5 mm
//For D C B
// Accept afhænger af anvendelse, fx materiale, korrosionsbeskyttelse/
// Acceptance depends on application, e.g. material, corrosion protection
/** 
 * Calculate Spatter
 * @param {number} a Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function BSpatter(){
    //For D C B
    // Accept afhænger af anvendelse, fx materiale, korrosionsbeskyttelse/
    // Acceptance depends on application, e.g. material, corrosion protection
}
//Anløbsfarve / Tempercolour
//Acceptniveauer t ≤ 0,5 mm
//For D C B
// Accept afhænger af anvendelse, fx materiale, korrosionsbeskyttelse /
// Acceptance depends on application, e.g. material, corrosion protection
/** 
 * Calculate Tempercolour
 * @param {number} a Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function BTempercolour(){
    //For D C B
    // Accept afhænger af anvendelse, fx materiale, korrosionsbeskyttelse /
    // Acceptance depends on application, e.g. material, corrosion protection
}
//Forsætning / Linear misalignment
// Acceptniveauer t = 0,5 - 3 mm
//For a D
//h≤0,2 mm+0,25mm x t
//For a C
//h ≤ 0,2mm+0,15mm xt
//For a B
//h≤0,2mm+0,1mm xt

//Acceptniveauer t > 3 mm
//For a D
//h ≤ 0,25 mm x t (max 5 mm)
//For a C
//h ≤ 0,15 mm x t (max 4 mm) 
//For a B
//h ≤ 0,1 mm x t (max 3 mm) 

//Acceptniveauer t ≤ 0,5 mm 
//For a D
//h ≤ 0,5 mm x t (max 4 mm)
//For a C
//h ≤ 0,5 mm x t (max 3 mm)
//For a B
//h ≤ 0,5 mm x t (max 2 mm)

/** 
 * Calculate Linear misalignment
 * @param {number} t Wall or plate thickness (nominal size)
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BLinearMisalignment(t, h){
    //For a B
    h <= 0.2 + 0.1 * t
    //For a C
    h <= 0.2 + 0.15 * t
    //For a D
    h <= 0.2 + 0.25 * t
}

//Dårlig tilpasning af rodspalten for kantsømme. / Incorrect root gap or fillet welds.
//Acceptniveauer t = 0,5 - 3 mm
//For a D
//h ≤ 0,5 mm + 0,1 x a
//For a C
//h ≤ 0,3 mm + 0,1 x a
//For a B
//h ≤ 0,2 mm + 0,1 x a

//Acceptniveauer t > 3 mm
//For a D
//h ≤ 1mm + 0,3 x a (max 4 mm)
//For a C
//h ≤ 0,5 mm + 0,2 x a (max 3 mm)
//For a B
//h ≤ 0,5 mm + 0,1 x a (max 2 mm)
/** 
 * Calculate Incorrect root gap or fillet welds.
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BIncorrectRootGapOrFilletWelds(a, h){
    //For a B
    h <= 0.2 + 0.1 * a
    //For a C
    h <= 0.3 + 0.1 * a
    //For a D
    h <= 0.5 + 0.1 * a
}