import { Component, OnInit } from '@angular/core';
import { MediaItem, MediaItemServiceService } from '../media-item-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-item-list-component',
  templateUrl: './media-item-list-component.component.html',
  styleUrls: ['./media-item-list-component.component.css']
})
export class MediaItemListComponentComponent implements OnInit {
  medium = '';
  mediaItems: MediaItem[];

  constructor( private mediaItemService: MediaItemServiceService, private activatedRoute: ActivatedRoute) { 
    this.mediaItems = [];
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let medium = paramMap.get('medium');
      if(medium!=null){
        if(medium.toLocaleLowerCase() === 'all'){
        medium = '';
        }
      this.getMediaItems(medium);}
    });
  }
  onMediaItemDelete(mediaItem: any) { this.mediaItemService.delete(mediaItem).subscribe(() => {
    this.getMediaItems(this.medium);
  });
  }

  getMediaItems(medium:string){
    this.medium = medium;
    this.mediaItemService.getItem(medium).subscribe(mediaItems => {
      this.mediaItems = mediaItems;
  });
}
}


