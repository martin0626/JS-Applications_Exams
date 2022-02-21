import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get } from '../Tools/api.js';


let temp = () => html `
<section id="welcomePage">
            <div id="welcome-message">
                <h1>Welcome to</h1>
                <h1>My Music Application!</h1>
            </div>

            <div class="music-img">
                <img src="./images/musicIcons.webp">
            </div>
        </section>
`


export async function homeView() {
    render(temp(), document.querySelector('main'));
}