import { post, put } from "./api.js";
import page from '../node_modules/page/page.mjs'
import { notify } from "./notify.js";

export async function saveChange(event) {
    event.preventDefault();
    let formElem = document.querySelector('form');
    let data = new FormData(formElem);
    let title = data.get('title');
    let description = data.get('description');
    let imageUrl = data.get('imageUrl')

    if (title.trim() != '' && description.trim() != '' && imageUrl.trim() != '') {

        let info = {
            title: title,
            description: description,
            imageUrl: imageUrl
        }

        if (event.target.value == 'Edit Meme') {
            await put(info, '/data/memes/' + event.target.id)
        } else {
            await post(info, '/data/memes')
        }
        page.redirect('/allMemes')

    } else {
        //TODO
        notify('All fields are required!')
    }
}