import { Routes } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'Home', component:AppComponent},
    {path:'Login', component:LoginComponent},
    {path:' ', redirectTo:'/Home', pathMatch:'full'},
];
