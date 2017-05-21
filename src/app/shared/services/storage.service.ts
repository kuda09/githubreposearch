import {Injectable} from '@angular/core';
import {User} from "../models/user";

@Injectable()
export class StorageService {

    constructor() {
    }


    clearStorage(key: string) {
        localStorage.removeItem(key);
    }

    addStorage(key: string, items) {
        localStorage.setItem(key, JSON.stringify(items));
    }

    getStorage(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

}
