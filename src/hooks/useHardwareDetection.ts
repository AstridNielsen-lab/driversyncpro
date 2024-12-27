import { useState } from 'react';
import { detectSystemHardware } from '../utils/hardwareDetection';
import type { SystemInfo } from '../types';

export function useHardwareDetection() {
  const [scanning, setScanning] = useState(false);
  const [systemInfo, setSystemInfo] = useState<SystemInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startScan = async () => {
    setScanning(true);
    setError(null);
    
    try {
      const info = await detectSystemHardware();
      setSystemInfo(info);
    } catch (err) {
      setError('Failed to detect hardware. Please try again.');
      console.error('Hardware detection error:', err);
    } finally {
      setScanning(false);
    }
  };

  return {
    scanning,
    systemInfo,
    error,
    startScan
  };
}