// let myIndex = 0;
// carousel();

// function carousel() {
//   let i;
//   let x = document.getElementsByClassName("gal-img");
//   for (i = 0; i < x.length; i++) {
//     x[i+2].style.display = "none";  
    
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}