import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
    selector: 'nasa',
    templateUrl: './nasa.component.html'
})


export class NasaDataComponent implements OnInit {
    public apod: NasaApod;
    public url: SafeResourceUrl;
    public urlStr: string;

    constructor(http: Http, public sanitizer: DomSanitizer) {
        http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(result => {
            this.apod = result.json() as NasaApod;
            console.log(result.json());
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.apod.url.toString());
            console.log(this.url);
            this.urlStr = this.url.toString();
            console.log(this.urlStr);
            //TODO this still needs some work
        });
    }
    ngOnInit(): void {
        
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
