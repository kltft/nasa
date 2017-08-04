import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'nasa',
    templateUrl: './nasa.component.html'
})
export class NasaDataComponent {
    public apod: NasaApod;
 
    constructor(http: Http) {
        http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(result => {
            this.apod = result.json() as NasaApod;
            console.log(result.json());
        });
    }
}

interface NasaApod {
    copyright: string;
    date: Date;
    explanation: string;
    hdurl: URL;
    media_type: string;
    service_version: string;
    title: string;
    url: URL;
}
