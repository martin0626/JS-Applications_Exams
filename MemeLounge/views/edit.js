import { html, render } from '../node_modules/lit-html/lit-html.js'
import {get } from '../tools/api.js';
import { saveChange } from '../tools/saveChange.js';



let temp = (data) => html `
<section id="edit-meme">
            <form id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" value="${data.title}">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" >${data.description}</textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value="${data.imageUrl}">
                    <input type="submit" class="registerbtn button" @click="${saveChange}" id="${data._id}" value="Edit Meme">
                </div>
            </form>
        </section>

`

export async function edit(ctx) {
    let id = ctx.params.id;
    let meme = await get('/data/memes/' + id)
    render(temp(meme), document.querySelector('main'))
}