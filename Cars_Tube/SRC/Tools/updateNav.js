import { userData } from "./user.js";

export function navUpdate() {

    let nav = document.querySelector('header > nav');

    if (userData() != null) {
        document.querySelector('#profile').style.display = 'block';
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#profile > a').textContent = `Welcome ${userData().username}`
    } else {
        nav.querySelector('#profile').style.display = 'none';
        nav.querySelector('#guest').style.display = 'block';
    }

}