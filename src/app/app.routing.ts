import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaItemListComponentComponent } from './media-item-list-component/media-item-list-component.component';

const appRoutes: Routes = [
  {path:'add', loadChildren: () => import('./new-item/new-item-module').then(m => m.NewItemModule)},
  {path: ':medium', component: MediaItemListComponentComponent },
  {path: '', redirectTo:'all',pathMatch:'full'}
];


export const routing = RouterModule.forRoot(appRoutes);

