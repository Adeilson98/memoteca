import { Thought } from './../thought';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    content: 'Sei lá, to nem ai',
    author: 'Adeilson Silva',
    model: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if(this.thought.content.length >= 256) {
      return 'thought-g'
    }
    return 'thought-p'
  }

}
