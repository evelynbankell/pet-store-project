import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpsApiService {

    constructor(
        private httpClient: HttpClient,
    ) {}

    public loadAPI(status: string): Promise<any> {
        return new Promise((resolve) => { 
            this.httpClient.get<any>('https://petstore.swagger.io/v2/pet/findByStatus?status=' + status)
            .toPromise().then(resp => {
                resolve(resp);
            })
        });
    }
}
