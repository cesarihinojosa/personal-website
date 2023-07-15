const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const book = document.querySelector("#book");

const page1 = document.querySelector("#p1");
const page2 = document.querySelector("#p2");
const page3 = document.querySelector("#p3");

prevButton.addEventListener("click", GoPrevPage);
nextButton.addEventListener("click", GoNextPage);

let currentLocation = 1;
let numOfPages = 3;
let maxLocation = numOfPages + 1;

function OpenBook() {
    book.style.transform = "translateX(50%)";
    prevButton.style.transform = "translateX(-180px)";
    nextButton.style.transform = "translateX(180px)";
}

function CloseBook(atBeginning) {
    if(atBeginning){
        book.style.transform = "translateX(0%)";
    }
    else{
        book.style.transform = "translateX(100%)";
    }
    prevButton.style.transform = "translateX(0px)";
    nextButton.style.transform = "translateX(0px)";
}

function GoNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                OpenBook();
                page1.classList.add("flipped");
                page1.style.zIndex = 1;
                break;
            case 2:
                page2.classList.add("flipped");
                page2.style.zIndex = 2;
                break;
            case 3:
                page3.classList.add("flipped");
                page3.style.zIndex = 3;
                CloseBook();
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function GoPrevPage() {
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                CloseBook(true);
                page1.classList.remove("flipped");
                page1.style.zIndex = 3;
                break;
            case 3:
                page2.classList.remove("flipped");
                page2.style.zIndex = 2;
                break;
            case 4:
                OpenBook();
                page3.classList.remove("flipped");
                page3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation--;
    }
}