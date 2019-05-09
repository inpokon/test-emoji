import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {EmojiService} from "./service/emoji.service";
import { EmojiComponent } from './emoji/emoji.component';
import { SideBarComponent } from './common/side-bar/side-bar.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { EmojiFilterPipe } from './emoji-filter.pipe';
import {FormsModule} from "@angular/forms";
import {Ng2OrderModule} from "ng2-order-pipe";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmojiComponent,
    SideBarComponent,
    EmojiFilterPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        FormsModule,
        Ng2OrderModule,
        NgxPaginationModule
    ],
  providers: [EmojiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
