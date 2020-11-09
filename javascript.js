// alert("Täällä ollaan");
// console.log("Täällä ollaan");

  //muuttujat: let tai const;

  let ika = 17;
  
  ika = ika + 1;

console.log(ika)

const pii=3.14;

console.log('piin likiarvo ' + pii);

const etunimi='Leevi'
const sukunimi= 'Svärd'
const syntymavuosi='2003'
const lahtelainen=true; //boolean
let naarittelematon; //undefined 

console.log("syntymävuoden tyyppi:" + typeof syntymävuosi);
console.log("Nimen tyyppi:" + typeof etunimi);
console.log("lahtelaisuuden tyyppi:" + typeof lahtelainen);

console.log('nimeni on ' + etunimi +' ' +sukunimi + ' ja syntymävuoteni on ' + syntymavuosi);

const henkilotiedot=(`Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`);

console.log(henkilotiedot)

console.log(`henkilotiedot pituus on: ${henkilotiedot.lenght}`);

console.log(henkilotiedot.toUpperCase());

console.log(henkilotiedot.substring(0, 9));

console.log(henkilotiedot.substring(0,9).toUpperCase())

console.log(henkilotiedot.split(' ')[2]);
console.log(henkilotiedot.split(' '));
const autoja = ['hyndai', 'toyota', 'volvo'];

autoja[3]='BMW';

autoja.push ('saab');

autoja.unshift('mersu');

autoja.pop();

console.log(autoja);

const opiskelija = {
  etunimi: 'leevi',
  sukunimi: 'Svärd',
  syntymävuosi: '2003',
 koulutus: ['insinööri', 'maisteri', 'opettajan pätevyys'],
  osoite: {
  katu: 'Strålberginkatu 8C',
  postinumero:15810,
  kunta: 'lahti'
  }
 }
console.log(opiskelija.etunimi)


const laksyt = [
    {
    id: 1,
    tehtava: 'Ohjelmointi, HTML',
    tehty: true
    },
    {
    id: 2,
    tehtava: 'Ohjelmointi, CSS',
    tehty: true
    },
    {
    id: 3,
    tehtava: 'Ohjelmointi, JS',
    tehty: false
    },
];

for(let i=0; i <= 10; i++){
  console.log(`iternaatio luku on: ${i}`);
}
let i = 0;
while(i<=10){
  console.log(`WHile loopiniternaatio luku on: ${i}`);
  i++;
}
for(let i=0; i<laksyt.length; i++){
  console.log(laksyt[i].tehtava);
}

const laksytTehtava = laksyt.map(function(laksyt){
  
  return laksyt.tehtava;
});

  console.log(laksytTehtava);