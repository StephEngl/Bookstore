function onInit() {
  renderBooks();
}

function renderBooks() {
  getFromLocalStorage();
  let booksRef = document.getElementById("bookCardContainer");
  booksRef.innerHTML = "";
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    booksRef.innerHTML += getBookInfoTemplate(indexBooks);
    setHeartIcon(indexBooks);

    // renderComments(indexBooks);
  }
}

function renderComments() {
  let commentsRef = document.getElementById("comments${indexBooks}");
  commentsRef.innerHTML = "";
  for (
    let indexComments = 0;
    indexComments < books[indexComments].comments.length;
    indexComments++
  ) {
    commentsRef.innerHTML += getCommentsTemplate(indexBooks, indexComments);
  }
}

function setHeartIcon(indexBooks) { 
  if (false == books[indexBooks].liked) {
    document.getElementById("iconHeartClickAndChange"+[indexBooks]).src =
      "./assets/icons/heartIconDislike.svg";
  } else {
    document.getElementById("iconHeartClickAndChange"+[indexBooks]).src =
      "./assets/icons/heartIconLike.svg";
  }
}

function changeHeartIcon(indexBooks) {
  books[indexBooks].liked = !books[indexBooks].liked;
  if (books[indexBooks].liked) {
    books[indexBooks].likes += 1;
  } else {
    books[indexBooks].likes -= 1;
  }
  saveToLocalStorage();
  renderBooks();
}

// Local Storage
function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

function getFromLocalStorage() {
  let myBooks = JSON.parse(localStorage.getItem("books"));
  if (null != myBooks) {
    books = myBooks;
  }
}
