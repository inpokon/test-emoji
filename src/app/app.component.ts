import {Component, OnInit} from '@angular/core';
import {EmojiService} from "./service/emoji.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-emoji';

  public page: number;

  public collectionSize: number;

  public itemsPerPage: number = 100;

  emoji: any = [];


  constructor(private emojiService: EmojiService) {
    this.page = 1;
    this.loadPage();
  }

  ngOnInit() {

  }

  onPageChanged() {
    this.loadPage();
  }

  private loadPage() {
    this.emojiService.getEmoji(this.page, this.itemsPerPage)
        .subscribe((emoji) => {
          this.emoji = emoji.rows;
          this.collectionSize = emoji.totalCount;
        });
  }
}
