import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HealthComponent } from './health/health.component';
import { SportComponent } from './sport/sport.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Anasayfa', component:HomeComponent},
  {path:'Kategori', component:CategoryComponent},
  {path:'Hakkımda', component:AboutpageComponent},
  {path:'tech', component:TechnewsComponent},
  {path:'sondakika', component:TopheadingComponent},
  {path:'ekonomi', component:BusinessnewsComponent},
  {path:'health', component:HealthComponent},
  {path:'sport', component:SportComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
