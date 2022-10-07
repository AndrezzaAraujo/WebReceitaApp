import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../models/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

controller = `${environment.apiUrl}Ingredient`
constructor(private http:HttpClient) { }

getAll():Observable <Ingredient[]>{
  return this.http.get<Ingredient[]>(this.controller);
}

getById (id:number):Observable<Ingredient>{
  return this.http.get<Ingredient>(`${this.controller}/${id}`);
}

save(ingredient:Ingredient){
  return this.http.post(this.controller,ingredient)
}

deleteByIngredient(ingredient:Ingredient){
  return this.http.post(`$(this.controler}/delete`, ingredient)
}

}
