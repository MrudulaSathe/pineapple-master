import { Device } from './device.model';

export interface DeviceTable {
  collection_entries: number;
  headers: string[];
  id: string;
  rows: Device[];
  title: string;
}
