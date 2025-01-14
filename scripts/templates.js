function getBookInfoTemplate(indexBooks) {
  return /*html*/ `
    <div class="bookCard">
        <div class="bookCardHeadline">
            <img src="./assets/img/bookViolet.png" alt="Lila Buch">
            <h2>${books[indexBooks].name}</h2>
        </div>
        <div class="priceAndLikes" id = "priceAndLikes">
            <p>${books[indexBooks].price} €</p>
            <div class="likes">${books[indexBooks].likes} <img id="iconHeartClickAndChange" src="./assets/icons/heart _Icon.svg" alt="Herz"></div>
        </div> 
        <div class = "bookInfos" id="bookInfos">
            <div><h3 class="bookInfo">Autor/in(nen)</h3><p>${books[indexBooks].author}</p></div> 
            <div><h3 class="bookInfo">Erscheinungsjahr</h3><p>${books[indexBooks].publishedYear}</p></div> 
            <div><h3 class="bookInfo">Genre</h3><p>${books[indexBooks].genre}</p></div> 
        </div>
        <div class="bookInfos">
        <h3>Kommentare</h3>
        <div id="comments${indexBooks}"></div>
        <div class="comments">
            <input id = "commentInput" type="text" placeholder="Schreibe einen Kommentar...">
            <button><img src="./assets/icons/pencilViolet.svg" alt=""></button>
        </div>

     </div>
    </div>
`;
}

function getCommentsTemplate(indexBooks, indexComments) {
  return /*html*/ `
        <div>
            <div class="user" id="user">${books[indexBooks].comments[indexComments].name}</div>
            <div class="comment" id = "comment">${books[indexBooks].comments[indexComments].comment}</div>
        </div>
    `;
}
