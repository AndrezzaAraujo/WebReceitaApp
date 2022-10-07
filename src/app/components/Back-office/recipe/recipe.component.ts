import { Component, OnInit, TemplateRef } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes:Recipe[];
  modalRef: BsModalRef;

  form= new FormGroup({
    id: new FormControl(0),
    name: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    difficulty: new FormControl(),
    time: new FormControl()

  });
  recipe: Recipe;
  modal: any;

  constructor(private recipeService:RecipeService, private modalService:BsModalService) { }

  ngOnInit() {
    this.getRecipes();
  }

  openModel(template:TemplateRef<any>){
    this.modalRef= this.modalService.show(template,{ class: 'modal-lg'});
  }


  getRecipes(){
    this.recipeService.getAll().subscribe(response=>{
      this.recipes= response;
      console.log(this.recipes);

    });
  }

  submit(){
    this.recipes=this.form.value;
    this.recipeService.save(this.recipe).subscribe((response: Recipe)=>{
      this.recipes.push(response);
      this.modal.hide();

    });
  }

}
