import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserForRegister } from "./models/userForRegister";
import { UserForLogin } from "./models/userForLogin";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private readonly API_ENDPOINT = "http://localhost:5000/api/auth/";
  constructor(private http: HttpClient) {}

  registerUser(user: UserForRegister) {
    return this.http.post(`${this.API_ENDPOINT}register`, user);
  }

  loginUser(user: UserForLogin) {
    return this.http.post(`${this.API_ENDPOINT}login`, user).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
        }
      })
    );
  }
}
