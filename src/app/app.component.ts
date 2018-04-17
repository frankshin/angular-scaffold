import { Component } from '@angular/core';
/**
 * files
 */
const appComponnetHtml = require('./app.component.html');
const appComponnetCss = require('./app.component.css');

@Component({
    selector: 'app-root',
    template: appComponnetHtml,
    styles: [String(appComponnetCss)]
})
export class AppComponent {
    title = 'app';
    constructor(){}
    
    test() {
        console.log('成功了吗');
    }
}
