import { LifeCycleComponent } from './ciclo/life-cycle.component';
import { OutputPropertyComponent } from './output-property.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { InputPropertyComponent} from './input.property.component';

@NgModule({
  declarations: [
    AppComponent,
    InputPropertyComponent,
    OutputPropertyComponent, 
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})
export class AppModule { }
