import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Users, 
  Globe, 
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  X
} from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface NetworksTabProps {
  onJoin: () => void;
}

export function NetworksTab({ onJoin }: NetworksTabProps) {
  const { t } = useTranslation();
  const networks = [
    { id: 1, name: 'Homeland Support', members: 42, type: 'Family/Village', roi: '+8.4%', status: 'Active', color: '#008752' },
    { id: 2, name: 'Organic Farm Co-op', members: 128, type: 'Trade Network', roi: '+12.1%', status: 'Active', color: '#FFD700' },
    { id: 3, name: 'Urban Gig Collective', members: 56, type: 'Service Exchange', roi: '+5.5%', status: 'Active', color: '#EF3340' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">{t('dashboard.myNetworks')}</h1>
          <p className="text-slate-400 text-sm">{t('dashboard.networks.subtitle')}</p>
        </div>
        <button 
            onClick={onJoin}
            className="px-4 py-2 bg-[#008752] text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-[#008752]/90 transition-all"
        >
            <Plus size={16} /> {t('common.joinNetwork')}
        </button>
      </header>

      <div className="grid gap-4">
          {networks.map(network => (
              <div key={network.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl hover:border-slate-700 transition-all cursor-pointer group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                          <div 
                            className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-slate-900 shadow-lg"
                            style={{ background: network.color }}
                          >
                              {network.name.charAt(0)}
                          </div>
                          <div>
                              <h3 className="font-bold text-lg">{network.name}</h3>
                              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{network.type}</p>
                          </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-8">
                          <div className="text-center md:text-left">
                              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t('dashboard.networks.members')}</p>
                              <div className="flex items-center gap-1.5">
                                  <Users size={14} className="text-slate-400" />
                                  <span className="font-bold">{network.members}</span>
                              </div>
                          </div>
                          <div className="text-center md:text-left">
                              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t('dashboard.networks.communityYield')}</p>
                              <div className="flex items-center gap-1.5">
                                  <TrendingUp size={14} className="text-[#008752]" />
                                  <span className="font-bold text-[#008752]">{network.roi}</span>
                              </div>
                          </div>
                          <div className="text-center md:text-left">
                              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{t('dashboard.networks.trustStatus')}</p>
                              <div className="flex items-center gap-1.5">
                                  <ShieldCheck size={14} className="text-[#FFD700]" />
                                  <span className="font-bold">{network.status}</span>
                              </div>
                          </div>
                          <div className="md:block">
                              <ChevronRight className="text-slate-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </div>

      <div className="p-8 bg-slate-950 border border-dashed border-slate-800 rounded-3xl text-center">
          <Globe size={48} className="mx-auto text-slate-800 mb-4" />
          <h3 className="text-xl font-bold mb-2">{t('dashboard.networks.magicInterconnection')}</h3>
          <p className="text-slate-500 max-w-lg mx-auto mb-6">{t('dashboard.networks.interconnectionDesc')}</p>
          <button 
            onClick={() => toast.info('Network interconnection setup coming soon')}
            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all border border-slate-800"
          >
              {t('dashboard.networks.configure')}
          </button>
      </div>
    </motion.div>
  );
}