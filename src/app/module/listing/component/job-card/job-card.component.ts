import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/model/job.model';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  @Input() job: Job;
  constructor() { }

  ngOnInit(): void {
  }

  getPlaceholderImage(): void {
    this.job.company_logo = '/assets/placeholder.png';
  }
}
