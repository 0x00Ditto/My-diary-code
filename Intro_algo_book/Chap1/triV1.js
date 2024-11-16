
// function triInsertion(triangles){
//   let len = triangles.length;
//   let  tmp ,i, j ;

//   for (i = 1; i < len;i++) {
//     tmp = triangles[i];
//     j = i - 1;
//     while ( j >= 0 && len[j] > len ){
//       triangles[i + 1] = triangles[i];
//       i = i - 1;
//     }
//     triangles[i + 1] = tmp;
//   }
// }


//Croissant
function triInsertion(triangles) {
  let len = triangles.length;
  let tmp, i, j;

  for (i = 1; i < len; i++) { // Commencer par i = 1
    tmp = triangles[i];
    j = i - 1;
    while (j >= 0 && triangles[j] > tmp) { // Corriger les conditions de la boucle while
      triangles[j + 1] = triangles[j];
      j = j - 1;
    }
    triangles[j + 1] = tmp;
  }
}

//Decroissant
function triInsertionV2(triangles) {
  let len = triangles.length;
  let tmp, i, j;

  for (i = 1; i < len; i++) { // Commencer par i = 1
    tmp = triangles[i];
    j = i - 1;
    while (j >= 0 && triangles[j] < tmp) { // Corriger les conditions de la boucle while
      triangles[j + 1] = triangles[j];
      j = j - 1;
    }
    triangles[j + 1] = tmp;
  }
}
let triangles = [31, 41, 59, 26, 4, 58];
triInsertion(triangles);
console.log(triangles); // Output: [11, 12, 22, 25, 34, 64, 90]

triInsertionV2(triangles);
console.log(triangles); // Output: [ 59, 58, 41, 31, 26, 4]
