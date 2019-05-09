import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmojiComponent} from "./emoji/emoji.component";

const routes: Routes = [
  {path: '', component: EmojiComponent},
  {path: ':link', component: EmojiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
