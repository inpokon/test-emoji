import { Component, OnInit } from '@angular/core';
import {EmojiService} from "../service/emoji.service";
import {ActivatedRoute, Params} from "@angular/router";

interface EmojiList {
    id: number;
    name: string;
    link: string;
    favorites: boolean;
}

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})


export class EmojiComponent implements OnInit {

    emojiList: EmojiList[] = [];
    title: string;
    status: string;
    filter: string = '';
    favoritesIconRed: string = 'https://github.githubassets.com/images/icons/emoji/unicode/2764.png?v8';
    favoritesIconYellow: string = 'https://github.githubassets.com/images/icons/emoji/unicode/1f49b.png?v8';
    basketIcon: string = 'https://github.githubassets.com/images/icons/emoji/unicode/1f5d1.png?v8';
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


    constructor(private emojiService: EmojiService, private route: ActivatedRoute) {}

    ngOnInit() {

       this.route.params.subscribe((params: Params) => {
           switch (params.link) {
               case "chosen":
                   this.title = 'Избранные';
                   this.status = 'favorites';
                   this.emojiList = [];
                   this.emojiService.getEmoji('emojiList')
                       .subscribe((emoji: EmojiList[]) => {
                           emoji.map((em) => {
                               if (em.favorites) {
                                   this.emojiList.push(em);
                               }
                           });

                       });
                   break;
               case "deleted":
                   this.title = 'Удаленные';
                   this.status = 'deleted';
                   this.emojiService.getEmoji('deleteEmoji')
                       .subscribe((emojiDeleted: EmojiList[]) => {
                           this.emojiList = emojiDeleted;
                       });
                   break;
               default :
                   this.title = "Все";
                   this.status = 'all';
                   this.emojiService.getEmoji('emojiList')
                       .subscribe((emoji: EmojiList[]) => {
                           this.emojiList = emoji;
                       });
                   break;
           }
       })
    }

    editFavorites(item: EmojiList) {
        this.emojiService.editChoice(item).subscribe(res => res);
    }

    addEmoji(item, emojiLink) {
        this.emojiService.addFrom(item, emojiLink).subscribe(() => {
            this.emojiList = this.emojiList.filter(data => data.id !== item.id);
        });
    }
    removeEmoji(item, emojiLink) {
        setTimeout(() => {
            this.emojiService.removeFrom(item, emojiLink).subscribe(() => {
                this.emojiList = this.emojiList.filter(data => data.id !== item.id);
            });
        }, 100)
    }

    fromAllToRemote(item: EmojiList) {
        this.addEmoji(item,'deleteEmoji');
        this.removeEmoji(item,'emojiList');
    }
    fromRemoteToAll(item: EmojiList) {
        this.addEmoji(item,'emojiList');
        this.removeEmoji(item,'deleteEmoji');
    }

}
