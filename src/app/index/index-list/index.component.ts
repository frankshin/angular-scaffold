import { Component } from '@angular/core'

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

export class IndexComponent {
    //
}