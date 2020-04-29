import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { SummaryComponent } from './summary/summary.component'
import { FormComponent } from './form/form.component';


const routes: Routes = [{ path: 'dashboard', component: DashboardComponent },
{ path: 'summary', component: SummaryComponent },
{ path: 'form', component: FormComponent },
{ path: '', redirectTo: 'form', pathMatch: 'full' },
{ path: '**', redirectTo: 'form', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
