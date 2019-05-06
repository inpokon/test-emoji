import { Component, OnInit } from '@angular/core';
import {EmojiService} from "../service/emoji.service";

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {

  emoji: any = [];
  emojiLength: number = 0;

  constructor(private emojiService: EmojiService) { }

  ngOnInit() {
    this.emojiService
        .getEmoji()
        .subscribe((response) => {
          this.emoji = response;
          this.emojiLength = this.emoji.length;
          this.emoji.splice(10, this.emojiLength);
        });
  }

}
