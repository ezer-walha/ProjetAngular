
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FakeSessionItemService } from '../fake-session-item.service';


@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {

  @Input() session:any;
  @Output() participantsChange=new EventEmitter<any>();
  constructor(private sessionItemService:FakeSessionItemService) { }
  onDelete(){
    this.sessionItemService.delete(this.session);
  }

  ngOnInit(): void {
  } 
}
