function triangleTracker() {
/*since every input is an strings,av to convert to integer*/
  var sideQ = parseInt(document.getElementById('q').value);
  var sideR = parseInt(document.getElementById('r').value);
  var sideS = parseInt(document.getElementById('s').value);
  var tri=[sideQ,sideR,sideS];
  /* creating a variable to store the types of triangle*/
  var triangle=["Equalateral", "isosceles", "scalene"];
  var response=document.getElementById('response');
  /*the major condition for a triangle to be constructed*/
if (tri[0] + tri[1] > tri[2] && tri[1] + tri[2] > tri[0] && tri[0] + tri[2] > tri[1]) {
    /*if it is a triangle,now to check type of the triangle*/
    if (tri[0] == tri[1] && tri[1] == tri[2] && tri[0]==tri[2]) {
      // alert('this is an equilateral');
      response.innerHTML = "<h1>This is an equilateral triangle</h1> <p>An equalateral triangle it three sides are equal and all angles are equal called equiangular.It is also called regular  triangle.<br>Notable theorems:Morleyeys:states that if three points of intersection of the adjascent angle insectors form an equalateral triangle<br>Napoleon's theorem states that if an equalateral are constructed  on the side of any triangle,either outward, or all inward, the centers of those equilateral triangles themselves form sn equalateral.A version of the isopermetric inequality for triangle states that the triangle of the gratest area among all those with given perimeter is equalateral</p>"
      }
    /*if its not an equalateral to check for another type */
    else if (tri[0] != tri[1] && tri[1] != tri[2] && tri[0] != tri[2]) {

      response.innerHTML = "<h1>this is an scalene triangle</h1> <p>This triangle have diferent lengths on its sides(noncongruent).Its angles add up to 180 degrees.The lognest side of the triangle is the opposite the largets angle.The shortest side of the triangle is opposite the smallest angle.A right triangle can be a scalene triangle.A vertex of a scalene is the point where two lines meet and form a corner,every scalene has three vertices.Any side of a scalene triangle can be base.A scalene doesnt have a lin eof symmetry</p>"
     }
    /*last condition for a triangle*/
    else  {
     response.innerHTML = "<h1>this is isosceles triangle</h1> <p>It two sides  and two angles are congruent.The vertex angle is always opposite the base.</>"
     }
}
  /*if someone inputs something that is not a number to output this*/
  else if(isNaN(tri[0]) || isNaN(tri[1]) || isNaN(tri[2]) ){
     alert('please enter a number');
  }
  else {
    alert('This is not a triangle');
  }

}
