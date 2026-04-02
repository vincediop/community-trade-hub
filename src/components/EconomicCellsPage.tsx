import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Wallet, 
  Coins, 
  Store, 
  Banknote, 
  CreditCard, 
  Users, 
  Languages, 
  ExternalLink, 
  Gavel, 
  CheckCircle,
  Network
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EconomicCellCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#008752]/40 transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-[#008752] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-black uppercase tracking-widest text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

export function EconomicCellsPage() {
  const { t } = useTranslation();
  const cellsData = [
    {
      icon: <ShieldCheck size={20} />,
      title: t('economicCells.cells.c1.title'),
      description: t('economicCells.cells.c1.desc')
    },
    {
      icon: <Wallet size={20} />,
      title: t('economicCells.cells.c2.title'),
      description: t('economicCells.cells.c2.desc')
    },
    {
      icon: <Coins size={20} />,
      title: t('economicCells.cells.c3.title'),
      description: t('economicCells.cells.c3.desc')
    },
    {
      icon: <CheckCircle size={20} />,
      title: t('economicCells.cells.c4.title'),
      description: t('economicCells.cells.c4.desc')
    },
    {
      icon: <Store size={20} />,
      title: t('economicCells.cells.c5.title'),
      description: t('economicCells.cells.c5.desc')
    },
    {
      icon: <Banknote size={20} />,
      title: t('economicCells.cells.c6.title'),
      description: t('economicCells.cells.c6.desc')
    },
    {
      icon: <CreditCard size={20} />,
      title: t('economicCells.cells.c7.title'),
      description: t('economicCells.cells.c7.desc')
    },
    {
      icon: <Wallet size={20} />,
      title: t('economicCells.cells.c8.title'),
      description: t('economicCells.cells.c8.desc')
    },
    {
      icon: <Users size={20} />,
      title: t('economicCells.cells.c9.title'),
      description: t('economicCells.cells.c9.desc')
    },
    {
      icon: <Languages size={20} />,
      title: t('economicCells.cells.c10.title'),
      description: t('economicCells.cells.c10.desc')
    },
    {
      icon: <ExternalLink size={20} />,
      title: t('economicCells.cells.c11.title'),
      description: t('economicCells.cells.c11.desc')
    },
    {
      icon: <Gavel size={20} />,
      title: t('economicCells.cells.c12.title'),
      description: t('economicCells.cells.c12.desc')
    },
    {
      icon: <Network size={20} />,
      title: t('economicCells.cells.c13.title'),
      description: t('economicCells.cells.c13.desc')
    },
    {
      icon: <ShieldCheck size={20} />,
      title: t('economicCells.cells.c14.title'),
      description: t('economicCells.cells.c14.desc')
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full"
          >
            <Network size={16} className="text-[#008752]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('economicCells.badge')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            {t('economicCells.title').split('Economic Cells').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008752] via-[#FFD700] to-[#EF3340]">Economic Cells</span>}
              </React.Fragment>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            {t('economicCells.desc')}
          </motion.p>
        </div>

        {/* Illustrations and Content Section 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#008752]/20 via-[#FFD700]/10 to-[#EF3340]/20 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/african-woman-with-au-flag-biometric-style-960b8740-1772380638710.webp"
                alt="Digital Cell Passport - African Union"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2">{t('economicCells.ill1Label')}</p>
                <h3 className="text-2xl font-black text-white tracking-tighter">{t('economicCells.illustration1')}</h3>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {cellsData.slice(0, 4).map((cell, idx) => (
              <EconomicCellCard key={idx} {...cell} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* Content Section 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 space-y-4">
            {cellsData.slice(4, 9).map((cell, idx) => (
              <EconomicCellCard key={idx} {...cell} delay={idx * 0.1} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#EF3340]/20 via-[#FFD700]/10 to-[#008752]/20 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/global-economic-cell-network-bfe6b722-1772380252235.webp"
                alt="Global Economic Cell Network"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#EF3340] mb-2">{t('economicCells.ill2Label')}</p>
                <h3 className="text-2xl font-black text-white tracking-tighter">{t('economicCells.illustration2')}</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cellsData.slice(9).map((cell, idx) => (
            <EconomicCellCard key={idx} {...cell} delay={idx * 0.1} />
          ))}
        </div>

        {/* Global Economy Section (Closing) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-slate-900/40 border border-slate-800 rounded-[3rem] text-center max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-black tracking-tighter text-white">{t('economicCells.ctaTitle')}</h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            {t('economicCells.ctaDesc')}
          </p>
          <div className="flex justify-center pt-4">
            <button className="px-10 py-4 bg-[#008752] text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-[#008752]/20">
              {t('economicCells.activateCell')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}