

// Creare un array di oggetti: ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// function racingBikes() {
//   let bikes = [
//     {
//       'name': 'ducati',
//       'weigth': 11
//     },
//     {
//       'name': 'ktm',
//       'weigth': 12
//     },
//     {
//       'name': 'maserati',
//       'weigth': 10
//     },
//     {
//       'name': 'ferrari',
//       'weigth': 14
//     },
//   ];
//   var liteBike = {'weigth': Number.MAX_VALUE};
//
//   for (var i = 0; i < bikes.length; i++) {
//     if (liteBike['weigth'] > bikes[i]['weigth']) {
//       liteBike = bikes[i];
//     }
//   }
//
//   console.log(liteBike);
//
// }




// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.

// Nome sarà l'unica proprietà da compilare,
// le altre saranno tutte settate a 0.


function ftTeams() {
  let teams = [
    {
      'name': 'teams1',
      'point': 0,
      'mistake': 0
    },
    {
      'name': 'teams2',
      'point': 0,
      'mistake': 0
    },
    {
      'name': 'teams3',
      'point': 0,
      'mistake': 0
    },
    {
      'name': 'teams4',
      'point': 0,
      'mistake': 0
    },
    {
      'name': 'teams5',
      'point': 0,
      'mistake': 0
    },
  ];

  for (let i = 0; i < teams.length; i++) {

    var rndValue1 = rnd(1, 50);
    var rndValue2 = rnd(1, 50);

    let temp = {
      'point': rndValue1,
      'mistake': rndValue2
    };





    teams[i]['point'] = temp['point'];
    teams[i]['mistake'] = temp['mistake'];

  }

// Usando la destrutturazione creiamo un nuovo array
// i cui elementi contengono solo nomi e falli subiti
// e stampiamo tutto in console.



const resArr = [];
for (let i = 0; i < teams.length; i++) {

    const team = teams[i];

    let { point, mistake } = team;
    let addObj = { point, mistake };

    resArr.push(addObj);
}

console.log(teams, resArr);

}


function rnd(min, max) {

  const RndMin = min;
  const RndMax = (max - min) + 1;

  var rndValue = Math.floor(Math.random() * RndMax) + RndMin;

  return rndValue;

}


function init() {

 ftTeams();

  // racingBikes();



}

$(document).ready(init);
