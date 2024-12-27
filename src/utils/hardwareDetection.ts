import { detectRealHardware } from './browserHardware';
import type { SystemInfo, Device } from '../types';

export async function detectSystemHardware(): Promise<SystemInfo> {
  try {
    return await detectRealHardware();
  } catch (error) {
    console.error('Failed to detect hardware:', error);
    // Fallback to mock data if detection fails
    return getMockSystemInfo();
  }
}

export async function searchDrivers(device: Device): Promise<string> {
  const searchQuery = `${device.manufacturer} ${device.name} driver download`;
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
  return searchUrl;
}

// Fallback mock data
function getMockSystemInfo(): SystemInfo {
  // ... existing mock data implementation ...
}