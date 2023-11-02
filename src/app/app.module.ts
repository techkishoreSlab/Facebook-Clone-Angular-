import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacebookhomepageComponent } from './facebookhomepage/facebookhomepage.component';
import { FbHeaderpageComponent } from './facebookhomepage/fb-headerpage/fb-headerpage.component';
import { FbMainpageComponent } from './facebookhomepage/fb-mainpage/fb-mainpage.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    FacebookhomepageComponent,
    FbHeaderpageComponent,
    FbMainpageComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
