import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'src/app/app.component.html',
    styleUrls: ['src/app/app.component.css']
})
export class AppComponent {
    title = 'app';
    constructor(){}
    
    test() {
        console.log('成功了吗');
    }
}
