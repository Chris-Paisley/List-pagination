const ul = document.querySelector('.student-list');
const li = ul.children;
const listNumb = li.length;
const pageDiv = ul.parentElement;
const tenStudents = 10;
const totalPages = Math.ceil(listNumb / tenStudents);
let pageCounter = 1;

//shows only 10 students and will hide others depending on the page clicked
const showPage = () => {
    for(let i = 0; i < listNumb; i++){
      if(i >= (tenStudents * pageCounter) - tenStudents && i <  tenStudents * pageCounter ){
        li[i].hidden = false;
      }else {
        li[i].hidden = true;
      }
    }
}//end of showPage


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

    //if its the first page add active class without it haveing to be clicked
    if (pageCounter == 1) {
      newA.classList.add('active');
    }
    newLi.appendChild(newA);
    newUl.appendChild(newLi);

    //adds to the page counter for total number of pages so we get the correct amount of page links
    pageCounter++;

    //adds a click event to every page link
    newLi.addEventListener('click', (e) => {
      pageCounter = parseInt(e.target.textContent);
      showPage();
       //loops over all the links with active class and removes it
         //if it is the target add active class
      const links = document.getElementsByClassName('active');
      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
        }
      e.target.classList.add('active');
    })
  }
}

showPage();
appendPageLinks();
