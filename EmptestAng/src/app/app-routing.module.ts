import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './pages/emp/emp.component';

const routes: Routes = [
   {path:'emp', component:EmpComponent}
  // {
  //   path:'emp',loadChildren: () => import('./pages/emp/emp.module').then(m => m.EmpModule)
  // },
  //   {
  //     path:'',redirectTo:'emp',pathMatch:'full'
  //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
