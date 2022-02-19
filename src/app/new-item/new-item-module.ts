import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { newItemRouting } from "./new-item.routing";
import { ReactiveModelMediaItemFormComponent } from "./reactive-model-media-item-form/reactive-model-media-item-form.component";

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      newItemRouting,
      FormsModule
    ],
    declarations: [
      ReactiveModelMediaItemFormComponent
    ]
  })
  export class NewItemModule {}
