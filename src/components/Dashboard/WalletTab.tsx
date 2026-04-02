import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  ShieldCheck,
  Fingerprint,
  CreditCard,
  Lock,
  Unlock,
  Settings,
  Eye,
  EyeOff
} from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

export function WalletTab() {
  const [showNumbers, setShowNumbers] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const { t } = useTranslation();

  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
    toast.info(isFrozen ? 'Card Unfrozen' : 'Card Frozen Successfully', {
        icon: isFrozen ? <Unlock size={16} /> : <Lock size={16} />
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <header>
        <h1 className="text-2xl font-bold">{t('dashboard.walletsCards')}</h1>
        <p className="text-slate-400 text-sm">{t('dashboard.walletTab.subtitle')}</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">{t('dashboard.walletTab.wallets')}</h3>
          <WalletItem currency="EUR" balance="\u20ac840.50" name="Personal Hub" active />
          <WalletItem currency="GHS" balance="\u20b54,200.00" name="Family Support Wallet" color="#008752" />
          <WalletItem currency="XOF" balance="\u20a3125,000" name="Merchant Trade Wallet" color="#FFD700" />
          <button 
            onClick={() => toast.info('New currency wallet creation coming soon')}
            className="w-full py-4 border-2 border-dashed border-slate-800 rounded-2xl text-slate-500 hover:text-slate-300 hover:bg-slate-900/50 transition-all flex items-center justify-center gap-2 font-bold text-sm"
          >
            <Plus size={20} /> {t('dashboard.walletTab.addCurrency')}
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500">{t('dashboard.walletTab.cardTitle')}</h3>
            <button 
                onClick={() => setShowNumbers(!showNumbers)} 
                className="text-slate-500 hover:text-white transition-colors"
            >
                {showNumbers ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative group">
            <div className={`transition-all duration-500 rounded-2xl overflow-hidden ${isFrozen ? 'grayscale opacity-60' : ''}`}>
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 rounded-2xl border border-white/10 shadow-2xl relative h-56 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#008752]/20 blur-[50px] rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FFD700]/10 blur-[50px] rounded-full" />
                
                <div className="flex justify-between items-start relative z-10">
                  <div className="flex gap-1">
                    <div className="w-8 h-8 rounded bg-[#008752]/40 shadow-inner" />
                    <div className="w-8 h-8 rounded bg-[#FFD700]/20 shadow-inner" />
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 bg-white/10 rounded-lg text-[10px] font-black tracking-tighter text-[#008752]">
                     <Fingerprint size={12} /> {t('dashboard.biometricVerified')}
                  </div>
                </div>
                
                <div className="relative z-10">
                  <p className="text-xl font-mono tracking-[0.25em] text-white/90">
                      {showNumbers ? '4291 8823 0092 1102' : '**** **** **** 4291'}
                  </p>
                  <div className="flex justify-between mt-6">
                    <div>
                      <p className="text-[10px] text-white/40 uppercase font-black">{t('dashboard.walletTab.memberName')}</p>
                      <p className="text-sm font-bold tracking-wider">ALEX RIVERA</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-white/40 uppercase font-black">{t('dashboard.walletTab.validThru')}</p>
                      <p className="text-sm font-bold">09 / 27</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isFrozen && (
                <div className="absolute inset-0 flex items-center justify-center z-20 bg-slate-950/20 backdrop-blur-[2px] rounded-2xl">
                    <div className="bg-white text-slate-950 px-4 py-2 rounded-full font-black text-xs uppercase shadow-xl flex items-center gap-2">
                        <Lock size={14} /> {t('dashboard.walletTab.frozen')}
                    </div>
                </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={toggleFreeze}
                className={`py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border ${isFrozen ? 'bg-[#008752] text-white border-[#008752]' : 'bg-slate-900 text-white border-slate-800 hover:bg-slate-800'}`}
              >
                {isFrozen ? <Unlock size={16} /> : <Lock size={16} />}
                {isFrozen ? t('dashboard.walletTab.unfreeze') : t('dashboard.walletTab.freeze')}
              </button>
              <button 
                onClick={() => toast.info('Card settings interface coming soon')}
                className="py-3 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <Settings size={16} /> {t('dashboard.settings')}
              </button>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <h4 className="font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2 text-[#008752]">
              <ShieldCheck size={18} />
              {t('features.zeroCost.title')}
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#008752] rounded-full" />
                {t('features.zeroCost.desc')}
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                {t('dashboard.walletTab.p2p')}
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#EF3340] rounded-full" />
                {t('dashboard.walletTab.merchantFees')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function WalletItem({ currency, balance, name, active, color }: any) {
  return (
    <div className={`p-4 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${active ? 'bg-slate-900 border-[#008752]/50 ring-1 ring-[#008752]/20 shadow-xl shadow-[#008752]/5' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}>
      <div className="flex gap-4 items-center">
        <div 
          className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-inner ${active ? 'text-white' : 'text-slate-500 bg-slate-800'}`}
          style={{ backgroundColor: active ? '#008752' : undefined, color: !active ? color : undefined }}
        >
          {currency}
        </div>
        <div>
          <h4 className="font-bold tracking-tight text-lg">{balance}</h4>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{name}</p>
        </div>
      </div>
      {active && <div className="w-2 h-2 rounded-full bg-[#008752] shadow-[0_0_8px_rgba(0,135,82,0.8)]" />}
    </div>
  );
}