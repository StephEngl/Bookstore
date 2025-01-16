let favoriteBooks = [];

function renderAllBooks() {
  getFromLocalStorage();
  renderBooks(books);
}

function renderBooks(bookArray) {
  let booksRef = document.getElementById("book_card_container");
  booksRef.innerHTML = "";
  for (let indexBooks = 0; indexBooks < bookArray.length; indexBooks++) {
    booksRef.innerHTML += getBookInfoTemplate(indexBooks);
    setHeartIcon(indexBooks);
    renderComments(indexBooks);
  }
}

function renderComments(indexBooks) {
  let commentsRef = document.getElementById("comments" + indexBooks);
  commentsRef.innerHTML = "";
  for (
    let indexComments = 0;
    indexComments < books[indexBooks].comments.length;
    indexComments++
  ) {
    commentsRef.innerHTML += getCommentsTemplate(indexBooks, indexComments);
  }
}

function renderFavoriteBooks() {
  getFromLocalStorage();
  let favoriteBook = [];
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    if (books[indexBooks].liked) {
      favoriteBook.push(books[indexBooks]);
    }
  }
  favoriteBooks = favoriteBook;
  renderBooks(favoriteBooks);
}

function addNewComment(indexBooks) {
  let commentInput = document.getElementById("commentInput" + indexBooks).value;
  let user = "Stephanie";
  if ("" == commentInput) {
    return;
  }
  books[indexBooks].comments.unshift({ name: user, comment: commentInput });
  saveToLocalStorage();
  renderComments(indexBooks);
}

// Highlight Filtered Site
function toggleFilter(id) {
  if (document.getElementById(id).classList.contains("filter_active")) {
    return;
  }
  document.getElementById("filter_all").classList.toggle("filter_active");
  document.getElementById("filter_favorites").classList.toggle("filter_active");
}

// Like Function
function setHeartIcon(indexBooks) {
  if (false == books[indexBooks].liked) {
    document.getElementById("iconHeartClickAndChange" + [indexBooks]).src =
      "./assets/icons/heartIconDislike.svg";
  } else {
    document.getElementById("iconHeartClickAndChange" + [indexBooks]).src =
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
  renderBooks(books);
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
