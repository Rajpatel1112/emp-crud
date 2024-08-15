import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(
    private http:HttpClient
  ) { }


  SaveEmployee(paramdata:any)
  {
  return this.http.post<any>('https://localhost:7286/api/Emp/saveEmp',paramdata);
  }
  deleteEmployee(paramId:number)
  {
   return this.http.post<any>(`https://localhost:7286/api/Emp/deleteEmp/${paramId}`, paramId );
  }
  GetEmpbyId(paramId:number)
  {
  return this.http.get<any>(`https://localhost:7286/api/Emp/getEmpById/${paramId}`);
  }
  GetEmpList()
  {
  return this.http.get<any>('https://localhost:7286/api/Emp/getEmpList');
  }
}
