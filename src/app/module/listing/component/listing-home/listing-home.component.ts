import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Job } from 'src/app/model/job.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listing-home',
  templateUrl: './listing-home.component.html',
  styleUrls: ['./listing-home.component.scss']
})
export class ListingHomeComponent implements OnInit {

  currentPage = 0;
  jobs: Job[] = [];
  jobsLoaded = false;
  loadingMore = false;
  showFilterModal = false;
  /* Search Filters */
  filters = {
    description: '',
    location: '',
    fullTime: false
  };
  searchedFilters = {
    description: '',
    location: '',
    fullTime: false
  };
  filtered = false;
  error = false;
  constructor(private dataSvc: DataService, private titleSvc: Title) { }

  ngOnInit(): void {
    this.setTitle();
    this.fetchJobs();
  }

  fetchJobs(): void {
    this.dataSvc.getJobsByParams(this.currentPage + 1, this.filters).subscribe(
      res => {
        if (res.length > 0) {
          this.jobs = this.jobs.concat(res);
          this.currentPage += 1;
          // if (this.currentPage === 1)
          this.jobsLoaded = true;
          this.loadingMore = false;
        }
        else {
          this.loadingMore = false;
          // toast that's all for now
        }
      },
      err => {
        this.error = true;
      }
    );
  }

  loadMore(): void {
    this.loadingMore = true;
    this.fetchJobs();
  }

  searchByFilter(): void {
    this.currentPage = 0;
    this.jobsLoaded = false;
    this.jobs = [];
    Object.keys(this.searchedFilters).forEach(key => {
      this.searchedFilters[key] = this.filters[key];
    });
    this.filtered = true;
    this.fetchJobs();
  }

  cancelFilterParam(key: string, setTo: any): void {
    this.currentPage = 0;
    this.filters[key] = setTo;
    this.searchedFilters[key] = setTo;
    this.fetchJobs();
    if (this.filters.description.length < 1 && this.filters.location.length < 1 && !this.filters.fullTime) {
      this.filtered = false;
    }
  }

  generatePlaceholderData(): any[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  setTitle(): void {
    this.titleSvc.setTitle('All Jobs - Fetched from Github Jobs');
  }

}
