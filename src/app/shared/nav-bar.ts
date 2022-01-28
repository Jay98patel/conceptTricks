import { navBar } from "./models";

export class NavBarList {
    navBar(): navBar[] {
        return [
            {
                id:1,
                path:'products',
                name: 'Products'
            }
        ];
    }
}

export const navBarList = new NavBarList();