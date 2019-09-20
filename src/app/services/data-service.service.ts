import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  jsonPath = './assets/login.json';
  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.jsonPath);
  }
  public writeJSON(data) {
    return this.http.post(this.jsonPath,data);
    // jsonfile.writeFile(this.jsonPath, data, { flag: 'a' }, function (err) {
    //   if (err) console.error(err)
    // })
  }

}
