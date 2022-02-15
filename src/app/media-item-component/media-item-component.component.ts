import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-component',
  templateUrl: './media-item-component.component.html',
  styleUrls: ['./media-item-component.component.css']
})
export class MediaItemComponentComponent implements OnInit {
  name : string;
  wasWatched: Boolean
  constructor() { 
    this.name = 'Redemption on Wrath'
    this.wasWatched = true;
  }
  watched(): string{
      
    return this.wasWatched ? 'The Movie was watched' : 'The movie wasnt watched';
  }

  ngOnInit(): void {
  }

}
