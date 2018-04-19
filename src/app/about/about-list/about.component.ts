import { Component } from '@angular/core'

/**
 * files
 */
const aboutComponnetHtml = require('./about.component.html');
const aboutComponnetCss = require('./about.component.css');

@Component({
    selector: '',
    template: aboutComponnetHtml,
    styles: [String(aboutComponnetCss)]
})

export class AboutComponent {
    //
}