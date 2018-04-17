/**
 * @author [small pang]
 * @email [xudengwei.com]
 * @create date 2018-04-17 02:30:56
 * @modify date 2018-04-17 02:30:56
 * @desc [description]
*/

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
    title = '一个轻量的angular5脚手架demo';
    constructor(){}
    
    test() {
        console.log('成功了吗');
    }
}
