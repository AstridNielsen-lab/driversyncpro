import React from 'react';
import { Shield, AlertCircle } from 'lucide-react';

interface PrivacyNoticeProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function PrivacyNotice({ onAccept, onDecline }: PrivacyNoticeProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Hardware Detection Privacy Notice</h2>
        </div>
        
        <div className="prose prose-sm max-h-96 overflow-y-auto mb-6">
          <div className="flex items-start space-x-2 mb-4 text-amber-600">
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              This tool will access your system's hardware information through browser APIs.
              No personal data will be collected or stored.
            </p>
          </div>

          <h3>What We Detect:</h3>
          <ul>
            <li>Operating System details</li>
            <li>CPU information (cores/threads)</li>
            <li>GPU/Graphics card information</li>
            <li>System memory capacity</li>
          </ul>

          <h3>How We Use This Information:</h3>
          <ul>
            <li>Display system specifications</li>
            <li>Search for compatible drivers</li>
            <li>Provide hardware-specific recommendations</li>
          </ul>

          <h3>Your Privacy:</h3>
          <ul>
            <li>All detection is performed locally in your browser</li>
            <li>No information is sent to external servers</li>
            <li>No data is stored between sessions</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={onAccept}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Accept & Continue
          </button>
          <button
            onClick={onDecline}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}