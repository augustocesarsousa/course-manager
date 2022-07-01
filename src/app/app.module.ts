import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';
import { PageNotFound } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, PageNotFound],
  imports: [
    BrowserModule,
    CourseModule,
    HttpClientModule,
    CoreModule,
    RouterModule.forRoot([
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
