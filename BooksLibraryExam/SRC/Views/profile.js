import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';
import { userData } from '../Tools/user.js';


let temp = (data) => html `
<section id="my-books-page" class="my-books">
<h1>My Books</h1>
<!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">

    ${data.length > 0
        ? data.map(book=> 
            html`
            <li class="otherBooks">
                <h3>${book.title}</h3>
                <p>Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <a class="button" href="/details/${book._id}">Details</a>
            </li>
            `)
        :html`<p class="no-books">No books in database!</p>`}   

    </ul>
</section>
`

export async function profileView() {
    let data = await get(`/data/books?where=_ownerId%3D%22${userData().user_id}%22&sortBy=_createdOn%20desc`)
    render(temp(data), document.querySelector('main'));
}