import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { DemoPortalProvider } from './contexts/DemoPortalContext';

function App() {
  return (
    <BrowserRouter>
      <DemoPortalProvider>
        <AppRoutes />
      </DemoPortalProvider>
    </BrowserRouter>
  );
}

export default App;
