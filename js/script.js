const ul = document.querySelector('.student-list');
const li = ul.children;
const listNumb = li.length;
const pageDiv = ul.parentElement;
const tenStudents = 10;
const totalPages = Math.ceil(listNumb / tenStudents);
let pageCounter = 1;
const pageHeaderDiv = document.getElementsByClassName('page-header cf');
const studentsDiv = document.getElementsByTagName('h3');
const searchDiv = document.createElement('div');
const searchBar = document.createElement('input');
const searchButton = document.createElement('button');
const newDiv = document.createElement('div');
const noMatch = document.createElement('p');
const newUl = document.createElement('ul');


//function if no results make a paragraph telling the user about it
const noResults = () => {
  noMatch.innerHTML = `<p> Student not found</p>`;
  ul.appendChild(noMatch);
}

const searchKeyup = () => {
  searchBar.addEventListener('keyup', () => {
    let studentName;
    let searchedStudents = [];
    let studentCount = 0;

    for (let i = 0; i < studentsDiv.length; i++) {
      studentName = studentsDiv[i].innerHTML;
      if (studentName.toUpperCase().indexOf(searchBar.value.toUpperCase()) > -1) {
        li[i].hidden = false;
        searchedStudents.push(studentsDiv[i]);
        studentCount++;
      }else {
        li[i].hidden = true;

      }
    }

    showPage(studentCount);
    pageCounter = 1;
    const newTotalPages = Math.ceil( searchedStudents.length/ tenStudents);
    appendPageLinks(newTotalPages);
    console.log(newTotalPages);

    if (studentCount === 0) {
      noResults();
      newDiv.hidden = true;
    } else {
      noMatch.innerHTML = '';
    }

  })//end of keyup

}//end of searchKeyup func

//function for searching
const searchingFunc = () => {
  searchDiv.classList.add('student-search');
  searchButton.innerHTML = 'Search';

  //searching for students... the placeholder is only visable if the search isnt in focus
  searchBar.setAttribute('placeholder', 'Searching for students...');
  searchBar.addEventListener('focus', () => {
    searchBar.setAttribute('placeholder', '');
  })
  searchBar.addEventListener('blur', () => {
    searchBar.setAttribute('placeholder', 'Searching for students...');
  })

  for (var i = 0; i < pageHeaderDiv.length; i++) {
    pageHeaderDiv[0].appendChild(searchDiv);
  }

  searchDiv.appendChild(searchBar);
  searchDiv.appendChild(searchButton);
  searchKeyup();
}//end of searchingFunc


//shows only 10 students and will hide others depending on the page clicked
const showPage = (listNumb) => {
    for(let i = 0; i < listNumb; i++){
      if(i >= (tenStudents * pageCounter) - tenStudents && i <  tenStudents * pageCounter ){
        li[i].hidden = false;
      }else {
        li[i].hidden = true;
      }
    }
}//end of showPage


const appendPageLinks = (totalPages) => {
  if(ul.classList.contains('pagination')){
    li[i].classList.remove('pagination');
  }

  //creates a new div with ul inside with class of pagination
  newDiv.classList.add('pagination');
  pageDiv.appendChild(newDiv);

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
      showPage(listNumb);
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

searchingFunc();
showPage(listNumb);
appendPageLinks(totalPages);
