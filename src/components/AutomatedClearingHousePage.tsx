import React from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Clock, 
  ArrowRightLeft, 
  CheckCircle2, 
  Layers,
  Network,
  CreditCard,
  Banknote,
  Activity
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AutomatedClearingHousePage: React.FC = () => {
  const { t } = useTranslation();
  const layers = [
    {
      level: t('clearingHouse.layers.layer1.level'),
      title: t('clearingHouse.layers.layer1.title'),
      description: t('clearingHouse.layers.layer1.desc'),
      icon: <Network className="text-[#008752]" size={32} />,
      gradient: "from-emerald-500/20 to-emerald-900/10",
      borderColor: "border-emerald-500/30",
      accent: "#008752"
    },
    {
      level: t('clearingHouse.layers.layer2.level'),
      title: t('clearingHouse.layers.layer2.title'),
      description: t('clearingHouse.layers.layer2.desc'),
      icon: <Landmark className="text-[#FFD700]" size={32} />,
      gradient: "from-yellow-500/20 to-yellow-900/10",
      borderColor: "border-yellow-500/30",
      accent: "#FFD700"
    },
    {
      level: t('clearingHouse.layers.layer3.level'),
      title: t('clearingHouse.layers.layer3.title'),
      description: t('clearingHouse.layers.layer3.desc'),
      icon: <Globe className="text-[#004B87]" size={32} />,
      gradient: "from-blue-500/20 to-blue-900/10",
      borderColor: "border-blue-500/30",
      accent: "#004B87"
    }
  ];

  const settlementPoints = [
    {
      title: t('clearingHouse.realTimeCredit'),
      icon: <Zap size={20} className="text-[#FFD700]" />,
      description: "Across all layers, credit is always settled in real-time. Funds are available to the recipient immediately, ensuring liquidity and trust within the ecosystem."
    },
    {
      title: t('clearingHouse.flexibleSettlement'),
      icon: <Clock size={20} className="text-[#008752]" />,
      description: "The actual movement of fiat money is flexible and can be configured to occur at specific scheduled times or triggered on-demand by the user."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950 text-slate-100 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-12 bg-[#008752]/20 rounded-xl flex items-center justify-center border border-[#008752]/30 shadow-lg shadow-[#008752]/10">
              <Landmark className="text-[#008752]" size={24} />
            </div>
            <h1 className="text-sm font-black uppercase tracking-widest text-[#008752]">{t('clearingHouse.badge')}</h1>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase leading-tight tracking-tighter"
          >
            {t('clearingHouse.title').split('Clearing House').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008752] via-[#FFD700] to-[#004B87]">Clearing House</span>}
              </React.Fragment>
            ))}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-3xl font-medium leading-relaxed"
          >
            {t('clearingHouse.desc')}
          </motion.p>
        </div>

        {/* Hero Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative w-full h-[400px] mb-20 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group"
        >
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/automated-clearing-house-visual-d45482b2-1772467720113.webp" 
            alt="Automated Clearing House Visual" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="p-6 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl max-w-xl">
              <div className="flex items-center gap-2 mb-2 text-[#FFD700]">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t('clearingHouse.visualBadge')}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('clearingHouse.visualTitle')}</h3>
              <p className="text-slate-300 text-xs font-medium leading-relaxed uppercase tracking-wider">
                {t('clearingHouse.visualDesc')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tiered Model Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-black uppercase tracking-tighter">{t('clearingHouse.tieredModel')}</h3>
            <div className="h-px flex-grow bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {layers.map((layer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className={`relative p-8 rounded-3xl border ${layer.borderColor} bg-gradient-to-br ${layer.gradient} backdrop-blur-sm group hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="mb-6 w-16 h-16 bg-slate-950/50 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:border-slate-700 transition-colors">
                  {layer.icon}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-2" style={{ color: layer.accent }}>{layer.level}</div>
                <h4 className="text-xl font-bold mb-4 text-white uppercase">{layer.title}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-wider">
                  {layer.description}
                </p>
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Layers size={40} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Settlement Logic Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
              {t('clearingHouse.settlementLogic')}
              <ArrowRightLeft className="text-[#FFD700]" size={20} />
            </h3>
            
            <div className="space-y-6">
              {settlementPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="mt-1">{point.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 uppercase text-white tracking-tight">{point.title}</h4>
                    <p className="text-slate-400 text-xs font-bold leading-relaxed uppercase tracking-widest">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <Activity className="text-[#008752] animate-pulse" size={24} />
            </div>
            
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-8">{t('clearingHouse.flowVisualizer')}</h4>
            
            <div className="space-y-8 relative">
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-[#008752] flex items-center justify-center z-10">
                  <CreditCard className="text-[#008752]" size={20} />
                </div>
                <div className="h-px flex-grow bg-gradient-to-r from-[#008752] to-[#FFD700] relative mx-4">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-widest text-emerald-400">{t('clearingHouse.realTimeCredit')}</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-[#FFD700] flex items-center justify-center z-10">
                  <CheckCircle2 className="text-[#FFD700]" size={20} />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center z-10 opacity-50">
                  <Banknote className="text-slate-400" size={20} />
                </div>
                <div className="h-px flex-grow bg-slate-800 relative mx-4 border-dashed border-t">
                   <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-widest text-slate-500">{t('clearingHouse.flexibleSettlement')}</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-[#004B87] flex items-center justify-center z-10">
                  <Landmark className="text-[#004B87]" size={20} />
                </div>
              </div>
            </div>

            <div className="mt-12 p-4 bg-black/40 rounded-xl border border-slate-800">
               <p className="text-[10px] font-bold text-slate-500 uppercase leading-relaxed text-center">
                 {t('clearingHouse.engineStatus')}: <span className="text-emerald-400">{t('clearingHouse.operational')}</span> | {t('nav.howItWorksItems.economicCells').split(' ')[0]}: <span className="text-emerald-400">{t('clearingHouse.networkHub')}</span> | {t('clearingHouse.latency')}: <span className="text-emerald-400">14ms</span>
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedClearingHousePage;