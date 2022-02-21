import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';
import { editCreate } from '../Tools/editCreate.js';

let temp = (song) => html `
<section class="editPage">
            <form id="${song._id}" @submit="${editCreate}">
                <fieldset>
                    <legend>Edit Album</legend>

                    <div class="container">
                        <label for="name" class="vhide">Album name</label>
                        <input id="name" name="name" class="name" type="text" value="${song.name}">

                        <label for="imgUrl" class="vhide">Image Url</label>
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value="${song.imgUrl}">

                        <label for="price" class="vhide">Price</label>
                        <input id="price" name="price" class="price" type="text" value="${song.price}">

                        <label for="releaseDate" class="vhide">Release date</label>
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value="${song.releaseDate}">

                        <label for="artist" class="vhide">Artist</label>
                        <input id="artist" name="artist" class="artist" type="text" value="${song.artist}">

                        <label for="genre" class="vhide">Genre</label>
                        <input id="genre" name="genre" class="genre" type="text" value="${song.genre}">

                        <label for="description" class="vhide">Description</label>
                        <textarea name="description" class="description" rows="10" cols="10">${song.description}</textarea>

                        <button class="edit-album" type="submit">Edit Album</button>
                    </div>
                </fieldset>
            </form>
        </section>
`


export async function editView(ctx) {
    let id = ctx.params.id;
    let song = await get('/data/albums/' + id)
    render(temp(song), document.querySelector('main'));
}