import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {Page} from "../page";

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(private http: HttpClient) {}

  getEmoji(page: number, itemsPerPage: number): Observable<Page> {
    let emoji = this.http.get<any[]>('http://localhost:3000/emoji');
    return this.getPageItems(emoji, page, itemsPerPage)
  }

  private getPageItems(emoji: Observable<Array<any>>, page: number, itemsPerPage: number): Observable<Page> {
    return emoji.pipe(map(em => {
      let startIndex = itemsPerPage * (page - 1);
      return new Page(em.length, em.slice(startIndex, startIndex + itemsPerPage));
    }));
  }
}
