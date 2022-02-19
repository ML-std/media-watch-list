import { Routes, RouterModule } from "@angular/router";
import { ReactiveModelMediaItemFormComponent } from "./reactive-model-media-item-form/reactive-model-media-item-form.component";

const newItemRoutes: Routes = [
    {path: '', component: ReactiveModelMediaItemFormComponent}
];
export const newItemRouting =  RouterModule.forChild(newItemRoutes);