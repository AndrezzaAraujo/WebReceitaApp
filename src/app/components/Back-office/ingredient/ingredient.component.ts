import { Component, OnInit, TemplateRef } from '@angular/core';
import { Ingredient } from 'src/app/models/Ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  ingredients:Ingredient[];
  modalRef: BsModalRef;

  form= new FormGroup({
    id: new FormControl(0),
    name: new FormControl(),
    description: new FormControl(),
  });

  ingredient: Ingredient;
  modal: any;

  constructor(private ingredientService:IngredientService, private modalService:BsModalService) { }

  ngOnInit() {
    this.getIngredients();
  }

  openModel(template:TemplateRef<any>){
    this.modalRef= this.modalService.show(template,{ class: 'modal-lg'});
  }

  getIngredients(){
    this.ingredientService.getAll().subscribe(response=>{
      this.ingredients= response;
      console.log(this.ingredients);

    });
  }

  submit(){
    this.ingredients=this.form.value;
    this.ingredientService.save(this.ingredient).subscribe((response: Ingredient)=>{
      this.ingredients.push(response);
      this.modal.hide();

    });
  }

}
