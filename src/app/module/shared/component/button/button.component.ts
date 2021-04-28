import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnType: string;
  @Input() caption: string;
  @Input() btnLeftIcon: boolean;
  @Input() leftIcon: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
