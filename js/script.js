const ul = document.querySelector('.student-list');
const li = ul.children;
const listNumb = li.length;
const pageDiv = ul.parentElement;
let pageCounter = 1;
let pageButton = document.createElement('button');

//create button
  //set button textContent to pageCounter
  //append button to page div
/*  function listGroupings (){
    let group = [];
    let beging = (pageCounter - 1) * 10;
    let end = beging + 10;
    let tenStudents = group.slice(beging, end);
    if(tenStudents.hidden = true){
      tenStudents.hidden = false;
    }
  }*/

function pageButtonFunc (){
  let pageButton = document.createElement('button');
  pageButton.textContent = pageCounter;
  pageDiv.appendChild(pageButton);
}

//make function so can be called again
//if li.length > 10
  //then hide elements after 10
//create page numbers with 10 people search
  //each page number can be clicked and will take to the next 10
  //if you click a random page it will take you to those 10 people
//

pageButtonFunc();
  if (listNumb > 10){
    for(let i = 10; i < listNumb; i++){
      li[i].hidden = true;

      //every 10th student add 1 to the page counter
      if (i % 10 === 0) {
        pageCounter += 1
        pageButtonFunc();


        //go to next page
      }
    }

  }
//every 10 elements show those 10 and hide the previous and the rest.
