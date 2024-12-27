import React from 'react';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { getStatusIcon } from '../../utils/statusIcons';
import type { Device } from '../../types';

interface DeviceCardProps {
  device: Device;
  onUpdateDriver: (deviceId: string) => void;
  onFindDriver: (device: Device) => void;
}

export function DeviceCard({ device, onUpdateDriver, onFindDriver }: DeviceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{device.name}</h3>
            <p className="text-sm text-gray-500">{device.manufacturer}</p>
          </div>
          <div className="flex space-x-2">
            {device.currentDriver.status !== 'updated' && (
              <>
                <button
                  onClick={() => onUpdateDriver(device.id)}
                  className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Update</span>
                </button>
                <button
                  onClick={() => onFindDriver(device)}
                  className="flex items-center space-x-1 px-3 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Find Driver</span>
                </button>
              </>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceDetails details={device.details} />
          <DriverInfo driver={device.currentDriver} />
        </div>
      </div>
    </div>
  );
}