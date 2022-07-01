import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PageNotFound } from './component/page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavBarComponent, PageNotFound],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: PageNotFound
      }
    ])
  ],
  exports: [NavBarComponent]
})
export class CoreModule {}
