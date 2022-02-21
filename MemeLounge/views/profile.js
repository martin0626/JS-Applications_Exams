import { html, render } from '../node_modules/lit-html/lit-html.js'
import {get } from '../tools/api.js'
import { userData } from '../tools/user.js'

let temp = (memes) => html `
<section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${userData().gender}.png">
                <div class="user-content">
                    <p>Username: ${userData().username}</p>
                    <p>Email: ${userData().email}</p>
                    <p>My memes count: ${memes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
               ${memes.length > 0? memes.map(m=>
                html`
                <div class="user-meme">
                    <p class="user-meme-title">${m.title}</p>
                    <img class="userProfileImage" alt="meme-img" src="${m.imageUrl}">
                    <a class="button" href="/details/${m._id}">Details</a>
                </div>
                `)
                :html`<p class="no-memes">No memes in database.</p>`
                }
                
            </div>
        </section>
`

export async function profileView() {
    let myMemes = await get(`/data/memes?where=_ownerId%3D%22${userData().user_id}%22&sortBy=_createdOn%20desc`)
    render(temp(myMemes), document.querySelector('main'))
}