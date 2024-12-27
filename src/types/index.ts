export interface Device {
  id: string;
  name: string;
  type: string;
  manufacturer: string;
  details: Record<string, string>;
  currentDriver: {
    version: string;
    date: string;
    status: 'updated' | 'outdated' | 'missing';
  };
}

export interface TermsState {
  accepted: boolean;
  timestamp?: Date;
}

export interface SystemInfo {
  os: {
    name: string;
    version: string;
    build: string;
  };
  motherboard: {
    manufacturer: string;
    model: string;
    biosVersion: string;
    chipset: string;
  };
  cpu: {
    name: string;
    cores: number;
    threads: number;
    speed: string;
  };
  memory: {
    total: string;
    type: string;
    speed: string;
  };
  devices: Device[];
}

export interface HardwareDevice extends Device {}