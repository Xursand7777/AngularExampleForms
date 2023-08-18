import {Component, Input, OnInit} from "@angular/core";
import {RelativeDTO} from "../intefaces/relativeDTO";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {F} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-relative-form',
  styleUrls: ['./app-relative-form.component.scss'],
  templateUrl: './app-relative-form.component.html'
})
export class AppRelativeFormComponent implements OnInit {
  isPassportSearch: boolean = false;
  isBirthCertificateSearch: boolean = false;
  parentForm: FormGroup;

  @Input() selectedRowData: RelativeDTO | null = null;
  constructor(public fb:FormBuilder) {
    this.parentForm = this.fb.group({
      passportData: this.fb.group({
        passportSerial: new FormControl('', [Validators.required]),
        passportNumber: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required])
      }),
      birthCertificateData: this.fb.group({
        birthSerialNumber: new FormControl('', [Validators.required]),
        birthCode: new FormControl('', [Validators.required])
      }),
      citizenData: this.fb.group({
          surname: new FormControl('', [Validators.required]),
          name: new FormControl('', [Validators.required]),
          patronymic: new FormControl('', [Validators.required]),
          passportSeria: new FormControl('', [Validators.required]),
          passportNumber: new FormControl('', [Validators.required]),
          birthDate: new FormControl('', [Validators.required]),
          placeBirth: new FormControl('', [Validators.required]),
          companyName: new FormControl('', [Validators.required]),
          position: new FormControl('', [Validators.required]),
          countryBirthId: new FormControl('', [Validators.required]),
          districtBirthId: new FormControl('', [Validators.required]),
          address: new FormControl('', [Validators.required])
      })
    })
  }



  searchGPC() {
    this.isPassportSearch = true;
  }

  searchBirthCertificate() {
    this.isBirthCertificateSearch = true
  }

  ngOnInit(): void {

  }
}
