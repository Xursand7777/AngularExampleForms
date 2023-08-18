import {Component, OnInit} from "@angular/core";
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-birth-certificate-form',
  styleUrls: ['birth-certificate-form.component.scss'],
  templateUrl: './birth-certificate-form.component.html'
})
export class BirthCertificateFormComponent implements OnInit {

  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = new FormGroup<any>({});
    this.form = this.rootFormGroup.control.get("birthCertificateData") as FormGroup;
  }

  ngOnInit(): void {
    console.log(this.form.value, 'birthCertificateData')
  }
}
