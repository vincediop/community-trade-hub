import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ArchitectureDiagram = () => {
  const { t } = useTranslation();
  return (
    <section id="infrastructure" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('architectureDiagram.title')}</h2>
          <p className="text-slate-600">{t('architectureDiagram.subtitle')}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-12 relative z-10">
            {/* Diagram Elements */}
            <div className="flex flex-col items-center">
              {/* Layer 3 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-3/4 p-6 rounded-2xl bg-slate-900 text-white shadow-xl border-l-8 border-slate-700"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">Gateway 3.0</span>
                  <span className="bg-[#008752] px-2 py-0.5 rounded text-[10px] font-bold">{t('architectureDiagram.crossBorder')}</span>
                </div>
                <h4 className="text-lg font-bold mt-2">{t('clearingHouse.layers.layer3.title')}</h4>
              </motion.div>

              <div className="w-1 h-12 bg-gradient-to-b from-slate-900 to-[#008752]" />

              {/* Layer 2 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-2/3 p-6 rounded-2xl bg-[#008752] text-white shadow-xl border-l-8 border-emerald-400"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-emerald-200 uppercase">Gateway 2.0</span>
                  <span className="bg-emerald-400 px-2 py-0.5 rounded text-[10px] font-bold">{t('architectureDiagram.interCommunity')}</span>
                </div>
                <h4 className="text-lg font-bold mt-2">{t('clearingHouse.layers.layer2.title')}</h4>
              </motion.div>

              <div className="w-1 h-12 bg-gradient-to-b from-emerald-600 to-[#FFD700]" />

              {/* Layer 1 */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-full md:w-1/2 p-6 rounded-2xl bg-[#FFD700] text-slate-950 shadow-xl border-l-8 border-yellow-400"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-yellow-800 uppercase">Gateway 1.0</span>
                  <span className="bg-yellow-400 px-2 py-0.5 rounded text-[10px] font-bold">{t('architectureDiagram.intraCommunity')}</span>
                </div>
                <h4 className="text-lg font-bold mt-2">{t('clearingHouse.layers.layer1.title')}</h4>
              </motion.div>
            </div>

            {/* Connecting lines illustration background */}
            <div className="absolute inset-0 -z-10 flex justify-center opacity-20">
               <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/global-network-217ac791-1772466827347.webp" 
                alt="Network connections" 
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: t('architectureDiagram.stats.speed'), value: "<100ms" },
            { label: t('architectureDiagram.stats.uptime'), value: "99.99%" },
            { label: t('architectureDiagram.stats.reach'), value: "180+ Countries" },
            { label: t('architectureDiagram.stats.security'), value: "L3 HSM" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;