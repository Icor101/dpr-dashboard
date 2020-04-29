import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'dpr-dashboard';

    myStyle: object = {};
    myParams: object = {};
    width = 100;
    height = 100;

    ngOnInit() {
        this.myStyle = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            'z-index': -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 200,
                },
                color: {
                    value: '#000000'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 100,
                    color: '#000000',
                    opacity: 0.4,
                    width: 1
                }
            }
        };
    }
}
