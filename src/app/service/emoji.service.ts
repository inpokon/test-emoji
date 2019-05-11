import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(private http: HttpClient) {}

  getEmoji(emojiLink: string) {
    return this.http.get(`http://localhost:3000/${emojiLink}`);
  }

  editFavorites(item: any): Observable<any> {
    item.favorites = !item.favorites;
    return this.http.put(`http://localhost:3000/emoji/${item.id}`, item);
  }

  addFrom(item: any, emojiLink: string) {
    return this.http.post(`http://localhost:3000/${emojiLink}`, item);
  }
  removeFrom(item: any, emojiLink: string) {
    return this.http.delete(`http://localhost:3000/${emojiLink}/${item.id}`);
  }

}
