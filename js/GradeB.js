export { BGrading };
//Limits for imperfections for quality levels 
//CHECK REMARKS VED ALLE
//Gå igennem alle formler, og sørg for at alle er der OG ingen mangler
//Gå igennem alle og gør noget ved "Not permitted"
function BGrading(d, s, a, t, h, isFilletWeld) {
    return BCrack(t) +
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

/** 
 * Get Crack grade
 * Revne/Crack
 * @param {number} t Wall or plate thickness
 * @returns {string} Viable grade 
 */
function CCrack(t) {
    if (t >= 0.5) {
        return "Not permitted/Ikke tilladt"
    }
}

/** 
 * Get Crater Crack grade
 * Kraterrevne/Crater crack
 * @param {number} t Wall or plate thickness
 * @returns {string} Viable grade 
 */
function CCraterCrack(t) {
    if (t >= 0.5) {
        return "Not permitted/Ikke tilladt"
    }
}

/** 
 * Calculate Surface Pore
 * Overfladepore/Surface pore
 * @returns {string} First viable grade 
 */
function BSurfacePore() {
    return "Not allowed/Ikke tilladt";
}

/** 
 * Calculate End crater pipe 
 * Åben kraterpore/End crater pipe
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function BEndCraterPipe(t,) {
    return "Not allowed/Ikke tilladt";
}

/** 
 * Bindingsfejl /* lack of fusion
 * @returns {string} First viable grade 
 */
function LackOfFusion() {
    return "Not permitted/Ikke tilladt"
}

/** 
 * MikroBindingsfejl /*Micro lack of fusion
 * @returns {string} First viable grade 
 */
function MicroLackOfFusion() {
    return "Not permitted/Ikke tilladt"
    //Mikrobindingsfejl kun detekterbare ved mikroundersøglse / Only detected by micro examination
}

/** 
 * Calculate Incomplete root penetration 
 * Rodfejl/Incomplete root penetration
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BIncompleteRootPenetration(t, h) {
    return "Not Allowed/Ikke Tilladt";
}

/** 
 * Calculate Intermittent undercut
 * (Kontinueret) Lokal sidekærv / (Continuos) Intermittent undercut
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function BIntermittenUndercut(t) {
    if (t > 3) {
        return `h <= ${0.05 * t} (max 0,5mm)`
    }
    return "t out of range!";
}

/** 
 * Calculate Shrinkage Groove
 * Rodkærv/Shrinkage groove
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BShrinkageGroove(t, h) {
    if (t > 3) {
        return `h <= ${0.05 * t} (max 0,5mm)*`;
    }

    return "Not allowed/Ikke tilladt";
}

/** 
 * Calculate Excess weld metal
 * Overvulst/Excess weld metal
 * @param {number} b Width of weld reinforcement
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessWeldMetal(b, h) {
    //For a B
    return `h <= ${1.0 + 0.1 * b} (max 5mm)`;
}

/** 
 * Calculate Excessive Convexity
 * Konveks sømoverflade/Excessive convexity
 * @param {number} b Width of weld reinforcement
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessiveConvexity(b, h) {
    //For a B
    return `h <= ${1.0 + 0.1 * b} (max 3 mm)*`
}

/** 
 * Calculate Excess penetration
 * Rodvulst/Excess penetration
 * @param {number} b Width of weld reinforcement
 * @param {number} t
 * @returns {string} First viable grade 
 */
function BExcessPenetration(b, t) {
    if (t > 3) {
        return `h <= ${1 + 0.2 * b} (max 3 mm)*`
    }
    if (t >= 0.5 && t <= 3) {
        return `h <= ${1 + 0.1 * b}`
    }
}

/** 
 * Gets the acceptable angle for the weld toe
 * Forkert overgang / Incorrect Weld toe
 * @returns {string} Acceptable angle (For D, alpha is the same for fillet and butt welds) 
 */
function BIncorrectWeldToe(isFilletWeld) {
    if (isFilletWeld) {
        return "α => 110°"
    }
    return "α => 150°"

}

/** 
 * Calculate Overlap
 * Overløbning/Overlap
 * @returns {string} First viable grade 
 */
function BOverlap() {
    return "Not allowed/Ikke tilladt";
}

/** 
 * Calculate Non filled weld
 * Mangelfuld Opfyldning / Non filled weld
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BNonFilledWeld(t, h) {
    if (t > 3) {
        return `h <= ${0.05 * t} (max 0,5 mm)`
    }
    return "Not permitted/Ikke tilladt";
}

/**
 *Gennembrænding/Burn through
*/
function BBurnThrough() {
    return "Not permitted/Ikke tilladt";
}

/** 
 * Calculate Excessive asymmetry of fillet weld
 * Ulige store ben/Excessive asymmetry of fillet weld
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessiveAsymmetryFilletWeld(t, a, h) {
    if (t >= 0.5) {
        return `h <= ${1.5 + 0.15 * a}`;
    }
}

/** 
 * Calculate Root concavity
 * Indadvælving i roden / Root concavity
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BRootConcavity(t, h) {
    if (t > 3) {
        return `h <= ${0.05 * t} (max 0,5mm)*`;
    }
    return "Not allowed/Ikke tilladt";
}

/** 
 * Calculate Root porosity
 * Porøsitet i rodvulst/Root porosity
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function BRootPorosity() {
    return "Not allowed/Ikke tilladt";
}

/** 
 * Calculate Poor start
 * Fejl ved genstart/Poor start
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function BPoorStart() {
    return "Not allowed/Ikke tilladt";
}

/** 
 * Calculate Insufficient throat thickness
 * Utilstrækkeligt A-mål / Insufficient throat thickness
 * @returns {string} First viable grade 
 */
function BInsufficientThroatThickness() {
    return "Not allowed/Ikke tilladt";
}

/** 
 * Calculate Excessive Throat Thickness
 * For stort a-mål / Excessive throat thickness
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BExcessiveThroatThickness(a, t) {
    if (t <= 0.5) {
        return `h <= ${1.0 + 0.15 * a} (max 3 mm)`;
    }
    return "t is in an unacceptable range! (t is greater than 0.5)"
}

/** 
 * Calculate Stray arc
 * Tændsår / Stray arc
 * @param {number} a Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function BStrayArc(t) {
    return "Not allowed/Ikke tilladt";
}

/** 
 * Calculate Spatter
 * Svejsesprøjt / Spatter
 * @param {number} a Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function BSpatter(t) {
    if (t <= 0.5) {
        return "Accept afhænger af anvendelse, fx materiale, korrosionsbeskyttelse/Acceptance depends on application, e.g. material, corrosion protection"
    }
    return "t is in an unacceptable range! (t is greater than 0.5)"

}

/** 
 * Calculate Tempercolour
 * Anløbsfarve / Tempercolour
 * @param {number} a Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function BTempercolour(t) {
    if (t <= 0.5) {
        return "Accept afhænger af anvendelse, fx materiale, korrosionsbeskyttelse/Acceptance depends on application, e.g. material, corrosion protection"
    }
    return "t is in an unacceptable range! (t is greater than 0.5)"
}

/** 
 * Calculate Linear misalignment
 * Forsætning / Linear misalignment
 * @param {number} t Wall or plate thickness (nominal size)
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BLinearMisalignment(t) {
    if (t > 3) {
        return ` h <= ${0.1 * t} (max 3 mm)`
    }
    if (t <= 0.5) {//THIS ONE IS SOMETHING ELSE
        return `h <= ${0.5 * t} (max 2 mm)`
    }
    if (t <= 0.5 && t > 3) {
        return `h <= ${0.2 + 0.1 * t};`
    }

}

/** 
 * Calculate Incorrect root gap or fillet welds.
 * Dårlig tilpasning af rodspalten for kantsømme. / Incorrect root gap or fillet welds.
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function BIncorrectRootGapOrFilletWelds(a, t) {
    if (t > 3) {
        return ` h <= ${0.5 + 0.1 * a} (max 2 mm)`
    }
    if (t <= 0.5 && t > 3) {
        return `h <= ${0.2 + 0.1 * a}`;
    }
}