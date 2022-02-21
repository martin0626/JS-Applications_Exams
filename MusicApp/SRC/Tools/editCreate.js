import { post, put } from "./api.js";
import page from '../../node_modules/page/page.mjs'


export async function editCreate(event) {
    event.preventDefault();
    let formElem = document.querySelector('form');
    let data = new FormData(formElem);
    let name = data.get('name');
    let artist = data.get('artist');
    let genre = data.get('genre');
    let price = data.get('price');
    let releaseDate = data.get('releaseDate');
    let description = data.get('description');
    let imgUrl = data.get('imgUrl');



    if (description.trim() != '' && imgUrl.trim() != '' && name.trim() != '' && artist.trim() != '' && genre.trim() != '' && price.trim() != '' && releaseDate.trim() != '') {

        let info = {
            name: name,
            imgUrl: imgUrl,
            price: price,
            releaseDate: releaseDate,
            artist: artist,
            genre: genre,
            description: description
        }


        if (document.querySelector('legend').textContent == 'Edit Album') {
            await put(info, '/data/albums/' + event.target.id)
            page.redirect('/details/' + event.target.id)
        } else {
            await post(info, '/data/albums')
            page.redirect('/catalog')
        }


    } else {

        alert('All fields are required!')
    }
}