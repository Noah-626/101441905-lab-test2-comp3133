
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model'; // <-- Import the interface

@Injectable({
  providedIn: 'root'
})
export class MyhttpclientService {
  private API_BASE_URL = "https://api.spacexdata.com/v3/launches";

  constructor(private httpClient: HttpClient) { }

  // Method to get all missions
  getPosts(): Observable<Mission[]> {
    return this.httpClient.get<Mission[]>(this.API_BASE_URL);
  }

  // Method to get one mission (optional)
  getPostById(id: number): Observable<Mission> {
    return this.httpClient.get<Mission>(`${this.API_BASE_URL}/${id}`);
  }

  // Method to post data (usually not allowed by this API)
  createPost(data: any): Observable<any> {
    return this.httpClient.post(this.API_BASE_URL, data);
  }

  // Method to update data (usually not allowed by this API)
  updatePost(id: number, data: any): Observable<any> {
    return this.httpClient.put(`${this.API_BASE_URL}/${id}`, data);
  }

  // Method to delete data (usually not allowed by this API)
  deletePost(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_BASE_URL}/${id}`);
  }
}
