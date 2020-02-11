import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 150),
    new Ingredient('Tomatoes', 40),
    new Ingredient('Onion', 40),
    new Ingredient('Ginger', 30),
    new Ingredient('Rice', 150),
    new Ingredient('Oil', 150)
  ];
  constructor() { }

  ngOnInit() {
  }

}
