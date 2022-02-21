import { html, render } from '../../node_modules/lit-html/lit-html.js'
import { del, get } from '../Tools/api.js';
import { userData } from '../Tools/user.js';
import page from '../../node_modules/page/page.mjs'


let temp = (song, isOwner) => html `
<section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src="${song.imgUrl}">
    </div>
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${song.name}</h1>
            <h3>Artist: ${song.artist}</h3>
            <h4>Genre: ${song.genre}</h4>
            <h4>Price: $${song.price}</h4>
            <h4>Date: ${song.releaseDate}</h4>
            <p>Description: ${song.description}</p>
        </div>

        <!-- Only for registered user and creator of the album-->
        ${isOwner == true? html`
            <div class="actionBtn">
                <a href="/edit/${song._id}" class="edit">Edit</a>
                <a href="#" class="remove" @click="${delFunc}">Delete</a>
            </div>
        `:''}
        
    </div>
</div>
</section>
`

let id = ''

export async function detailsView(ctx) {
    id = ctx.params.id;
    let songDetails = await get('/data/albums/' + id)
    let isOwner = userData() != null && userData().user_id == songDetails._ownerId;
    render(temp(songDetails, isOwner), document.querySelector('main'));
}

async function delFunc(){
    let isConfirmed = confirm('Are you sure?');

    if(isConfirmed){
        await del('/data/albums/' + id)
        page.redirect('/catalog')
    }
}