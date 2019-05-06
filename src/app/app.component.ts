import {Component, OnInit} from '@angular/core';
import {EmojiService} from "./service/emoji.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-emoji';

  constructor(private emojiService: EmojiService) {}

  ngOnInit() {
    this.emojiService
        .getEmoji()
        .subscribe((response) => {
          console.log(response);
        });

  }
}
