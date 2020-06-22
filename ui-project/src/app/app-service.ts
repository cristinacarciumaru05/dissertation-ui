import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Results } from './dto/Results';
import { Input } from './dto/Input';

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private http: HttpClient) {}
    test(input: Input): Observable<Results> {
        return this.http.get<Results>('localhost:8080/test');
        // let mockResult = new Results();
        // mockResult.type ="type of publication"
        // mockResult.cnatdcu ="cnatdcu"
        // mockResult.isWOS = false;
        // mockResult.WOS ="WOS code"
        // mockResult.INFO ="info code"
        // mockResult.isINFO =true;
        // return of(mockResult);
    }
}