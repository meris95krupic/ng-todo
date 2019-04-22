import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:ToDo[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "First Item",
        completed: false
      },
      {
        id: 2,
        title: "Second Item",
        completed: true
      },
      {
        id: 3,
        title: "Third Item",
        completed: false
      }
    ]
  }

}
