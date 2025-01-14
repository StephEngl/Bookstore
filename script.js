function onInit() {
    renderBooks();
}

function renderBooks() {
    let booksRef = document.getElementById("bookCardContainer");
    booksRef.innerHTML = "";
    
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        booksRef.innerHTML += getBookInfoTemplate(indexBooks);

        for (let indexComments = 0; indexComments < books[indexComments].comments.length; indexComments++) {
        let commentsRef = document.getElementById("comments${indexBooks}");
        commentsRef.innerHTML = "";
        
        commentsRef.innerHTML += getCommentsTemplate(indexBooks, indexComments);      
        }    
    };
}

function saveToLocalStorage() {
localStorage.setItem("books", JSON.stringify(books))
}

function changeHeartIcon() {
    if (document.getElementById("iconHeartClickAndChange").src == "assets/icons/heart _Icon.svg"){
        document.getElementById("iconHeartClickAndChange").src = "assets/icons/heartPurple.svg";
    } else {
        document.getElementById("iconHeartClickAndChange").src = "assets/icons/heart _Icon.svg";
    }
}