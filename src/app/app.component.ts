/**
 * @author [small pang]
 * @email [xudengwei.com]
 * @create date 2018-08-08 03:30:57
 * @modify date 2018-08-08 03:30:57
 * @desc [description]
*/


import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    // moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '一个轻量的angular5脚手架demo';
    constructor(){}
    test() {
        console.log('成功了吗');
    }
}

// import { Component } from '@angular/core';
// const appComponnetHtml = require('./app.component.html');
// const appComponnetCss = require('./app.component.css');
// @Component({
//     selector: 'app-root',
//     template: appComponnetHtml,
//     styles: [String(appComponnetCss)]
// })
// export class AppComponent {
//     title = '一个轻量的angular5脚手架demo';
//     constructor(){}
//     test() {
//         console.log('成功了吗');
//     }
// }
