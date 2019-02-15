function triangleTracker(){
/*since every input is an strings,av to convert to integer*/
var sideq=parseInt(document.getElementbyId('q'));
var sider=parseInt(document.getElementbyId('r'));
var sides=parseInt(document.getElementbyId('s'));
/* creating a variable to store the types of triangle*/
var triangle=["Equalateral", "isosceles", "scalene"];
/*the major condition for a triangle to be constructed*/
if(sideQ+sideR>sideS || sideR+sideS>sideQ || sideQ+sideS>sideR){
  /*if it is a triangle,now to check type of the triangle*/
  if(sideQ==sideR && sideR==sideS){
    .innerHTML('this is an equilateral');
  }
  // else if(sideQ!=sideR || sideR!=sideS){
  //   .innerHTML('this is a scalene');
  // }
//   else{
//     .innerHTML('this is a isosceles');
//   }
// }
// else if(sideQ==isNaN || sideR==isNaN || sideS==isNaN){
//   .innerHTML('Enter a number');
// }
// else{
//   .innerHTML('This is not a triangle');
// }
//
// }
// triangleTracker();
