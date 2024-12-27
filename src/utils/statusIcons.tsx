import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

export function getStatusIcon(status: string) {
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
}