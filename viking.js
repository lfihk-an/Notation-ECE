var anaCoef = 0, appCoef = 0, valCoef = 0, reaCoef = 0, comCoef = 0, anaNote = 2,
appNote = 2, valNote = 2, reaNote = 2, comNote = 2;

function change_coef(coefv, coefn)
{
  coefn = document.getElementById(coefv).textContent;
  coefn++;
  if (coefn == 4) {
      coefn = 0;
  }

  if (coefn == 0) document.getElementById(coefv).style.backgroundColor = "#cfd8dc";
  if (coefn == 1) document.getElementById(coefv).style.backgroundColor = "#90a4ae ";
  if (coefn == 2) document.getElementById(coefv).style.backgroundColor = "#607d8b ";
  if (coefn == 3) document.getElementById(coefv).style.backgroundColor = "#455a64 ";


  document.getElementById(coefv).innerHTML = coefn;


  if (coefn == 0) {
    document.getElementById(coefv.substring(0, 3)+"_note").classList.add("disabled");
  } else {
    document.getElementById(coefv.substring(0, 3)+"_note").classList.remove("disabled");
    document.getElementById(notev).style.color = "#2980b9";
    document.getElementById(notev).style.backgroundColor = "#3498db";
  }

  return coefn;
}

function change_note(notev, noten)
{
  var noteir = document.getElementById(notev).textContent;
  if (noteir == 'A') {
    document.getElementById(notev).innerHTML = 'B';
    document.getElementById(notev).style.color = "#27ae60";
    document.getElementById(notev).style.backgroundColor = "#2ecc71";
    noten = 1;
  }
  if (noteir == 'B') {
    document.getElementById(notev).innerHTML = 'C';
    document.getElementById(notev).style.color = "#d35400";
    document.getElementById(notev).style.backgroundColor = "#e67e22";
    noten = -1;
  }
  if (noteir == 'C') {
    document.getElementById(notev).innerHTML = 'D';
    document.getElementById(notev).style.color = "#c0392b";
    document.getElementById(notev).style.backgroundColor = "#e74c3c";
    noten = -2;
  }
  if (noteir == 'D') {
    document.getElementById(notev).innerHTML = 'A';
    document.getElementById(notev).style.color = "#2980b9";
    document.getElementById(notev).style.backgroundColor = "#3498db";
    noten = 2;
  }
  return noten;
}

function notefinale(){
  var coefSum = anaCoef + reaCoef + appCoef + comCoef + valCoef;
  var calcn = (anaCoef*anaNote + reaCoef*reaNote + appCoef * appNote + comCoef*comNote + valCoef * valNote + 2 * coefSum)/(2 * coefSum);
  var notefin = Math.round(4 + calcn * 8);
  document.getElementById("notefinale").innerHTML= notefin;
}
