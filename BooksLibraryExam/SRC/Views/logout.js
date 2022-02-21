import { logout } from "../Tools/api.js";
import page from "../../node_modules/page/page.mjs"
import { navUpdate } from "../Tools/updateNav.js";


export async function logoutFunc() {
    await logout();
    page.redirect('/home');
    navUpdate();
}