import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    
  private client: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient) {
    this.client = http;
    this.baseUrl = environment.domain;
   }

   public getAllUser(): Observable<User[]> {
     return this.client.get<User[]>(this.baseUrl + "/user/all");
   }

   public createUser(user: User): Observable<User> {
     return this.client.post(this.baseUrl + "/user", user).pipe(
       map(
         (param_response: HttpResponse<any>) => {
           return param_response.body as User;
         }
       )
     );
   }

   public updateUser(id: number, value: any): Observable<Object> {
     return this.client.put(this.baseUrl+"/user/"+id, value);
   }

   public deleteUser(id: number): Observable<any> {
    return this.client.delete(this.baseUrl+"/user/"+id, { responseType: 'text'});
   }
}
