import { Component, OnInit } from '@angular/core';
import { EmpService } from './emp.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  public _objEmpList:any[]=[];
  gridApiActive : any;

  signform: FormGroup = new FormGroup({
    Id:new FormControl(0),
    Name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(50)]),
    Address: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(200)]),
    MobileNo: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern(/^[1-9]\d*$/)]),
    Emailid: new FormControl('', [Validators.required, Validators.pattern('^([0-9a-zA-Z]([-\\.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$')]),
    
  });

  // private _router: Router
  constructor(private _empservice: EmpService,
             )
              {this.emplist();};
  
   ngOnInit(): void {
   }

   onSubmit(){
    // console.log(this.signform)
    this._empservice.SaveEmployee(this.signform.value)
    .subscribe(res => {
      if(res > 0)
      {
        window.location.reload();
      }
      else{
          //this.toastr.warning(res.Message); 
      }
    },
    );
  }

emplist()
{
  this._empservice.GetEmpList().subscribe({
    next : (res: any) => {
      this._objEmpList=res;
      //console.log(this._objEmpList);
    },
    error: (e) => { alert(e.message);  },
    complete: () =>{},
  })
}
Edit(paramid: number=0) {
  this._empservice.GetEmpbyId(paramid).subscribe({
    next : (res: any) => {
      this.signform.patchValue({
        Id:res.id,
        Name: res.name,
        Address: res.address,
        MobileNo: res.mobileNo,
        Emailid: res.emailid,
      });
    },
    error: (e) => { alert(e.message);  },
    complete: () =>{},
  })
}
DeleteData(paramId:number)
{
  if(confirm("you want delete this record ?"))
  {
    this._empservice.deleteEmployee(paramId).subscribe({
      next : (res: any) => {
        if(res == true)
        {
          this.emplist();
        }
      },
      error: (e) => { alert(e.message);  },
      complete: () =>{},
    })
  }
}
 get f(){
    return this.signform.controls;
 }
}
