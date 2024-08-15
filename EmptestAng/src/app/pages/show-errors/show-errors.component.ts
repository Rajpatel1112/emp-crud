import { Component, Input } from '@angular/core';
import { AbstractControl, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent {

  errorMsgList: any = [];
  
  @Input() controlName:any | AbstractControl | AbstractControlDirective;
  
  errorMessage : any= {
     'required'  : (params:any)  => `This field is required`,
     'maxlength' : (params:any)  => `Maximum ${params.requiredLength} characters are allowed`,
     'minlength' : (params:any)  => `Minimum ${params.requiredLength} characters are required`,
     'pattern'   : (params:any)  => `Invalid format`,
     'min'       : (params:any)  => `Minimum amount should be ₹ ${params.min}`,
     'whitespace': (params:any)  => `White spaces are not allowed`
  };


  listErrors() {
    if (!this.controlName) return [];
    if (this.controlName.errors) {
        this.errorMsgList = [];
        let _leterror=this.controlName.errors;
        Object.keys(this.controlName.errors).map( error => {
            this.controlName.touched || this.controlName.dirty ?
            this.errorMsgList.push(this.errorMessage[error](_leterror[error])) : '';
        });
        return this.errorMsgList;
    }
    else {
        return [];
    }
  }

}
