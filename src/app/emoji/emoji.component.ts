import { Component, OnInit } from '@angular/core';
import {EmojiService} from "../service/emoji.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})

export class EmojiComponent implements OnInit {

    emoji: Array<any> = [];
    filter: string = '';
    //sorting
    key: string = 'name';
    reverse: boolean = false;
    id: any;
    sort(key){
        this.key = key;
        this.reverse = !this.reverse;
    }
    //initializing p to one
    p: number = 1;

    title: string;

    status: string;


    constructor(private emojiService: EmojiService, private route: ActivatedRoute) {

    }

    ngOnInit() {

       this.route.params.subscribe((params: Params) => {
           switch (params.link) {
               case "chosen":
                   this.title = 'Избранные';
                   this.status = 'favorites';
                   this.emoji = [];
                   this.emojiService.getEmoji()
                       .subscribe((emoji) => {
                           emoji.map((em) => {
                               if (em.favorites) {
                                   this.emoji.push(em);
                               }
                           });

                       });
                   break;
               case "deleted":
                   this.title = 'Удаленные';
                   this.status = 'deleted';
                   this.emojiService.getDeleted()
                       .subscribe((emojiDeleted) => {
                           this.emoji = emojiDeleted;
                       });
                   break;
               default :
                   this.title = "Все";
                   this.status = 'all';
                   this.emojiService.getEmoji()
                       .subscribe((emoji) => {
                           this.emoji = emoji;
                       });
                   break;
           }
       })
    }
    favoritesEdit(item: EmojiComponent) {

        this.emojiService.favoritesEdit(item).subscribe(res => res);
    }

    deletedEmoji(item: EmojiComponent) {
        this.emojiService.addDeletedEmoji(item).subscribe(() => {
            this.emoji = this.emoji.filter(data => data.id !== item.id);
        });
        this.emojiService.deletedEmoji(item).subscribe(() => {
            this.emoji = this.emoji.filter(data => data.id !== item.id);
        });
    }
    bushelEmoji(item: EmojiComponent) {
        this.emojiService.bushelEmoji(item).subscribe(() => {
            this.emoji = this.emoji.filter(data => data.id !== item.id);
        });
        this.emojiService.removeDeletedEmoji(item).subscribe(() => {
            this.emoji = this.emoji.filter(data => data.id !== item.id);
        });
    }



}
