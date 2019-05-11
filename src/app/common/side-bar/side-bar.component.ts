import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  links: Array<any> = [
    {name: "Избранные", link: 'chosen'},
    {name: "Удаленные", link: 'deleted'}
  ];

}
