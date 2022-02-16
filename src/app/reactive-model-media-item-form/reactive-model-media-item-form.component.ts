import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { MediaItemServiceService } from '../media-item-service.service';
import { lookupListToken } from '../providers';

@Component({
  selector: 'app-reactive-model-media-item-form',
  templateUrl: './reactive-model-media-item-form.component.html',
  styleUrls: ['./reactive-model-media-item-form.component.css']
})
export class ReactiveModelMediaItemFormComponent implements OnInit {
  form: any;
  constructor( private formBuilder: FormBuilder, private mediaItemService: MediaItemServiceService, @Inject(lookupListToken) public lookuplists:any ) { 

  }
  onSubmit(formValue:any){
    this.mediaItemService.add(formValue);
  } 
  ngOnInit(): void {
   this.form = this.formBuilder.group({
     medium: this.formBuilder.control('Movies'),
     name: this.formBuilder.control('', Validators.compose([       Validators.required,
     Validators.pattern('[\\w\\-\\s\\/]+')
     ]
     )),
     category: this.formBuilder.control(''),
     year:this.formBuilder.control('')
   });

  }
  //doesnt work for now due to uploads
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: true };
    }
  }
}
