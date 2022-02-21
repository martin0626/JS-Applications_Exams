import { html, render } from '../node_modules/lit-html/lit-html.js'
import { saveChange } from '../tools/saveChange.js'

let temp = () => html `
<section id="create-meme">
            <form id="create-form">
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" @click="${saveChange}" value="Create Meme">
                </div>
            </form>
        </section>
`


export function createView() {
    render(temp(), document.querySelector('main'))
}