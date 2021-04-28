import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() chipType: string;
  @Input() icon: string;
  @Input() caption: string;

  constructor() { }

  ngOnInit(): void {
  }

}
