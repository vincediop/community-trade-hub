import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Handshake, Users, Code, Building2, Globe, TrendingUp, MessageSquare, ChevronRight, Landmark } from 'lucide-react';

export function PartnershipPage() {
  const { t } = useTranslation();

  const partnershipModels = [
    {
      key: 'community',
      icon: <Users className="text-[#008752]" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/community-leader-congo-brazzaville-892f09e2-1772480111218.webp",
      region: "Congo Brazzaville"
    },
    {
      key: 'developer',
      icon: <Code className="text-[#FFD700]" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/developer-kenya-04d51fa1-1772480111949.webp",
      region: "Kenya"
    },
    {
      key: 'finance',
      icon: <Landmark className="text-[#EF3340]" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/financial-bank-middle-east-2438c867-1772480122705.webp",
      region: "Middle East"
    },
    {
      key: 'gateway',
      icon: <Globe className="text-[#008752]" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/payment-gateway-fintech-9d7367a2-1772480116297.webp",
      region: "Global"
    },
    {
      key: 'investor',
      icon: <TrendingUp className="text-[#FFD700]" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/investor-zimbabwe-3a356a60-1772480111972.webp",
      region: "Zimbabwe"
    },
    {
      key: 'franchise',
      icon: <Building2 className="text-[#EF3340]" />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/franchise-burkina-faso-3a3eea84-1772480112083.webp",
      region: "Burkina Faso"
    }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#008752]/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#EF3340]/10 blur-[120px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-[#FFD700] text-xs font-black uppercase tracking-widest mb-8"
          >
            <Handshake size={14} />
            {t('common.becomePartner')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            {t('partnership.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed"
          >
            {t('partnership.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-32">
          {partnershipModels.map((model, index) => (
            <motion.div
              key={model.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl">
                    {model.icon}
                  </div>
                  <span className="text-sm font-black text-slate-500 uppercase tracking-widest">
                    {t(`partnership.models.${model.key}.location`)}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  {t(`partnership.models.${model.key}.title`)}
                </h2>
                
                <p className="text-[#FFD700] text-xl font-bold italic">
                  {t(`partnership.models.${model.key}.subtitle`)}
                </p>

                <p className="text-slate-400 text-lg leading-relaxed">
                  {t(`partnership.models.${model.key}.desc`)}
                </p>

                <button className="flex items-center gap-2 text-white font-black uppercase tracking-widest text-xs hover:text-[#FFD700] transition-colors group">
                  {t('common.learnMore')}
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#008752]/20 to-[#EF3340]/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                    <img 
                      src={model.image} 
                      alt={t(`partnership.models.${model.key}.title`)}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 md:p-20 bg-slate-900 rounded-[3rem] border border-slate-800 text-center overflow-hidden">
             {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#008752]/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#EF3340]/10 blur-[100px] rounded-full" />

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                {t('partnership.ready')}
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                {t('partnership.subtitle')}
              </p>
              <button className="px-10 py-5 bg-[#008752] text-white rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-[#008752]/20 flex items-center gap-3 mx-auto">
                <MessageSquare size={18} />
                {t('partnership.talk')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}