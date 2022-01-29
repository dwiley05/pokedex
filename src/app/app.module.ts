import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SearchInputComponent } from './search-input/search-input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { LoadingService } from './loading/loading.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    SearchInputComponent,
    HomeComponent,
    PokemonCardComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  providers: [LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
