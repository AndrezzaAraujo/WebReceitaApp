import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from '../models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  controller = `${environment.apiUrl}Recipe`
  constructor(private http:HttpClient) {}

  
getAll():Observable <Recipe[]>{
  return this.http.get<Recipe[]>(this.controller);
}

getById (id:number):Observable<Recipe>{
  return this.http.get<Recipe>(`${this.controller}/${id}`);
}

save(recipe:Recipe){
  return this.http.post(this.controller,recipe)
}

deleteByIngredient(recipe:Recipe){
  return this.http.post(`$(this.controler}/delete`, recipe)
}

}
