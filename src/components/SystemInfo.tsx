import React from 'react';
import { Monitor, Cpu, HardDrive, CircuitBoard } from 'lucide-react';
import type { SystemInfo as SystemInfoType } from '../types';

interface SystemInfoProps {
  systemInfo: SystemInfoType;
}

export function SystemInfo({ systemInfo }: SystemInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* OS Information */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Monitor className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Operating System</h3>
          </div>
          <div className="space-y-2 ml-9">
            <p className="text-sm text-gray-600">
              Name: <span className="font-medium text-gray-900">{systemInfo.os.name}</span>
            </p>
            <p className="text-sm text-gray-600">
              Version: <span className="font-medium text-gray-900">{systemInfo.os.version}</span>
            </p>
            <p className="text-sm text-gray-600">
              Build: <span className="font-medium text-gray-900">{systemInfo.os.build}</span>
            </p>
          </div>
        </div>

        {/* Motherboard Information */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <HardDrive className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Motherboard</h3>
          </div>
          <div className="space-y-2 ml-9">
            <p className="text-sm text-gray-600">
              Model: <span className="font-medium text-gray-900">{systemInfo.motherboard.manufacturer} {systemInfo.motherboard.model}</span>
            </p>
            <p className="text-sm text-gray-600">
              BIOS Version: <span className="font-medium text-gray-900">{systemInfo.motherboard.biosVersion}</span>
            </p>
            <p className="text-sm text-gray-600">
              Chipset: <span className="font-medium text-gray-900">{systemInfo.motherboard.chipset}</span>
            </p>
          </div>
        </div>

        {/* CPU Information */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Cpu className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Processor</h3>
          </div>
          <div className="space-y-2 ml-9">
            <p className="text-sm text-gray-600">
              Name: <span className="font-medium text-gray-900">{systemInfo.cpu.name}</span>
            </p>
            <p className="text-sm text-gray-600">
              Cores/Threads: <span className="font-medium text-gray-900">{systemInfo.cpu.cores}/{systemInfo.cpu.threads}</span>
            </p>
            <p className="text-sm text-gray-600">
              Base Speed: <span className="font-medium text-gray-900">{systemInfo.cpu.speed}</span>
            </p>
          </div>
        </div>

        {/* Memory Information */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <CircuitBoard className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Memory</h3>
          </div>
          <div className="space-y-2 ml-9">
            <p className="text-sm text-gray-600">
              Total: <span className="font-medium text-gray-900">{systemInfo.memory.total}</span>
            </p>
            <p className="text-sm text-gray-600">
              Type: <span className="font-medium text-gray-900">{systemInfo.memory.type}</span>
            </p>
            <p className="text-sm text-gray-600">
              Speed: <span className="font-medium text-gray-900">{systemInfo.memory.speed}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}