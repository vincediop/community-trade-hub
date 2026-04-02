import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  QrCode,
  LayoutGrid,
  ChevronRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Settings,
  Users,
  Wallet,
  User
} from 'lucide-react';
import { OverviewTab } from './Dashboard/OverviewTab';
import { MarketTab } from './Dashboard/MarketTab';
import { WalletTab } from './Dashboard/WalletTab';
import { NetworksTab } from './Dashboard/NetworksTab';
import { SettingsTab } from './Dashboard/SettingsTab';
import { SendModal, ReceiveModal, JoinNetworkModal } from './Dashboard/Modals';
import { useTranslation } from 'react-i18next';
import { Session } from '@supabase/supabase-js';

export type Tab = 'overview' | 'market' | 'wallet' | 'networks' | 'settings';

interface DashboardProps {
  session: Session | null;
}

export function Dashboard({ session }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [isSendOpen, setIsSendOpen] = useState(false);
  const [isReceiveOpen, setIsReceiveOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [bonusBalance, setBonusBalance] = useState(420.00);
  const { t } = useTranslation();

  const handleSupport = (name: string, cost: number) => {
    setBonusBalance(prev => prev - cost);
  };

  const userAvatar = session?.user?.user_metadata?.avatar_url;
  const userName = session?.user?.user_metadata?.full_name || session?.user?.user_metadata?.user_name || session?.user?.email?.split('@')[0] || 'Guest User';
  const initials = userName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div className="pt-24 pb-12 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav */}
        <aside className="w-full lg:w-64 space-y-2 shrink-0">
          <div className="hidden lg:block pb-4 border-b border-slate-800 mb-4 px-4">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#008752] to-[#FFD700] flex items-center justify-center font-bold text-slate-900 overflow-hidden">
                 {userAvatar ? (
                   <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
                 ) : (
                   <span>{initials}</span>
                 )}
               </div>
               <div>
                 <p className="text-sm font-bold truncate max-w-[120px]">{userName}</p>
                 <p className="text-[10px] text-slate-500 font-black uppercase">{t('dashboard.verifiedMember')}</p>
               </div>
             </div>
          </div>
          
          <DashboardNavButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
            icon={<LayoutGrid size={20} />} 
            label={t('dashboard.overview')} 
          />
          <DashboardNavButton 
            active={activeTab === 'market'} 
            onClick={() => setActiveTab('market')} 
            icon={<BarChart3 size={20} />} 
            label={t('dashboard.supportMarket')} 
          />
          <DashboardNavButton 
            active={activeTab === 'wallet'} 
            onClick={() => setActiveTab('wallet')} 
            icon={<Wallet size={20} />} 
            label={t('dashboard.walletsCards')} 
          />
          <DashboardNavButton 
            active={activeTab === 'networks'} 
            onClick={() => setActiveTab('networks')} 
            icon={<Users size={20} />} 
            label={t('dashboard.myNetworks')} 
          />
          <DashboardNavButton 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')} 
            icon={<Settings size={20} />} 
            label={t('dashboard.settings')} 
          />
          
          <div className="mt-8 pt-8 border-t border-slate-800">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mb-4">{t('dashboard.quickActions')}</h4>
            <div className="grid grid-cols-2 gap-2 px-2">
               <button onClick={() => setIsSendOpen(true)} className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors gap-1">
                 <ArrowUpRight size={18} className="text-[#008752]" />
                 <span className="text-[10px] font-bold uppercase">{t('dashboard.send')}</span>
               </button>
               <button onClick={() => setIsReceiveOpen(true)} className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors gap-1">
                 <QrCode size={18} className="text-[#FFD700]" />
                 <span className="text-[10px] font-bold uppercase">{t('dashboard.qrPay')}</span>
               </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <OverviewTab 
                key="overview" 
                bonusBalance={bonusBalance} 
                onEnterMarket={() => setActiveTab('market')}
                onSend={() => setIsSendOpen(true)}
                onReceive={() => setIsReceiveOpen(true)}
              />
            )}
            {activeTab === 'market' && (
              <MarketTab 
                key="market" 
                bonusBalance={bonusBalance} 
                onSupport={handleSupport} 
              />
            )}
            {activeTab === 'wallet' && (
              <WalletTab key="wallet" />
            )}
            {activeTab === 'networks' && (
              <NetworksTab key="networks" onJoin={() => setIsJoinOpen(true)} />
            )}
            {activeTab === 'settings' && (
              <SettingsTab key="settings" session={session} />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modals */}
      <SendModal isOpen={isSendOpen} onClose={() => setIsSendOpen(false)} />
      <ReceiveModal isOpen={isReceiveOpen} onClose={() => setIsReceiveOpen(false)} />
      <JoinNetworkModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}

function DashboardNavButton({ active, icon, label, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all ${
        active 
        ? 'bg-[#008752] text-white font-bold shadow-lg shadow-[#008752]/20' 
        : 'text-slate-400 hover:bg-slate-900 hover:text-white'
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
      {active && <ChevronRight size={16} className="ml-auto" />}
    </button>
  );
}