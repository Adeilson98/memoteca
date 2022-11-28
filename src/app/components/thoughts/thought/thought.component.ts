import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought = {
    content: 'Sei lá, to nem ai',
    author: 'Adeilson Silva',
    model: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
