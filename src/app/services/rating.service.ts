import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/Rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  controller = `${environment.apiUrl}Rating`
  constructor(private http:HttpClient) {}

  getAll():Observable <Rating[]>{
    return this.http.get<Rating[]>(this.controller);
  }
  
  getById (id:number):Observable<Rating>{
    return this.http.get<Rating>(`${this.controller}/${id}`);
  }
  
  save(rating:Rating){
    return this.http.post(this.controller,rating)
  }
  
  deleteByRating(rating:Rating){
    return this.http.post(`$(this.controler}/delete`, rating)
  }

}
