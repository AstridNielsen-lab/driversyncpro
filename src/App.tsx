import React from 'react';
import { Scan } from 'lucide-react';
import { Header } from './components/layout/Header';
import { TermsDialog } from './components/TermsDialog';
import { ScanResults } from './components/ScanResults';
import { SystemInfo } from './components/SystemInfo';
import { useHardwareDetection } from './hooks/useHardwareDetection';
import { useTerms } from './hooks/useTerms';
import { searchDrivers } from './utils/hardwareDetection';

function App() {
  const { terms, acceptTerms } = useTerms();
  const { scanning, systemInfo, error, startScan } = useHardwareDetection();

  const handleUpdateDriver = (deviceId: string) => {
    console.log(`Updating driver for device: ${deviceId}`);
  };

  const handleDriverSearch = async (device: Device) => {
    const searchUrl = await searchDrivers(device);
    window.open(searchUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!terms.accepted && <TermsDialog onAccept={acceptTerms} />}
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Keep Your Drivers Up to Date
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Automatically detect and update your computer's drivers to ensure optimal performance
          </p>
        </div>

        {error && (
          <div className="text-red-600 text-center mb-4">
            {error}
          </div>
        )}

        {terms.accepted && !systemInfo && (
          <div className="text-center">
            <button
              onClick={startScan}
              disabled={scanning}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Scan className="h-5 w-5" />
              <span>{scanning ? 'Scanning System...' : 'Start System Scan'}</span>
            </button>
          </div>
        )}

        {systemInfo && (
          <>
            <SystemInfo systemInfo={systemInfo} />
            <ScanResults 
              devices={systemInfo.devices} 
              onUpdateDriver={handleUpdateDriver}
              onFindDriver={handleDriverSearch}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;