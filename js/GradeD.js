export { DGrading };
//Limits for imperfections for quality levels 
//CHECK REMARKS VED ALLE
//Gå igennem alle formler, og sørg for at alle er der OG ingen mangler
//Gå igennem alle og gør noget ved "Not permitted"
function DGrading(d, s, a, t, h, isFilletWeld) {
    return DCrack(t) +
        DCraterCrack(t) +
        DSurfacePore(s, d, t) +
        DEndCraterPipe +
        DIncompleteRootPenetration +
        DShrinkageGroove +
        DExcessWeldMetal +
        DExcessiveConvexity +
        DExcessPenetration +
        DIncorrectWeldToe +
        DOverlap +
        DNonFilledWeld +
        DBurnThrough +
        DExcessiveAsymmetryFilletWeld +
        DRootConcavity +
        DRootPorosity +
        DPoorStart +
        DInsufficientThroatThickness +
        DExcessiveThroatThickness +
        DStrayArc +
        DSpatter +
        DTempercolour +
        DLinearMisalignment +
        DIncorrectRootGapOrFilletWelds
}

/** 
 * Get Crack grade
 * Revne/Crack
 * @param {number} t Wall or plate thickness
 * @returns {string} Viable grade 
 */
function DCrack(t) {
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
function DCraterCrack(t) {
    if (t >= 0.5) {
        return "Not permitted/Ikke tilladt"
    }
}

/** 
 * Calculate Surface Pore
 * Overfladepore/Surface pore
 * @param {number} s weld thickness 
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function DSurfacePore(s, t) {
    if (t >= 0.5) {
        return `d <= ${0.3 * s}`;
    }
    return `d <= ${0.3 * s} (max 3mm)`;

}

/** 
 * Calculate End crater pipe 
 * Åben kraterpore/End crater pipe
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function DEndCraterPipe(t) {
    if (t >= 0.5 && t < 3 && t != 2) {
        return `*h <= ${0.2 * t}`;
    }
    if (t > 3) {
        return `*h <= ${0.2 * t}`;
    }

}

/** 
 * Bindingsfejl /* lack of fusion
 * @returns {string} First viable grade 
 */
function DLackOfFusion() {
    return "Not permitted/Ikke tilladt"
}

/** 
 * MikroBindingsfejl /*Micro lack of fusion
 * @returns {string} First viable grade 
 */
function DMicroLackOfFusion() {
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
function DIncompleteRootPenetration(t, h) {
    return `*h <= ${0.2 * t}`;
}

/** 
 * Calculate Intermittent undercut
 * (Kontinueret) Lokal sidekærv / (Continuos) Intermittent undercut
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function DIntermittenUndercut(t) {
    if (t > 3) {
        return `h <= ${0.2 * t} (max 1mm)`
    }
    if (t >= 0.5 && t <= 3) {
        return `h <= ${0.2 * t} (max 1mm)*`
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
function DShrinkageGroove(t, h) {
    if (t > 3) {
        return `h <= ${0.2 + 0.1 * t}*`;
    }
    if (t >= 0.5 && t <= 3) {
        return `h <= ${0.2 * t} (max 2 mm)*`
    }
}

/** 
 * Calculate Excess weld metal
 * Overvulst/Excess weld metal
 * @param {number} b Width of weld reinforcement
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function DExcessWeldMetal(b, h) {
    return `h <= ${1.0 + 0.25 * b} (max 10mm)`;
}

/** 
 * Calculate Excessive Convexity
 * Konveks sømoverflade/Excessive convexity
 * @param {number} b Width of weld reinforcement
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function DExcessiveConvexity(b, h) {
    return `h <= ${1.0 + 0.25 * b} (max 5mm)`; //(max 5 mm)
}

/** 
 * Calculate Excess penetration
 * Rodvulst/Excess penetration
 * @param {number} b Width of weld reinforcement
 * @param {number} t 
 * @returns {string} First viable grade 
 */
function DExcessPenetration(b, t) {
    if (t > 3) {
        return `h <= ${1.0 + 1.6 * b} (max 5 mm)`;

    }
    if (t >= 0.5 && t <= 3) {
        return `h <= ${1.0 + 0.6 * b}`;
    }
}

/** 
 * Gets the acceptable angle for the weld toe
 * Forkert overgang / Incorrect Weld toe
 * @returns {string} Acceptable angle (For D, alpha is the same for fillet and butt welds) 
 */
function DIncorrectWeldToe() {
    return "α => 90°"
}

/** 
 * Calculate Overlap
 * Overløbning/Overlap
 * @param {number} b Width of weld reinforcement
 * @returns {string} First viable grade 
 */
function DOverlap(b) {
    return `h <= ${0.2 * b}`;
}

/** 
 * Calculate Non filled weld
 * Mangelfuld Opfyldning / Non filled weld
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function DNonFilledWeld(t, h) {
    if (t > 3) {
        return `h <= ${0.25 * t} (max 2 mm)`;
    }
    if (t >= 0.5 && t <= 3) {
        return `h <= ${0.25 * t}*`;
    }
}

/**
 *Gennembrænding/Burn through
*/
function DBurnThrough() {
    return "Not permitted/Ikke tilladt"
}

/** 
 * Calculate Excessive asymmetry of fillet weld
 * Ulige store ben/Excessive asymmetry of fillet weld
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function DExcessiveAsymmetryFilletWeld(a, h) {
    return `h <= ${2 + 0.2 * a}`;
}

/** 
 * Calculate Root concavity
 * Indadvælving i roden / Root concavity
 * @param {number} t Wall or plate thickness
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function DRootConcavity(t, h) {
    if (t > 3) {
        return `h <= ${0.2 * t} (max 2 mm)*`;
    }
    if (t >= 0.5 && t <= 3) {
        return `h <= ${0.2 + 0.1 * t}`;
    }
}

/** 
 * Calculate Root porosity
 * Porøsitet i rodvulst/Root porosity
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function DRootPorosity() {
    if (t <= 0.5) {
        return "Locally permitted/Tilladt lokalt"
    }
    return "Not allowed"
}

/** 
 * Calculate Poor start
 * Fejl ved genstart/Poor start
 * @param {number} t Wall or plate thickness
 * @returns {string} First viable grade 
 */
function DPoorStart(t) {
    if (t <= 0.5) {
        return "Tilladt Grænsen afhænger af fejltypen opstået ved genstart./The limit depends on the type of Imperfection occurred due to restart."
    }
    return "Not allowed"
}

/** 
 * Calculate Insufficient throat thickness
 * Utilstrækkeligt A-mål / Insufficient throat thickness
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function DInsufficientThroatThickness(a, t) {
    if (t > 3) {
        return `h <= ${0.3 + 0.1 * a} (max 2mm)*`;
    }
    if (t <= 0.5 && t > 3) {
        return `h <= ${0.2 + 0.1 * a}*`;
    }
}

/** 
 * Calculate Excessive Throat Thickness
 * For stort a-mål / Excessive throat thickness
 * @returns {string} First viable grade 
 */
function DExcessiveThroatThickness(a, h) {
    return "Unlimited/Ubegænset";
}

/** 
 * Calculate Stray arc
 * Tændsår / Stray arc
 * @param {number} t Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function DStrayArc(t) {
    if (t <= 0.5) {
        return "Tilladt, hvis egenskaberne I grundmaterialet ikke påvirkes. / Permitted if the properties of the parent metal are not affected";
    }
}

/** 
 * Calculate Spatter
 * Svejsesprøjt / Spatter
 * @param {number} a Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function DSpatter() {
    if (t <= 0.5) {
        return "Accept afhænger af anvendelse, fx materiale, korrosionsbeskyttelse/Acceptance depends on application, e.g. material, corrosion protection";
    }
}

/** 
 * Calculate Tempercolour
 * Anløbsfarve / Tempercolour
 * @param {number} a Nominal throat thickness of the fillet weld
 * @returns {string} First viable grade 
 */
function DTempercolour(t) {
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
function DLinearMisalignment(t) {
    if (t > 3) {
        return `h <= ${0.25 * t} (max 5mm)`;
    }
    if (t <= 0.5) {//THIS ONE IS SOMETHING ELSE
        return `h <= ${0.5 * t} (max 4 mm)`;
    }
    if (t <= 0.5 && t > 3) {
        return `h <= ${0.2 + 0.25 * t}`;
    }


}

/** 
 * Calculate Incorrect root gap or fillet welds.
 * Dårlig tilpasning af rodspalten for kantsømme. / Incorrect root gap or fillet welds.
 * @param {number} a Nominal throat thickness of the fillet weld
 * @param {number} h Height or width of imperfection
 * @returns {string} First viable grade 
 */
function DIncorrectRootGapOrFilletWelds(a, t) {
    if (t > 3) {
        return `h <= ${0.5 + 0.1 * a}`;
    }
    if (t <= 0.5 && t > 3) {
        return `h <= ${1 + 0.3 * a} (max 4 mm)`
    }
}