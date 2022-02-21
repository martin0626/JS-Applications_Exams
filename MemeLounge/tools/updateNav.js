import { userData } from "./user.js";

export function navUpdate() {

    let nav = document.querySelector('nav');

    if (userData() != null) {
        nav.querySelector('.user').style.display = 'block';
        nav.querySelector('.guest').style.display = 'none';
        document.querySelector('span.user').textContent = `Welcome, ${userData().email}`
    } else {
        nav.querySelector('.user').style.display = 'none';
        nav.querySelector('.guest').style.display = 'block';
    }

}