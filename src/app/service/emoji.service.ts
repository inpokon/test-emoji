import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(private http: HttpClient) {}

  getEmoji() {
    return this.http.get<any[]>('http://localhost:3000/emoji');
  }
  getDeleted() {
    return this.http.get<any[]>('http://localhost:3000/deleteEmoji');
  }

  favoritesEdit(item: any): Observable<any> {
    item.favorites = !item.favorites;
    return this.http.put<any[]>(`http://localhost:3000/emoji/${item.id}`, item);
  }

  addDeletedEmoji(item: any) {
    return this.http.post('http://localhost:3000/deleteEmoji', item);
  }
  deletedEmoji(item: any) {
    return this.http.delete(`http://localhost:3000/emoji/${item.id}`);
  }

  bushelEmoji(item: any) {
    return this.http.post('http://localhost:3000/emoji', item);
  }
  removeDeletedEmoji(item: any) {
    return this.http.delete(`http://localhost:3000/deleteEmoji/${item.id}`);
  }

}
