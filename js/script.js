/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const ul = document.querySelector('.student-list');
const li = ul.children;
const listNumb = li.length;
let pageCounter = 1;
let pageButton = document.createElement('button');


//make function so can be called again
//if li.length > 10
  //then hide elements after 10
//create page numbers with 10 people search
  //each page number can be clicked and will take to the next 10
  //if you click a random page it will take you to those 10 people
//

  if (listNumb > 10){
    for(let i = 10; i < listNumb; i++){
      li[i].hidden = true;
      if (i % 10 === 0) {
        pageCounter += 1
        //create button
        //append button to page div
        //add pageCounter number to button text
        console.log(pageCounter);
        //go to next page
      }
    }

  }
//every 10 elements show those 10 and hide the previous and the rest.
