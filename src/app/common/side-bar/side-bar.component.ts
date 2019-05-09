import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  links: Array<any> = [
    {name: "Избранные", link: 'chosen'},
    {name: "Удаленные", link: 'deleted'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
