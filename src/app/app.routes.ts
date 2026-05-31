import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { HomePage } from './market/home-page/home-page';
import { ProductsPage } from './market/products-page/products-page';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'products', component: ProductsPage }
];

@NgModule({  
  imports: [RouterModule.forRoot(routes, { useHash: true })],  
  exports: [RouterModule]  
})  
export class AppRoutingModule {}
