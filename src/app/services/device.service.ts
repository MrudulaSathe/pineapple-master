import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeviceTable } from '../models/device-table.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<DeviceTable[]> {
    return this.http.get<DeviceTable[]>('../../assets/devices.json');
  }
}
