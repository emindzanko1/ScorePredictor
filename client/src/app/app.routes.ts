import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { MatchesComponent } from './matches/matches.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'matches', component: MatchesComponent},
    { path: 'matches/:userId', component: MatchesComponent }, 
    { path: 'admin', component: AdminComponent}
];
