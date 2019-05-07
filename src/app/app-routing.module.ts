import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmojiComponent} from "./emoji/emoji.component";
import {ChosenComponent} from "./chosen/chosen.component";
import {DeletedComponent} from "./deleted/deleted.component";

const routes: Routes = [
  {path: '', component: EmojiComponent},
  {path: 'chosen', component: ChosenComponent},
  {path: 'deleted', component: DeletedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
