import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ServiceAuthGuardGuard } from './service-auth-guard.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"user-auth",component:UserAuthComponent},
  {path:'exercise-module',component:ExerciseComponent, canActivate:[ServiceAuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
