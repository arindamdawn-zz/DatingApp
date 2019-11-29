import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ValueService {
  constructor(private http: HttpClient) {}
  private readonly API_URL = "http://localhost:5000/api";

  getValues(){
    return this.http.get(this.API_URL + '/values');
  }
}
