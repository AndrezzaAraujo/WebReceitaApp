import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './Utils/auth.guard';
import { LoginComponent } from './components/Back-office/login/login/login.component';
import { IngredientComponent } from './components/Back-office/ingredient/ingredient.component';
import { RecipeComponent } from './components/Back-office/recipe/recipe.component';
import { RecipeIngredientComponent } from './components/Back-office/recipeIngredient/recipeIngredient.component';




const routes: Routes = [
  {path: 'login', canActivate:[AuthGuard], component:LoginComponent},
  {path:'ingredient', canActivate:[AuthGuard], component:IngredientComponent},
  {path:'recipe', canActivate:[AuthGuard], component:RecipeComponent},
  {path:'recipeIngredient', canActivate:[AuthGuard], component:RecipeIngredientComponent},
  {path:'', redirectTo:'ingredient',pathMatch:'full'},
  {path:'**', redirectTo:'ingredient',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
