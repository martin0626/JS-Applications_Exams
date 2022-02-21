import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';
import { userData } from '../Tools/user.js';


let temp = (data) => html `
<section id="my-listings">
<h1>My car listings</h1>
<div class="listings">
    ${data.length > 0
        ?data.map(car=> html`
        <div class="listing">
            <div class="preview">
                <img src=${car.imageUrl}>
            </div>
            <h2>${car.brand} ${car.model}</h2>
            <div class="info">
                <div class="data-info">
                    <h3>Year: ${car.year}</h3>
                    <h3>Price: ${car.price} $</h3>
                </div>
                <div class="data-buttons">
                    <a href="/details/${car._id}" class="button-carDetails">Details</a>
                </div>
            </div>
        </div>
        `)
        :html`<p class="no-cars"> You haven't listed any cars yet.</p>`
    }

</div>
</section>
`


export async function myListView() {
    let data  = await get(`/data/cars?where=_ownerId%3D%22${userData().user_id}%22&sortBy=_createdOn%20desc`)
    render(temp(data), document.querySelector('main'));
}