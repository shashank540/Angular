import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.ndtv.com/cooks/images/vegetable.biryani.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.ndtv.com/cooks/images/vegetable.biryani.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
