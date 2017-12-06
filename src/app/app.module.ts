import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ItemsModule} from './items/items.module'
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {DataService} from './items/data.service'
import {DataStreamService} from './items/data-stream.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,ItemsModule,HttpClientModule
  ],
  providers: [DataService,DataStreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
