import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './component/button/button.component';
import { WhenPipe } from './pipe/when.pipe';
import { HtmlProtectPipe } from './pipe/html-protect.pipe';
import { ChipComponent } from './component/chip/chip.component';
import { ImageLazyDirective } from './directive/image-lazy.directive';
import { MessageBoxComponent } from './component/message-box/message-box.component';
import { ModalComponent } from './component/modal/modal.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [ButtonComponent, WhenPipe, HtmlProtectPipe, ChipComponent, ModalComponent, ImageLazyDirective, MessageBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonComponent, ChipComponent, MessageBoxComponent, ModalComponent, WhenPipe, HtmlProtectPipe]
})
export class SharedModule { }
