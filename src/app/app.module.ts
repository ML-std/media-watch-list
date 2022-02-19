import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MediaItemComponentComponent } from './media-item-component/media-item-component.component';
import { MediaItemListComponentComponent } from './media-item-list-component/media-item-list-component.component';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http'
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';


import { lookupLists, lookupListToken } from './providers';
import { MockXHRBackend } from './mock-xhr-backend';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponentComponent,
    MediaItemListComponentComponent,
    FavoriteDirective,
    CategoryListPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
    
    
    
  ],
  providers: [{provide: lookupListToken, useValue: lookupLists}, {provide: HttpXhrBackend, useClass: MockXHRBackend  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
