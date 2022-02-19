import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl,   Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MediaItemServiceService } from 'src/app/media-item-service.service';
import { lookupListToken } from 'src/app/providers'; 

@Component({
  selector: 'app-reactive-model-media-item-form',
  templateUrl: './reactive-model-media-item-form.component.html',
  styleUrls: ['./reactive-model-media-item-form.component.css']
})
export class ReactiveModelMediaItemFormComponent implements OnInit {
  form: any;
  constructor( private formBuilder: FormBuilder, private mediaItemService: MediaItemServiceService, @Inject(lookupListToken) public lookuplists:any , private router: Router) { 

  }
  onSubmit(mediaItem:any){
     this.mediaItemService.add(mediaItem).subscribe(() => {
       this.router.navigate(['/',mediaItem.medium]);
     });
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
