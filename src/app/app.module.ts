import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatDividerModule, MatSelectModule,
  MatCheckboxModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports:      [ BrowserModule, FormsModule,MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, ProgressBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
