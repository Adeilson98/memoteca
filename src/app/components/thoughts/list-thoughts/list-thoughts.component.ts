import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThought: Thought[] = []

  constructor(private service: ThoughtService) { }

  ngOnInit(): void {
    this.service.list().subscribe((listThought) => {
      this.listThought = listThought
    })
  }

}
