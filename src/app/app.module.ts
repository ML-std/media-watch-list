import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponentComponent } from './media-item-component/media-item-component.component';
import { MediaItemListComponentComponent } from './media-item-list-component/media-item-list-component.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { ReactiveModelMediaItemFormComponent } from './reactive-model-media-item-form/reactive-model-media-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponentComponent,
    MediaItemListComponentComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
    ReactiveModelMediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
