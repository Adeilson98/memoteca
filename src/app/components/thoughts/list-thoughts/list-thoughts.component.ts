import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  listThought = [
    {
      content: 'Teste',
      author: 'Adeilson Silva',
      model: 'modelo3'
    },
    {
      content: 'Teste2',
      author: 'Adeilson Silva',
      model: 'modelo1'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
