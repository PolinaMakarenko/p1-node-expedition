const fs = require('fs');
const crewArr = fs.readFileSync('/Users/polinamakarenko/Elbrus/phase1/W1 D1/p1-node-expedition/expedition1/src/crew.txt', 'utf-8').split('\n');
const equipmen = fs.readFileSync('/Users/polinamakarenko/Elbrus/phase1/W1 D1/p1-node-expedition/expedition1/src/equipment.txt', 'utf-8').split('\n');
const rockets = fs.readFileSync('/Users/polinamakarenko/Elbrus/phase1/W1 D1/p1-node-expedition/expedition1/src/rockets.txt', 'utf-8').split('\n');
// console.log(rocketsArr);
// console.log(equipmentArr);
// console.log(crewArr);

// const arrCap = crewArr.filter((el) => el.includes('Капитан'));
// const arrAq = arrCap.slice(-1).sort((maloe, bolshoe) => bolshoe - maloe);

// console.log(arrAq);

function getRightCaptain() {
// const arrCap = crewArr.filter((el) => el.includes('Капитан,'));
// const arrAq = arrCap.slice(-1).sort((maloe, bolshoe) => bolshoe - maloe);
//  return arrAq[0]
  const arrCap = crewArr.filter((el) => el.includes('Капитан,')).map((el) => el.split(' '));
  const arrCap2 = arrCap.sort((a, b) => b[b.length-1] - a[a.length-1])
  return arrCap2[0].join(' ')
  console.log(arrCap2)
}

function getRightDoc() {
  const crewArrDoc = crewArr.filter((el) => el.includes('Врач'));
  const crewArrDocFem = crewArrDoc.filter((el) => el.includes('ж,')).map((el) => el.split(' '));
  const crewArrDocFemFin = crewArrDocFem.sort((a, b) => b[b.length-1] - a[a.length-1])
  return crewArrDocFemFin[0].join(' ')
}

function getAllEngineer() {
  const crewArrEng = crewArr.filter((el) => el.includes('Бортмеханик'));
  return crewArrEng

}

function getAllRover() {
  const RoversArr = equipmen.filter((el) => el.includes('марсоход'));
  return RoversArr
}

function getRightRovers() {
  const equipment1 = equipment.filter((el) => el.includes('марсоход'));
  const equipment2 = equipment1.map((el) => el.split(', '));
  console.log(equipment2)
  const equipment3 =  equipment2.filter((el) => Number(el[2]) > 3);
  console.log(equipment3)
  return `${equipment3[0].join(', ')}, ${equipment3[1].join(', ')}`
}


module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  
};
