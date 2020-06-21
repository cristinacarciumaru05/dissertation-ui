import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({providedIn : 'root'})
export class AppService {
    constructor(private http: HttpClient){
    }
    test() : Observable<String> {
        return this.http.get<String>('localhost:8080/hello-world');
    }
}