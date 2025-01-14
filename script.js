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
    }
    

}