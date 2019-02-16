function triangleTracker() {
  /*since every input is an strings,av to convert to integer*/
  var sideQ = parseInt(document.getElementById('q').value);
  var sideR = parseInt(document.getElementById('r').value);
  var sideS = parseInt(document.getElementById('s').value);
  // var sideQ=sideR=sideS = 6;
  /* creating a variable to store the types of triangle*/
  var triangle=["Equalateral", "isosceles", "scalene"];
  var response=document.getElementById('response');
  /*the major condition for a triangle to be constructed*/

  if (sideQ + sideR > sideS && sideR + sideS > sideQ && sideQ + sideS > sideR) {

    /*if it is a triangle,now to check type of the triangle*/
    if (sideQ == sideR && sideR == sideS && sideQ==sideS) {
      // alert('this is an equilateral');
      response.innerHTML = "<h1>This is an equilateral triangle</h1> <p>An equalateral triangle it three sides are equal and all angles are equal called equiangular.It is also called regular  triangle.<br>Notable theorems:Morleyeys:states that if three points of intersection of the adjascent angle insectors form an equalateral triangle<br>Napoleon's theorem states that if an equalateral are constructed  on the side of any triangle,either outward, or all inward, the centers of those equilateral triangles themselves form sn equalateral.A version of the isopermetric inequality for triangle states that the triangle of the gratest area among all those with given perimeter is equalateral</p>"


    }
    /*if its not an equalateral to check for another type */
    else if (sideQ != sideR && sideR != sideS && sideQ!=sideS) {

      response.innerHTML = "<h1>this is an scalene triangle</h1> <p></p>"

    }
    /*last condition for a triangle*/
    else  {

      response.innerHTML = "<p>this is isosceles triangle</p>"

    }
}
  /*if someone inputs something that is not a number to output this*/
  else if(isNaN(sideQ) || isNaN(sideR) || isNaN(sideS) ){
     alert('please enter a number');
  }
  else {
    alert('This is not a triangle');
  }

}
