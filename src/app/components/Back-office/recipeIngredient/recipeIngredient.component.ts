import { Component, OnInit } from '@angular/core';
import { RecipeIngredient } from 'src/app/models/RecipeIngredient';
import { RecipeIngredientService } from 'src/app/services/recipeIngredient.service';


@Component({
  selector: 'app-recipeIngredient',
  templateUrl: './recipeIngredient.component.html',
  styleUrls: ['./recipeIngredient.component.css']
})
export class RecipeIngredientComponent implements OnInit {

  recipeIngredients:RecipeIngredient[];
  constructor(private recipeIngredientService:RecipeIngredientService) { }

  ngOnInit() {
    this.getRecipeIngredients();
  }

  getRecipeIngredients(){
    this.recipeIngredientService.getAll().subscribe(response=>{
      this.recipeIngredients= response;
      console.log(this.recipeIngredients);

    });
  }

}
