import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { del, get, post } from '../Tools/api.js';
import { userData } from '../Tools/user.js';
import page from "../../node_modules/page/page.mjs"


let temp = (book, isOwner, likes, isLiked) => html `
<section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                    ${isOwner
                        ? html`
                        <a class="button" href="/edit/${book._id}">Edit</a>
                        <a class="button" href="#" @click="${delElem}">Delete</a>
                        `
                        :''
                    }
                    
                    

                    <!-- Bonus -->
                    ${isOwner == false && userData() != null && isLiked == false 
                        ?html`<a class="button" href="#" @click="${like}">Like</a>`
                        :''
                    }

                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`
let id = ''

export async function detailsView(ctx) {
    
    id = ctx.params.id;
    let userLike = userData() != null? await get(`/data/likes?where=bookId%3D%22${id}%22%20and%20_ownerId%3D%22${userData().user_id}%22&count`): true;
    let isLiked = userLike > 0;
    let book = await get('/data/books/' + id)
    let allLikes = await get(`/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`)
    let isOwner = userData() != null && userData().user_id == book._ownerId
    render(temp(book, isOwner, allLikes, isLiked), document.querySelector('main'));
}


async function delElem(){
    var r = confirm("Are you sure!");
    if (r == true){
        await del('/data/books/' + id);
        page.redirect('/home');
    }
}

async function like(){
    await post({bookId: id}, '/data/likes');
    // page.redirect('/details/id')
}