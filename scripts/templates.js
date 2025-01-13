function getBookInfoTemplate(indexBooks) {
  return /*html*/ `
    <div class="bookCard">
        <h2>${books[indexBooks].name}</h2>
        <img style="width:72px;" src="./assets/img/bookViolet.png" alt="Lila Buch">
        <div id="priceAndLikes">
        <p>${books[indexBooks].price} €</p>
        <div>${books[indexBooks].likes} <img style="width:36px;" src="./assets/icons/heartIcon.svg" alt="Herz"></div>
        </div> 
        <div id="bookInfos">
            <div><h3 class="bookInfo">Autor/innen</h3><p>${books[indexBooks].author}</p></div> 
            <div><h3 class="bookInfo">Erscheinungsjahr</h3><p>${books[indexBooks].publishedYear}</p></div> 
            <div><h3 class="bookInfo">Genre</h3><p>${books[indexBooks].genre}</p></div> 
        </div>
        <div class="comments" id="comments">
        </div>
    </div>
`;
}

function getCommentsTemplate(indexBooks) {
  return /*html*/ `
    <h3>Kommentare</h3>
    <div>
        <div class="user" id="user">${books[indexBooks].comments[indexBooks].name}</div>
        <div class="comment" id = "comment">${books[indexBooks].comments[indexBooks].comment}</div>
    </div>
    <input id = "commentInput" type="text" placeholder="Schreibe einen Kommentar...">
    <button><img src="./assets/icons/pencilViolet.svg" alt=""></button>
    `;
}
