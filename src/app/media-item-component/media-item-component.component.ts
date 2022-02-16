import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-media-item-component',
  templateUrl: './media-item-component.component.html',
  styleUrls: ['./media-item-component.component.css']
})
export class MediaItemComponentComponent implements OnInit {
  @Input() mediaItem:any;
  @Output() delete;

  constructor() { 
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onDelete():void{
    this.delete.emit(this.mediaItem);
  }

}
