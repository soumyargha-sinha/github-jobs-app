import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'htmlProtect'
})
export class HtmlProtectPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(html) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
