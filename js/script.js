const ul = document.querySelector('.student-list');
const li = ul.children;
const listNumb = li.length;
const pageDiv = ul.parentElement;
const tenStudents = 10;
let pageCounter = 1;

//create button
  //set button textContent to pageCounter
  //append button to page div
function pageButtonFunc (){
  let pageButton = document.createElement('button');
  pageButton.textContent = pageCounter;
  pageDiv.appendChild(pageButton);
  pageButton.addEventListener('click', () => {
    //take to page acording to button clicked

  });
}

//create page numbers with 10 people search
  //each page number can be clicked and will take to the next 10
  //if you click a random page it will take you to those 10 people




pageButtonFunc();


    for(let i = 10; i < listNumb; i++){
      if(i <= tenStudents * pageCounter && i > (tenStudents * pageCounter) - tenStudents){
        li[i].hidden = true;
      }else {
        li[i].hidden = false;
      }

      //every 10th student add 1 to the page counter
      if (i % 10 === 0) {
        pageCounter ++;
        pageButtonFunc();
        //go to next page
      }
    }


//every 10 elements show those 10 and hide the previous and the rest.
