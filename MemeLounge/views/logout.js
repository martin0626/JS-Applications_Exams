import { logout } from "../tools/api.js";
import page from '../node_modules/page/page.mjs'
import { navUpdate } from "../tools/updateNav.js";


export async function logoutF() {
    await logout();
    page.redirect('/home');
    navUpdate()
}