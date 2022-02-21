import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { del, get } from '../Tools/api.js';
import { userData } from '../Tools/user.js';
import page from '../../node_modules/page/page.mjs'


let temp = (car, isOwner) => html `
<section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src="${car.imageUrl}">
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}</li>
                </ul>

                <p class="description-para">${car.description}</p>

                <div class="listings-buttons">
                ${isOwner == false
                    ?''
                    :html`
                    <a href="/edit/${car._id}" class="button-list">Edit</a>
                    <a href="#" class="button-list" @click="${delFunc}">Delete</a>
                    `
                }
                    
                </div>
            </div>
        </section>
`
let id = ''

export async function detailsView(ctx) {
    id = ctx.params.id;
    let car = await get('/data/cars/' + id);
    let isOwner =userData() != null && userData().user_id == car._ownerId;
    render(temp(car, isOwner), document.querySelector('main'));
}

async function delFunc(){
    let f = confirm('Are you sure!');
    if (f){
        await del('/data/cars/' + id);
        page.redirect('/all');
    }
    
}