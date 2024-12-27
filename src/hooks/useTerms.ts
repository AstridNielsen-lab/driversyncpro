import { useState } from 'react';
import type { TermsState } from '../types';

export function useTerms() {
  const [terms, setTerms] = useState<TermsState>({ accepted: false });

  const acceptTerms = () => {
    setTerms({ accepted: true, timestamp: new Date() });
  };

  return {
    terms,
    acceptTerms
  };
}