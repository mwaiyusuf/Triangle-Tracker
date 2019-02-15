function triangleTracker(){
/*since every input is an strings,av to convert to integer*/
var sideQ=parseInt(document.getElementbyId('q'));
var sideR=parseInt(document.getElementbyId('r'));
var sideS=parseInt(document.getElementbyId('s'));
/* creating a variable to store the types of triangle*/
var triangle=["Equalateral", "isosceles", "scalene"];
/*the major condition for a triangle to be constructed*/
if(sideQ+sideR>sideS || sideR+sideS>sideQ || sideQ+sideS>sideR){
  /*if it is a triangle,now to check type of the triangle*/
  if(sideQ==sideR && sideR==sideS){
    alert('this is an equilateral');
  }
  /*if its not an equalateral to check for another type */
  else if(sideQ!=sideR || sideR!=sideS){
    alert('this is a scalene');
  }
  /*last condition for a triangle*/
  else{
    alert('this is a isosceles');
  }
}
/*if someone inputs something that is not a number to out this*/
else if(sideQ==isNaN || sideR==isNaN || sideS==isNaN){
  alert('Enter a number');
}
else{
  alert('This is not a triangle');
}

}
triangleTracker();
