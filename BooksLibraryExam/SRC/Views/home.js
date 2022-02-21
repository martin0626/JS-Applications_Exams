import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';


let temp = (data) => html `
<section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            <ul class="other-books-list">
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

export async function homeView() {
    let data = await get('/data/books?sortBy=_createdOn%20desc')
    render(temp(data), document.querySelector('main'));
}