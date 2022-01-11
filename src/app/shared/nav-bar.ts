import { navBar } from "./models";

export class NavBarList {
    navBar(): navBar[] {
        return [
            {
                id:1,
                path:'basicConcepts',
                name: 'Basic Concept'
            }
        ];
    }
}

export const navBarList = new NavBarList();