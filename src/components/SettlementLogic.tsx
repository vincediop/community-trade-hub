import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, Wallet, CreditCard, Repeat, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SettlementLogic = () => {
  const { t } = useTranslation();
  return (
    <section id="settlement" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
         <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/settlement-dashboard-70054255-1772466821913.webp" 
          alt="Dashboard UI" 
          className="object-cover h-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              {t('clearingHouse.realTimeCredit')}, <br />
              <span className="text-[#008752]">{t('clearingHouse.flexibleSettlement')}.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              {t('clearingHouse.visualDesc')}
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#008752]/20 rounded-2xl flex items-center justify-center border border-[#008752]/30">
                  <Zap className="text-[#008752] w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-indigo-50">{t('clearingHouse.realTimeCredit')}</h4>
                  <p className="text-slate-400">{t('clearingHouse.layers.layer1.desc')}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#FFD700]/20 rounded-2xl flex items-center justify-center border border-[#FFD700]/30">
                  <Repeat className="text-[#FFD700] w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-50">{t('clearingHouse.flexibleSettlement')}</h4>
                  <p className="text-slate-400">{t('clearingHouse.layers.layer3.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="text-[#008752]" /> {t('clearingHouse.settlementLogic')}
            </h3>
            
            <div className="space-y-6">
              {[
                { label: t('clearingHouse.realTimeCredit'), status: t('common.approved'), active: true },
                { label: "End-of-Day Fiat Transfer", status: "Configurable", active: false },
                { label: "On-Demand Liquidation", status: "User Triggered", active: false },
                { label: "Compliance Hold", status: t('clearingHouse.layers.layer3.level'), active: true },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <div>
                    <div className="font-semibold">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.status}</div>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${item.active ? 'bg-[#008752]' : 'bg-slate-700'}`}>
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${item.active ? 'left-7' : 'left-1'}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700/50 flex items-center justify-between">
              <div className="text-sm text-slate-400">{t('clearingHouse.latency')}</div>
              <div className="text-2xl font-mono font-bold text-green-400">1.2ms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettlementLogic;