import { html, render } from '../node_modules/lit-html/lit-html.js'
import { del, get } from '../tools/api.js';
import { saveChange } from '../tools/saveChange.js';
import { userData } from '../tools/user.js';
import page from '../node_modules/page/page.mjs'

let temp = (data) => html `
<section id="meme-details">
            <h1>Meme Title: ${data.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="${data.imageUrl}">
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                    ${data.description}
                    </p>

                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    ${userData() != null
                        ?userData().user_id == data._ownerId
                        ? html`
                        <a class="button warning" href="/edit/${data._id}">Edit</a>
                        <button class="button danger" @click="${delteElem}">Delete</button>
                        `
                        : '': ''
                    }
                    

                </div>
            </div>
        </section>
`

let id = ''

export async function details(ctx) {
    id = ctx.params.id
    let meme = await get('/data/memes/' + id)
    render(temp(meme), document.querySelector('main'))
}

async function delteElem(){
    await del('/data/memes/' + id)
    page.redirect('/allMemes')
}