import {Component, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-citizen-form',
  templateUrl: './citizen-form.component.html',
  styleUrls: ['./citizen-form.component.scss']
})
export class CitizenFormComponent implements OnInit {
   @Input() citizenForm!:FormGroup;
  constructor() {}

  ngOnInit(): void {
    console.log(this.citizenForm, 'citizenForm comp')
  }
}
