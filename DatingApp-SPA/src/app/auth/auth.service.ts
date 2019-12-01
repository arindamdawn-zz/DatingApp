import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserForRegister } from "./models/userForRegister";
import { UserForLogin } from "./models/userForLogin";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private readonly API_ENDPOINT = "http://localhost:5000/api/auth/";
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  username: string;

  constructor(private http: HttpClient) {}

  register(user: UserForRegister) {
    return this.http.post(`${this.API_ENDPOINT}register`, user);
  }

  login(user: UserForLogin) {
    return this.http.post(`${this.API_ENDPOINT}login`, user).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.username = this.decodedToken.unique_name;
        }
      })
    );
  }

  loggedIn(): boolean {
    const token = localStorage.getItem("token");
    this.decodedToken = this.jwtHelper.decodeToken(token);
    if (!token) return false;
    return !this.jwtHelper.isTokenExpired(token);
  }

  get token(): any{
    return this.decodedToken;
  }
}
