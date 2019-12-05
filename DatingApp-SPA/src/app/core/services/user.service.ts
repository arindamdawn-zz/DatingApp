import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "src/app/auth/models/User";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private readonly API_ENDPOINT = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_ENDPOINT + "users");
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.API_ENDPOINT + `users/${id}`);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.API_ENDPOINT + `users/${id}`, user);
  }
}
