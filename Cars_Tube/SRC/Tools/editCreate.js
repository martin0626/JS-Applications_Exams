import { post, put } from "./api.js";
import page from '../../node_modules/page/page.mjs'


export async function editCreate(event) {
    event.preventDefault();
    let formElem = document.querySelector('form');
    let data = new FormData(formElem);
    let model = data.get('model');
    let brand = data.get('brand');
    let description = data.get('description');
    let year = parseInt(data.get('year'));
    let price = parseInt(data.get('price'));
    let imageUrl = data.get('imageUrl');

    if (brand.trim() != '' && price > 0 && year > 0 && model.trim() != '' && description.trim() != '' && imageUrl.trim() != '') {

        let info = {
            model: model,
            brand: brand,
            year: year,
            price: price,
            description: description,
            imageUrl: imageUrl
        }

        //To Implemnt
        if (event.target.id == 'edit-form') {
            let id = event.target.querySelector('h1').id;
            await put(info, '/data/cars/' + id);
        } else {
            await post(info, '/data/cars')
        }
        page.redirect('/all')

    } else {
        alert('All fields are required!')
    }
}