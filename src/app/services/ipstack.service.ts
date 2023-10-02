import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpstackService {
  private apiKey = '496441eaf3d2980a5cfe6ae6f21b94c9'; // Reemplaza con tu clave de API de Ipstack

  constructor(private http: HttpClient) {}

  getLocationByIP(ipAddress: string): Observable<any> {
    const apiUrl = `http://api.ipstack.com/${ipAddress}?access_key=${this.apiKey}`;

    return this.http.get(apiUrl);
  }
}

