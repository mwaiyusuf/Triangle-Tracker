function triangleTracker() {
  /*since every input is an strings,av to convert to integer*/
  var sideQ = parseInt(document.getElementbyId('q').value);
  var sideR = parseInt(document.getElementbyId('r').value);
  var sideS = parseInt(document.getElementbyId('s').value);
  /* creating a variable to store the types of triangle*/
  var triangle=["Equalateral", "isosceles", "scalene"];
  /*the major condition for a triangle to be constructed*/
  if (sideQ + sideR > sideS && sideR + sideS > sideQ && sideQ + sideS > sideR) {

    /*if it is a triangle,now to check type of the triangle*/
    if (sideQ == sideR && sideR == sideS) {
      document.getElementbyId('response').innerHTML = 'this is an equilateral';
    }
    /*if its not an equalateral to check for another type */
    else if (sideQ != sideR && sideR != sideS) {
      alert('this is a scalene');
    }
    /*last condition for a triangle*/
    else {
      alert('this is a isosceles');
    }
  }
  /*if someone inputs something that is not a number to out this*/
  else {
    alert('This is not a triangle');
  }

}
