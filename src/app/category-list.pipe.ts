import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(mediaItems: any, ...args: unknown[]): unknown {
    const categories:any = [];
    mediaItems.forEach((mediaItem:any) => {
      if (categories.indexOf(mediaItem.category) <= -1) {
      categories.push(mediaItem.category);
      }
    });
    return categories.join(', ');


  }

}
