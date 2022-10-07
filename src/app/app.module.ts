import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {TableModule} from 'primeng/table';
import{ToastModule} from'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { IngredientComponent } from './components/Back-office/ingredient/ingredient.component';
import { RecipeComponent } from './components/Back-office/recipe/recipe.component';
import { RecipeIngredientComponent } from './components/Back-office/recipeIngredient/recipeIngredient.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/Back-office/login/login/login.component';
import { MessageService } from 'primeng/api';
import{ ModalModule, BsModalService} from 'ngx-bootstrap/modal';






@NgModule({
  declarations: [
    AppComponent,
    IngredientComponent,
    LoginComponent,
    RecipeComponent,
    RecipeIngredientComponent,


   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CollapseModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    ModalModule. forRoot(),
    AppRoutingModule
  ],
  providers: [MessageService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MyModel {value: Date;}


