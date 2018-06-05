import { Component, OnInit } from '@angular/core'

/**
 * files
 */
const indexComponnetHtml = require('./index.component.html');
const indexComponnetCss = require('./index.component.css');

@Component({
    selector: '',
    template: indexComponnetHtml,
    styles: [String(indexComponnetCss)]
})

export class IndexComponent implements OnInit{
    navs: Array<string> = ['首页', 'angular5', 'react', 'vue', 'webpack', 'nodejs'];

    ngOnInit() {
        console.log('执行了');
    }
    /**
     * 
     * 测试mouse hover的监听
     */
    test() {
        console.error('dfdsfdsf');
    }
}