import React from 'react';
import { Shield } from 'lucide-react';

interface TermsDialogProps {
  onAccept: () => void;
}

export function TermsDialog({ onAccept }: TermsDialogProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 shadow-xl">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Terms of Use</h2>
        </div>
        
        <div className="prose prose-sm max-h-96 overflow-y-auto mb-6">
          <h3>1. Personal Use Only</h3>
          <p>This service is intended for personal use only. Commercial use is not permitted without explicit authorization.</p>
          
          <h3>2. System Access</h3>
          <p>By using this service, you grant permission to scan your system for hardware information and driver details.</p>
          
          <h3>3. Liability Disclaimer</h3>
          <p>We are not responsible for any issues that may arise from downloaded drivers or system modifications.</p>
          
          <h3>4. Privacy</h3>
          <p>We do not collect or store any personal data without your explicit consent. Hardware information is only used for driver matching.</p>
        </div>

        <button
          onClick={onAccept}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          I Accept the Terms of Use
        </button>
      </div>
    </div>
  );
}