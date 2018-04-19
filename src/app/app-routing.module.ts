import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * components
 */
import { IndexComponent } from './index/index-list/index.component';


const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'index', component: IndexComponent }
];


/**
 *
 * 把 RouterModule 添加到 @NgModule.imports 数组中，并用 routes 来配置它。你只要调用 imports 数组中的 RouterModule.forRoot() 函数就行了
 * orRoot() 包含的注入器配置是全局性的，比如对路由器的配置。forChild() 中没有注入器配置，只有像 RouterOutlet 和 RouterLink 这样的指令
 *
 */
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }


