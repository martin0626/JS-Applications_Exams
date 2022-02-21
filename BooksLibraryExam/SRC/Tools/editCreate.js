import { post, put } from "./api.js";
import page from '../../node_modules/page/page.mjs'

export async function saveChange(event) {
    event.preventDefault();
    let formElem = event.target;

    let data = new FormData(formElem);
    let title = data.get('title');
    let description = data.get('description');
    let imageUrl = data.get('imageUrl');
    let type = data.get('type')
    if (title.trim() != '' && description.trim() != '' && imageUrl.trim() != '' && type.trim() != '') {

        let info = {
            title: title,
            description: description,
            imageUrl: imageUrl,
            type: type
        }

        if (event.target.id == 'create-form') {
            await post(info, '/data/books');
        } else {
            let id = formElem.querySelector('fieldset').id;
            await put(info, '/data/books/' + id);
        }
        page.redirect('/home')

    } else {
        alert('All fields are required!')
    }
}