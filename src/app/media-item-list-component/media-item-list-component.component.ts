import { Component, OnInit } from '@angular/core';
import { MediaItemServiceService } from '../media-item-service.service';

@Component({
  selector: 'app-media-item-list-component',
  templateUrl: './media-item-list-component.component.html',
  styleUrls: ['./media-item-list-component.component.css']
})
export class MediaItemListComponentComponent implements OnInit {
  mediaItems: any[];

  onMediaItemDelete(mediaItem: any) { this.mediaItemService.delete(mediaItem);
  }

  constructor( private mediaItemService: MediaItemServiceService) { 
    this.mediaItems = [];
  }

  ngOnInit(): void {
    this.mediaItems = this.mediaItemService.get();
  }


}
