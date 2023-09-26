// or
//import {type Peroson , afsfsd} from './types.js'
export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out!`);
    }
}
export function userHelper() {
    console.log('user helper');
}
;
