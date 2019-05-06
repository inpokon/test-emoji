import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(private http: HttpClient) {}

  getEmoji() {
    return this.http.get('http://localhost:3000/emoji')
  }
}
