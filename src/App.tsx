import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { EconomicCellsPage } from './components/EconomicCellsPage';
import { CommunityTradingPage } from './components/CommunityTradingPage';
import { DeveloperPage } from './components/DeveloperPage';
import { BNPLPage } from './components/BNPLPage';
import { ConnectCommunitiesPage } from './components/ConnectCommunitiesPage';
import { CommunitiesPage } from './components/CommunitiesPage';
import { ArchitecturePage } from './components/ArchitecturePage';
import AutomatedClearingHousePage from './components/AutomatedClearingHousePage';
import { Dashboard } from './components/Dashboard';
import { ShopPage } from './components/ShopPage';
import { OnlinePaymentPage } from './components/OnlinePaymentPage';
import Footer from './components/Footer';
import { supabase } from './lib/supabase';
import { Session } from '@supabase/supabase-js';

export type ViewState = 
  | 'landing' 
  | 'economic-cells' 
  | 'community-trading' 
  | 'developers' 
  | 'bnpl' 
  | 'connect-communities' 
  | 'communities' 
  | 'architecture' 
  | 'dashboard'
  | 'automated-clearing-house'
  | 'shop'
  | 'online-payment';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingPage onEnterApp={() => setCurrentView('dashboard')} />;
      case 'economic-cells':
        return <EconomicCellsPage />;
      case 'community-trading':
        return <CommunityTradingPage />;
      case 'developers':
        return <DeveloperPage />;
      case 'bnpl':
        return <BNPLPage />;
      case 'connect-communities':
        return <ConnectCommunitiesPage />;
      case 'communities':
        return <CommunitiesPage />;
      case 'architecture':
        return <ArchitecturePage />;
      case 'automated-clearing-house':
        return <AutomatedClearingHousePage />;
      case 'dashboard':
        return <Dashboard session={session} />;
      case 'shop':
        return <ShopPage />;
      case 'online-payment':
        return <OnlinePaymentPage />;
      default:
        return <LandingPage onEnterApp={() => setCurrentView('dashboard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 overflow-x-hidden selection:bg-[#008752]/30">
      <Navbar setView={setCurrentView} currentView={currentView} session={session} />
      <main>
        {renderView()}
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;