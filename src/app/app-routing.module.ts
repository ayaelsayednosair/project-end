import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { EditeuserComponent } from './editeuser/editeuser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ListuserComponent } from './listuser/listuser.component';

const routes: Routes = [
  { path: '', component: ListuserComponent },
  { path: 'user/add', component: AdduserComponent },
  { path: 'user/edite/:id', component: EditeuserComponent },
  { path: 'user/view/:id', component: ViewuserComponent },

  { path: '**', component: ListuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
