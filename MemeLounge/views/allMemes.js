import { html, render } from '../node_modules/lit-html/lit-html.js'
import {get } from '../tools/api.js'
import { details } from './details.js'

let temp = (memes) => html `
<section id="meme-feed">
<h1>All Memes</h1>
<div id="memes">
    <!-- Display : All memes in database ( If any ) -->
    ${memes.length > 0
    ? memes.map(m=> html`
        <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${m.title}</p>
                <img class="meme-image" alt="meme-img" src="${m.imageUrl}">
            </div>
            <div id="data-buttons">
                <a class="button" href="/details/${m._id}">Details</a>
            </div>
        </div>
    </div>
        `)
    :html`<p class="no-memes">No memes in database.</p>`
    }

</div>
</section>
`

export async function allMemesView() {
    let memes = await get('/data/memes?sortBy=_createdOn%20desc')
    render(temp(memes), document.querySelector('main'))
}