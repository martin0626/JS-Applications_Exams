import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';
import { editCreate } from '../Tools/editCreate.js';

let temp = (car) => html `
<section id="edit-listing">
<div class="container">

    <form id="edit-form" @submit="${editCreate}">
        <h1 id="${car._id}">Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" value="${car.brand}">

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" value="${car.model}">

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" value="${car.description}">

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" value="${car.year}">

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${car.imageUrl}">

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" value="${car.price}">

        <hr>
        <input type="submit" class="registerbtn" value="Edit Listing">
    </form>
</div>
</section>
`
let id = ''

export async function editView(ctx) {
    id = ctx.params.id;
    let car = await get('/data/cars/' + id);
    render(temp(car), document.querySelector('main'));
}