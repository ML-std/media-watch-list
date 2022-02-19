import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MediaItemServiceService {
  
  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get<MediaItemResponse>('mediaitems').pipe(map(response => {return response.mediaItems}));
  }

  getItem(medium:any){
    const getOptions = {
    params : { medium }
  };
  return this.httpClient.get<MediaItemResponse>('mediaitems', getOptions).pipe(map(response => {return response.mediaItems;
      }), catchError(error => this.handleError(error)));


  }
  add(mediaItem:any){
    return this.httpClient.post('mediaitems',mediaItem);
  }
  delete(mediaItem:any){
    return this.httpClient.delete(`mediaitems/${mediaItem.id}`);
    }
    private handleError(error: any){
       console.log(error.message);
       return throwError(() => error)
    }
  }


  export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
 export interface MediaItemResponse{
  mediaItems: MediaItem[];
}


