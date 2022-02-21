import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';
import { userData } from '../Tools/user.js';

let temp = () => html `
<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button class="button-list" @click="${searchFunc}">Search</button>
</div>

<h2>Results:</h2>

<!--Show after click Search button-->
<div class="search-result">
</div>
</section>
`
let resultTemp = (data) => html `
    ${data.length > 0
        ?data.map(album=> html`
        <div class="card-box">
            <img src="${album.imgUrl}">
            <div>
                <div class="text-center">
                    <p class="name">Name: ${album.name}</p>
                    <p class="artist">Artist: ${album.artist}</p>
                    <p class="genre">Genre: ${album.genre}</p>
                    <p class="price">Price: $${album.price}</p>
                    <p class="date">Release Date: ${album.releaseDate}</p>
                </div>
                ${userData() != null
                    ?html`
                    <div class="btn-group">
                        <a href="/details/${album._id}" id="details">Details</a>
                    </div>`
                    :''
                }
                
            </div>
        </div>
            `)
        :html`<p class="no-result">No result.</p>`
        }


<!--If there are no matches-->

`

export async function searchView() {
    render(temp(), document.querySelector('main'));
}

async function searchFunc() {
    let input = document.querySelector('#search-input').value;
    if(input.trim() != ''){ 
        let result = await get(`/data/albums?where=name%20LIKE%20%22${input.trim()}%22`);
        let divElem = document.querySelector('.search-result');
        render(resultTemp(result), divElem);
    }else{
        alert('Field is required!')
    }
    
    
    
}