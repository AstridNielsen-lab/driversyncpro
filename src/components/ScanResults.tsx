import React from 'react';
import { Check, X, AlertTriangle, Download, RefreshCw, ExternalLink, Info } from 'lucide-react';
import type { Device } from '../types';
import { searchDrivers } from '../utils/hardwareDetection';

interface ScanResultsProps {
  devices: Device[];
  onUpdateDriver: (deviceId: string) => void;
}

export function ScanResults({ devices, onUpdateDriver }: ScanResultsProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'updated':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'outdated':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'missing':
        return <X className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const handleDriverSearch = async (device: Device) => {
    const searchUrl = await searchDrivers(device);
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Hardware Details</h2>
      <div className="space-y-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
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
                        onClick={() => handleDriverSearch(device)}
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
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <Info className="h-4 w-4" />
                    Device Details
                  </h4>
                  <div className="space-y-1">
                    {Object.entries(device.details).map(([key, value]) => (
                      <p key={key} className="text-sm">
                        <span className="text-gray-500">{key}: </span>
                        <span className="text-gray-900">{value}</span>
                      </p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Driver Information
                  </h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(device.currentDriver.status)}
                      <span className="text-sm">
                        Version: {device.currentDriver.version}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Released: {device.currentDriver.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}