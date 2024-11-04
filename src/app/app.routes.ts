import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {UserComponent} from './user/user.component';
import {ReportsComponent} from './reports/reports.component';
import {PostApprovalPendingComponent} from './post-approval-pending/post-approval-pending.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'admin-users', component: UserComponent },
  { path: 'admin-reports', component: ReportsComponent },
  { path: 'pending-approval-post', component: PostApprovalPendingComponent }
];
