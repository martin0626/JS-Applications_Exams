import { navUpdate } from "./Tools/updateNav.js";
import page from '../node_modules/page/page.mjs'
import { homeView } from "./Views/home.js";
import { loginView } from "./Views/login.js";
import { registerView } from "./Views/register.js";
import { createView } from "./Views/create.js";
import { profileView } from "./Views/profile.js";
import { logoutFunc } from "./Views/logout.js";
import { detailsView } from "./Views/details.js";
import { editView } from "./Views/edit.js";

page('/', homeView);
page('/home', homeView);
page('/login', loginView);
page('/register', registerView);
page('/profile', profileView);
page('/create', createView);
page('/logout', logoutFunc);
page('/details/:id', detailsView);
page('/edit/:id', editView)

homeView()
page.start();
navUpdate()