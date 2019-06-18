const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

const newStrand = []

newStrand.push(genes[0], genes[1]);
newStrand[2] = genes[4];
newStrand[4] = genes[2];
newStrand.splice(3,1);
newStrand.push(genes[3],genes[3]);
newStrand.unshift("FXT");