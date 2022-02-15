import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-model-media-item-form',
  templateUrl: './reactive-model-media-item-form.component.html',
  styleUrls: ['./reactive-model-media-item-form.component.css']
})
export class ReactiveModelMediaItemFormComponent implements OnInit {
  form: any;
  constructor() { }
  onSubmit(formValue:any){

  }
  ngOnInit(): void {
   this.form = new FormGroup({
     medium: new FormControl('Movies'),
     name: new FormControl(''),
     category: new FormControl(''),
     year: new FormControl('')
   });
  }

}
