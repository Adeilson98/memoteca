import { ThoughtService } from './../thought.service';
import { Thought } from './../thought';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent implements OnInit {

  thought: Thought = {
    content: '',
    author: '',
    model: 'model1'
  }

  constructor(private service: ThoughtService, private router: Router) { }

  ngOnInit(): void {
  }

  createThought() {
    this.service.create(this.thought).subscribe(() => {
      this.router.navigate(['/mural'])
    })
  }

  cancelThought() {
    this.router.navigate(['/mural'])
  }

}
