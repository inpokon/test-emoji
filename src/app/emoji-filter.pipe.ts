import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiFilter'
})
export class EmojiFilterPipe implements PipeTransform {

  transform(emojiList, searchStr: string) {
    if (emojiList.length === 0 || searchStr === '') {
      return emojiList;
    }

    return emojiList.filter((em) => {
      return em.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
    });

  }

}
