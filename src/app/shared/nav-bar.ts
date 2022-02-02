import { navBar } from "./models";

export class NavBarList {
    navBar(): navBar[] {
        return [
            {
                id:1,
                path:'products',
                name: 'Products'
            },
            {
                id:2,
                path:'clients',
                name: 'Clients'
            }
        ];
    }
}

export const navBarList = new NavBarList();