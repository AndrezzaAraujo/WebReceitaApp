import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecipeIngredient } from '../models/RecipeIngredient';

@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientService {

  controller = `${environment.apiUrl}RecipeIngredient`
  constructor(private http:HttpClient) {}

  
getAll():Observable <RecipeIngredient[]>{
  return this.http.get<RecipeIngredient[]>(this.controller);
}

getById (id:number):Observable<RecipeIngredient>{
  return this.http.get<RecipeIngredient>(`${this.controller}/${id}`);
}

save(recipeIngredient:RecipeIngredient){
  return this.http.post(this.controller,recipeIngredient)
}

deleteByIngredient(recipeIngredient:RecipeIngredient){
  return this.http.post(`$(this.controler}/delete`, recipeIngredient)
}

}
