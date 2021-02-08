import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concat, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    series1$ = of('a', 'b');

    series2$ = of('x', 'y');

    constructor(private http: HttpClient) {

    }
    ngOnInit() {




    }

    testObser() {
        const result$ = concat(this.series1$, this.series2$);
        result$.subscribe(console.log);
        console.log('testObser::{}', result$);

        //*** */
        const baseUrl = `${environment.apiUrl}/users`;

        const httpCall$: Observable<any> = this.http.get(baseUrl);

        httpCall$.pipe(
            // tap(() => console.log('HTTP request executed')),
            map(res => {
                console.log("result=", res);
                Object.values(res)
            })
        ).subscribe(
            users => console.log("users =", users)
        );


    }

}