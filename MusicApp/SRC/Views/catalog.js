import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';
import { userData } from '../Tools/user.js';

let temp = (data) => html `
<section id="catalogPage">
            <h1>All Albums</h1>
            ${data.length > 0
                ?data.map(song=> html`
                <div class="card-box">
                    <img src="${song.imgUrl}">
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${song.name}</p>
                            <p class="artist">Artist: ${song.artist}</p>
                            <p class="genre">Genre: ${song.genre}</p>
                            <p class="price">Price: $${song.price}</p>
                            <p class="date">Release Date: ${song.releaseDate}</p>
                        </div>
                        <div class="btn-group">
                        ${userData() != null? html`<a href="/details/${song._id}" id="details">Details</a>`: ''} 
                        </div>
                    </div>
                </div>
                `)
                :html`<p>No Albums in Catalog!</p>`
            }           
        </section>

`


export async function catalogView() {
    let data = await get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
    render(temp(data), document.querySelector('main'));
}