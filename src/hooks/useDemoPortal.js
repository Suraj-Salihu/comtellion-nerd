import { useContext } from 'react';
import { DemoPortalContext } from '../contexts/DemoPortalContextValue';

export function useDemoPortal() {
  const context = useContext(DemoPortalContext);
  if (!context) throw new Error('useDemoPortal must be used within DemoPortalProvider');
  return context;
}