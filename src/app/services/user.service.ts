import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { UserPublic } from '../models/UserPublic';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  controller = `${environment.apiUrl}User`
  constructor(private http:HttpClient) {}

  
getAll():Observable <UserPublic[]>{
  return this.http.get<UserPublic[]>(this.controller);
}

login (user: User){
  return this.http.post<UserPublic>(`${this.controller}/login`,user);
}

register(user:User){
  return this.http.post(`${this.controller}/register`,user)
}

changePassword(user:User){
  return this.http.post(`${this.controller}/changepassword`, user)
}

blockUser(id:number){
  return this.http.post(`${this.controller}/blockuser`,id)
}

}
