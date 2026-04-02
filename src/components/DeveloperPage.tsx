import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, Globe, Smartphone, Banknote, Rocket, CheckCircle2, ArrowRight, Terminal, Database, AlertCircle, Scale, Coins, Sparkles, Cpu, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function DeveloperPage() {
  const { t } = useTranslation();
  const images = {
    developer: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/ethiopian-developer-with-prominent-gebeya-logo-377d888f-1772385869163.webp",
    consumer: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/congolese-consumer-using-helloopass-981dd64b-1772385868496.webp",
    institution: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/financial-infrastructure-integration-878256d2-1772385873930.webp",
    gebeyaLogo: "https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1772386375679_gebeya_logo.png"
  };

  const apis = [
    { category: "Payments", desc: "Process transactions, manage wallets, handle settlements", icon: Banknote },
    { category: "Identity", desc: "KYC verification, community reputation scores", icon: Users },
    { category: "Lending", desc: "BNPL engine, microloan disbursement", icon: Zap },
    { category: "Messaging", desc: "In-app notifications, community broadcasts", icon: Smartphone },
    { category: "Analytics", desc: "Transaction insights, user behavior", icon: Database },
    { category: "Commerce", desc: "Product catalogs, order tracking", icon: Globe },
    { category: "Logistics", desc: "Delivery tracking, route optimization", icon: Rocket },
    { category: "Gamification", desc: "Loyalty points, rewards, leaderboards", icon: CheckCircle2 },
    { category: "Scheduling", desc: "Appointments, bookings", icon: ShieldCheck },
    { category: "Content", desc: "Media hosting, educational materials", icon: Terminal },
  ];

  return (
    <div className="pt-32 pb-20 px-4 md:px-6 bg-slate-950 text-white selection:bg-[#008752]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-32 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008752]/10 border border-[#008752]/20 text-[#008752] text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <div className="w-2 h-2 rounded-full bg-[#008752] animate-pulse" />
            {t('developer.badge')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-balance text-white"
          >
            {t('developer.title').split('Pan-African Apps').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF8C00]">Pan-African Apps</span>}
              </React.Fragment>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            {t('developer.desc')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="h-16 px-10 bg-[#008752] hover:bg-[#00A86B] text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-[#008752]/20">
              {t('common.startBuilding')} <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 bg-slate-900 border-slate-800 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-800">
              {t('common.apiDocs')}
            </Button>
          </motion.div>
        </div>

        {/* Gebeya Partnership Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-48 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#008752]/5 to-transparent rounded-[4rem] blur-3xl -z-10" />
          <div className="p-8 md:p-16 bg-slate-900/40 border border-white/5 rounded-[4rem] flex flex-col items-center text-center space-y-10">
            <a 
              href="https://gebeya.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative transition-transform hover:scale-105 active:scale-95 block"
            >
              <div className="absolute -inset-4 bg-[#FFD700]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src={images.gebeyaLogo} 
                alt="Gebeya AI Logo" 
                className="h-12 md:h-16 object-contain relative"
              />
            </a>
            
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={12} />
                {t('developer.partnershipBadge')}
              </div>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter leading-tight">
                {t('developer.partnershipTitle').split('Most Advanced AI Developer Community').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-[#FFD700]">Most Advanced AI Developer Community</span>}
                  </React.Fragment>
                ))}
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed">
                {t('developer.partnershipDesc').split('Gebeya AI').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-white font-bold">Gebeya AI</span>}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {[
                { icon: Cpu, label: t('developer.aiIntegration'), text: "Seamless access to Gebeya's advanced AI models and developer tools." },
                { icon: Code2, label: t('developer.eliteTalent'), text: "Direct pipeline to the most skilled software engineers across 54 countries." },
                { icon: Globe, label: t('developer.panAfricanReach'), text: "A localized approach to AI that understands the nuances of African markets." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-slate-950/50 rounded-3xl border border-white/5 text-left space-y-4 group hover:border-[#FFD700]/30 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-black text-white uppercase tracking-widest text-xs">{item.label}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 1: No Licensing Barriers */}
        <section className="mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">{t('developer.plugPlayTitle').split('Plug and Play').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-[#008752]">Plug and Play</span>}
                  </React.Fragment>
                ))}</h2>
                <div className="h-2 w-24 bg-[#008752] rounded-full" />
              </div>
              
              <div className="space-y-6">
                <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-3xl space-y-4">
                  <div className="flex items-center gap-3 text-red-400 font-black uppercase tracking-widest text-xs">
                    <AlertCircle size={16} />
                    {t('developer.regulatoryChallenge')}
                  </div>
                  <ul className="space-y-4 text-slate-300 font-medium">
                    {(t('developer.regulatoryPoints', { returnObjects: true }) as string[]).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 bg-[#008752]/10 border border-[#008752]/20 rounded-3xl space-y-4">
                  <div className="flex items-center gap-3 text-[#008752] font-black uppercase tracking-widest text-xs">
                    <CheckCircle2 size={16} />
                    {t('developer.solutionTitle')}
                  </div>
                  <p className="text-slate-300 font-medium leading-relaxed text-sm md:text-base">
                    {t('developer.solutionDesc')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#008752]/20 to-transparent rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0" />
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img 
                  src={images.developer} 
                  alt={t('developer.ethiopianDev')} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/10 flex items-center gap-2">
                      <img src={images.gebeyaLogo} alt="G" className="h-3" />
                      {t('developer.gebeyaPartner')}
                    </div>
                    <span className="px-3 py-1 bg-[#008752]/80 backdrop-blur-md rounded-full text-[10px] font-bold">{t('developer.addisAbaba')}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white leading-tight">{t('developer.empoweredBy')} <span className="text-[#FFD700]">Gebeya AI</span></h3>
                  <p className="text-sm text-slate-300 font-medium mt-2">
                    {t('developer.eliteInfra')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Real World Consumer Impact */}
        <section className="mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-[#FFD700]/20 to-transparent rounded-[3rem] rotate-3 transition-transform group-hover:rotate-0" />
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img 
                  src={images.consumer} 
                  alt={t('developer.congoleseConsumer')} 
                  className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#EF3340]/80 backdrop-blur-md rounded-full text-[10px] font-bold text-white">{t('developer.kinshasa')}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white leading-tight">{t('developer.deployedFrom')} <span className="text-[#FFD700]">{t('developer.addisToKinshasa')}</span></h3>
                  <p className="text-sm text-slate-300 font-medium mt-2">
                    {t('developer.realWorldChallenges')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">{t('developer.beyondAcquisition').split('Acquisition').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-[#FFD700]">Acquisition</span>}
                  </React.Fragment>
                ))}</h2>
                <div className="h-2 w-24 bg-[#FFD700] rounded-full" />
              </div>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                {t('developer.dayOne')}
              </p>
              <div className="space-y-4">
                {[
                  { icon: Users, title: t('developer.instantAccess'), desc: t('developer.instantAccessDesc') },
                  { icon: Scale, title: t('developer.complianceService'), desc: t('developer.complianceDesc') },
                  { icon: Coins, title: t('developer.revenueSharing'), desc: t('developer.revenueDesc') }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-slate-900/40 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#FFD700]">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Institutional Bridges */}
        <section className="mb-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">{t('developer.institutionalBridges').split('Bridges').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-[#EF3340]">Bridges</span>}
                  </React.Fragment>
                ))}</h2>
                <div className="h-2 w-24 bg-[#EF3340] rounded-full" />
              </div>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">
                {t('developer.bridgeGap')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Interoperability", "Asset Backing", "Risk Management", "Liquidity"].map((feat) => (
                  <div key={feat} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 font-bold text-xs text-white">
                    <CheckCircle2 size={14} className="text-[#008752]" />
                    {feat}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                <img 
                  src={images.institution} 
                  alt="Financial Institution" 
                  className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold border border-white/10 text-white">{t('developer.nairobiInfra')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* APIs Section */}
        <div className="mb-48 p-8 md:p-20 bg-slate-900/50 rounded-[4rem] border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#008752]/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
          <div className="relative z-10 text-white">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{t('developer.powerfulApis').split('APIs').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="text-[#008752]">APIs</span>}
                  </React.Fragment>
                ))}</h2>
                <p className="text-lg text-slate-400 font-medium">{t('developer.apiSubtitle')}</p>
              </div>
              <button className="flex items-center gap-2 text-[#008752] font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                {t('developer.exploreDocs')} <ArrowRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {apis.map((api, idx) => (
                <div key={idx} className="p-6 bg-slate-950/50 border border-slate-800 rounded-3xl hover:border-[#008752]/40 transition-all">
                  <api.icon className="text-[#FFD700] mb-4" size={20} />
                  <h4 className="text-[10px] font-black text-[#FFD700] uppercase tracking-widest mb-2">{api.category}</h4>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{api.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#008752] to-[#005a37] rounded-[4rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden shadow-2xl"
        >
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white">{t('developer.ctaTitle')}</h2>
          <Button size="lg" className="h-16 px-16 bg-white text-[#008752] rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 shadow-xl group">
            {t('common.becomePartner')} <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}