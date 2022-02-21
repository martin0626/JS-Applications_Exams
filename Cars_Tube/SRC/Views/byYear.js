import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';


let temp = (data) => html `
<section id="search-cars">
<h1>Filter by year</h1>

<div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
    <button class="button-list" @click="${searchFunc}">Search</button>
</div>

<h2>Results:</h2>
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
        :html`<p class="no-cars"> No results.</p>`
    }
</div>
</section>
`


export async function searchView() {
    render(temp([]), document.querySelector('main'));
}
async function searchFunc(event){
    event.preventDefault();
    let input = document.getElementById('search-input').value;
    let data = await get('/data/cars?where=year%3D' + input.trim());
    render(temp(data), document.querySelector('main'));
}