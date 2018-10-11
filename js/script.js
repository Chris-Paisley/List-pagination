const ul = document.querySelector('.student-list');
const li = ul.children;
const listNumb = li.length;
const pageDiv = ul.parentElement;
const tenStudents = 10;
const totalPages = Math.ceil(listNumb / tenStudents);
let pageCounter = 1;


const showPage = () => {
    for(let i = 0; i < listNumb; i++){
      if(i >= (tenStudents * pageCounter) - tenStudents && i <  tenStudents * pageCounter ){
        li[i].hidden = false;
      }else {
        li[i].hidden = true;
      }
    }
}


const appendPageLinks = () => {
  if(ul.classList.contains('pagination')){
    li[i].classList.remove('pagination');
  }

  //creates a new div with ul inside with class of pagination
  const newDiv = document.createElement('div');
  newDiv.classList.add('pagination');
  pageDiv.appendChild(newDiv);
  const newUl = document.createElement('ul');
  newDiv.appendChild(newUl);

  //for every page needed add a li, a, set the text to the page number and put them in the ul
  for (let i = 0; i < totalPages; i++) {
    const newLi = document.createElement('li');
    const newA = document.createElement('a');
    newA.textContent = pageCounter;
    newLi.appendChild(newA);
    newUl.appendChild(newLi);

    //adds to the page counter for total number of pages so we get the correct amount of page links
    pageCounter++;


    //adds a click event to every page link
    newLi.addEventListener('click', (e) => {
      showPage();
      for (var i = 0; i < totalPages; i++) {
        newA.classList.remove('active');
      }
      e.target.classList.add('active');
      })
  }

}
showPage();
appendPageLinks();
