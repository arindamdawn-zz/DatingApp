import { Component, OnInit } from "@angular/core";
import { ValueService } from "./value.service";

@Component({
  selector: "app-value",
  templateUrl: "./value.component.html",
  styleUrls: ["./value.component.css"]
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private valueService: ValueService) {}

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.valueService.getValues().subscribe(
      response => (this.values = response),
      error => console.log(error)
    );
  }
}
