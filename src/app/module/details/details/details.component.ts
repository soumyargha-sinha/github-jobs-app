import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/model/job.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  job?: Job;
  constructor(private route: ActivatedRoute, private dataSvc: DataService,
    private titleSvc: Title) { }

  ngOnInit(): void {
    this.setTitle()
    this.getJobById();
  }

  getJobById(): void {
    this.dataSvc.getJobById(this.route.snapshot.paramMap.get('id')).subscribe(
      res => {
        this.job = res;
        this.setTitle();
      }
    )
  }

  visitURL(url: string): void {
    window.open(url);
  }

  setTitle(): void {
    this.titleSvc.setTitle(this.job ? (this.job.title + ' - ' + this.job.company + ' - Fetched from Github Jobs') : 'Jobs fetched from Github Jobs');
  }

  getPlaceholderImage(): void {
    this.job.company_logo = '/assets/placeholder.png';
  }

}
