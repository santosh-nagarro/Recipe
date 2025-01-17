import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { dropDownDirective } from './shared/directives/dropdown.directives';
import { AuthComponent } from './authentication/auth.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HighlightDirective,
    dropDownDirective,
    AuthComponent,
    RecipesStartComponent,
    RecipesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
