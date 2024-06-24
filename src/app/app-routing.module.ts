import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages.nav/dashboard/dashboard.component';
import { ProductsComponent } from './pages.nav/products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './pages.nav/coupens/coupens.component';
import { PagesComponent } from './pages.nav/pages/pages.component';
import { MediaComponent } from './pages.nav/media/media.component';
import { SettingsComponent } from './pages.nav/settings/settings.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './pages.nav/account/account.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
// import { FormsComponent } from './pages.nav/forms/forms.component';
import { CardComponent } from './components/card/card.component';
import { ProductDeatailComponent } from './components/product-deatail/product-deatail.component';
import { FormsComponent } from './pages.nav/forms/forms.component';

const routes: Routes = [

  
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'Footer', component: FooterComponent},
  {path: 'account', component: AccountComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'form', component: FormsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'card', component:CardComponent },  
  {path: 'card/productDetail/:id', component: ProductDeatailComponent},
  {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
