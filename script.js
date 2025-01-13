function renderBooks() {
    let booksRef = document.getElementById("bookCardContainer");
    booksRef.innerHTML = "";
    for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
        booksRef.innerHTML += books[indexBooks].name;      
    }
}