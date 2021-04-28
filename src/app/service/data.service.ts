import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Job } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = environment.CROSS_ORIGIN_API_URL 
  GITHUB_URL = environment.API_URL;
  constructor(private http: HttpClient) { }


  getAllJobs(page: number): Observable<Job[]> {
    return this.http.get<Job[]>(this.BASE_URL + this.GITHUB_URL + '.json?' + 'page=' + page).pipe(
      map((res: any) => JSON.parse(res['contents']))
    );
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(this.BASE_URL + this.GITHUB_URL + '/'+id+'.json').pipe(
      map((res: any) => JSON.parse(res['contents']))
    )
  }

  getJobsByParams(page: number, filters: any) {
    return this.http.get<Job[]>(this.BASE_URL + encodeURIComponent(this.GITHUB_URL + '.json?page=' + page+'&description='+filters['description']+'&location='
    +filters['location']+'&full_time='+filters['fullTime'])).pipe(
      map((res: any) => JSON.parse(res['contents']))
    );
  }


}
