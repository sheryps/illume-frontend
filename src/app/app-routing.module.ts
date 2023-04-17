import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'Super', loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule) }, 
{ path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
{ path: 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'',redirectTo:'/products',pathMatch:'full'},
{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
