function getBookInfoTemplate(indexBooks) {
  return /*html*/ `
    <div class="book_card">
        <div class="book_card_headline">
            <img src="./assets/img/bookViolet.png" alt="Lila Buch">
            <h2>${books[indexBooks].name}</h2>
        </div>
        <div class="price_and_likes">
            <p>${books[indexBooks].price.toFixed(2)} €</p>
            <div class="likes">${books[indexBooks].likes} <div class="heart_icon"><img onclick="changeHeartIcon(${indexBooks})" id="icon_heart_click_and_change${indexBooks}" src="./assets/icons/heartIconDislike.svg" alt="Herz"></div></div>
        </div> 
        <div class = "book_infos">
            <div class="book_info"><p>Autor/in(nen)</p><h3>${books[indexBooks].author}</h3></div> 
            <div class="book_info"><p>Erscheinungsjahr</p><h3>${books[indexBooks].publishedYear}</h3></div> 
            <div class="book_info"><p>Genre</p><h3>${books[indexBooks].genre}</h3></div> 
        </div>
        <div class="comments_container_outer">
        <h3>Kommentare</h3>
        <div class = "comments_container" id="comments${indexBooks}"></div>
        <div class="comments_input_container">
            <input class="comment_input" id = "commentInput${indexBooks}" type="text" placeholder="Schreibe einen Kommentar...">
            <button onclick="addNewComment(id)" id="${indexBooks}"><img src="./assets/icons/pencilViolet.svg" alt=""></button>
        </div>

     </div>
    </div>
`;
}

function getCommentsTemplate(indexBooks, indexComments) {
  return /*html*/ `
    <div class= "comments">
        <div class="user" id="user"><svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16"><path fill="currentColor" d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3"/><path fill="currentColor" fill-rule="evenodd" d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75" clip-rule="evenodd"/></svg> ${books[indexBooks].comments[indexComments].name}</div>
        <div class="comment" id = "comment">${books[indexBooks].comments[indexComments].comment}</div>
    </div>
    `;
}
