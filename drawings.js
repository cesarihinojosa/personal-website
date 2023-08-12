const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const book = document.querySelector("#book");
const elementsInPageClass = document.querySelectorAll('.page');
const numOfPages = elementsInPageClass.length;
let currentLocation = 1;
const maxLocation = numOfPages + 1;
let positionZ;
let pages = [];
let page;
let highIndexZ = 15;
let lowIndexZ = 0;

prevButton.addEventListener("click", GoPrevPage);
nextButton.addEventListener("click", GoNextPage);


//prevButton.addEventListener("mouseover", SetHighIndexZ);

//inside develop

SetButtonsPosition();

AssignPagesToArray();

SetPositionZ();

function AssignPagesToArray() {
    for (let i = 1; i <= numOfPages; i++) {
        page = document.querySelector("#p" + i);
        pages.push(page);
    }
}

function SetPositionZ() {
    let j = numOfPages;
    for (let i = 1; i <= numOfPages; i++) {
        pages[i - 1].style.zIndex = j;
        j--;
    }
}

function SetButtonsPosition(){
    prevButton.style.transform = "translateX(-30px)";
    nextButton.style.transform = "translateX(30px)";    
}

function OpenBook() {
    book.style.transform = "translateX(50%)";
    prevButton.style.transform = "translateX(-280px)";
    nextButton.style.transform = "translateX(280px)";
}

function CloseBook(atBeginning) {
    if (atBeginning) {
        book.style.transform = "translateX(0%)";
    }
    else {
        book.style.transform = "translateX(100%)";
    }
    prevButton.style.transform = "translateX(-30px)";
    nextButton.style.transform = "translateX(30px)";
}

function GoNextPage() {
    if (currentLocation < maxLocation) {

        if (currentLocation == 1) {
            OpenBook();
            pages[currentLocation - 1].classList.add("flipped");
            pages[currentLocation - 1].style.zIndex = highIndexZ;
        }
        else if (currentLocation < numOfPages) {
            pages[currentLocation - 2].style.zIndex = currentLocation - 1;
            pages[currentLocation - 1].classList.add("flipped");
            pages[currentLocation - 1].style.zIndex = highIndexZ;
        }
        else if(currentLocation == numOfPages){
            pages[currentLocation - 2].style.zIndex = currentLocation - 1;
            pages[numOfPages - 1].classList.add("flipped");
            pages[numOfPages - 1].style.zIndex = highIndexZ;
            CloseBook();
        }
        else{
        }
        currentLocation++;
    }
}

function GoPrevPage() {
    if (currentLocation > 1) {

        let zIndex;
        let j = numOfPages;
        for (let i = 2; i < + numOfPages + 1; i++) {
            if (i == currentLocation) {
                zIndex = j;
            }
            j--;
        }

        if (currentLocation == 2) {
            CloseBook(true);
            pages[currentLocation - 2].classList.remove("flipped");
            pages[currentLocation - 2].style.zIndex = zIndex;
        }
        else if (currentLocation <= numOfPages) {
            pages[currentLocation - 2].classList.remove("flipped");
            pages[currentLocation - 2].style.zIndex = zIndex;
        }
        else {
            OpenBook();
            pages[numOfPages - 1].classList.remove("flipped");
            pages[numOfPages - 1].style.zIndex = 1;
        }
        currentLocation--;
    }
}