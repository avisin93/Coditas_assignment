
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class UserService {
    constructor(private _http: HttpClient) {

    }
    getUserDetails(queryParams) {
        // return this._http.get('https://api.github.com/users', { params: queryParams });
        return this._http.get('https://api.github.com/search/users', { params: queryParams });

    }

}
