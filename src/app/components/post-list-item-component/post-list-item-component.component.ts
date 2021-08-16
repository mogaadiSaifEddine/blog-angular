import { Component, OnInit ,Input , EventEmitter ,Output} from '@angular/core';


@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() title:string=''
  @Input () created_at : Date = new Date()
  @Input () loveIts : number = 0
  @Input() contenu : string =''

  constructor() { }

  ngOnInit(): void {
  }
  loveit(): number{
   this.loveIts++
   
    console.log(this.loveIts);
    return this.loveIts

  }
  dislikeit(){
    this.loveIts--
    console.log(this.loveIts);
    return this.loveIts
  }

}
