import { catalogView } from "./Views/catalog.js";
import { createView } from "./Views/create.js";
import { detailsView } from "./Views/details.js";
import { editView } from "./Views/edit.js";
import { homeView } from "./Views/home.js";
import { loginView } from "./Views/login.js";
import { registerView } from "./Views/register.js";
import { searchView } from "./Views/search.js";
import page from "../node_modules/page/page.mjs"
import { navUpdate } from "./Tools/updateNav.js";
import { logoutFunc } from "./Views/logout.js";

page('/', homeView);
page('/home', homeView);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/edit/:id', editView)
page('/create', createView);
page('/catalog', catalogView);
page('/search', searchView);
page('/logout', logoutFunc);



homeView()


page.start();

navUpdate()