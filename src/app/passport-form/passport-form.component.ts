import {AfterViewInit, Component, OnInit, ViewChild} from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";
import ConvertEnumIntoObject, {CitizenType} from "../intefaces/relativeDTO";
import {BehaviorSubject} from "rxjs";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-passport-search',
  styleUrls: ['./passport-form.component.scss'],
  templateUrl: './passport-form.component.html'
})
export class PassportFormComponent implements OnInit, AfterViewInit {

    form: FormGroup;
    citizenDataForm:FormGroup;
    citizensType: any[] = [];
    citizenType$$:BehaviorSubject<number> = new BehaviorSubject(1);
    @ViewChild('matSelect') matSelect: MatSelect | undefined;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = new FormGroup<any>({});
    this.citizenDataForm = new FormGroup<any>({});
    this.form = this.rootFormGroup.control.get('passportData') as FormGroup;
    this.citizenDataForm = this.rootFormGroup.control.get('citizenData') as FormGroup;
  }
  ngOnInit(): void {
    this.citizensType = ConvertEnumIntoObject(CitizenType);
  }

  onSubmit() {
    console.log(this.form?.value)
  }

  ngAfterViewInit(): void {
    this.matSelect?.valueChange.subscribe((value) => {
      this.citizenType$$.next(value)
    })
  }
}
