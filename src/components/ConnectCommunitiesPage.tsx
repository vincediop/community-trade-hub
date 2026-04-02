import React from 'react';
import { motion } from 'framer-motion';
import { 
  Link, 
  Users, 
  ShieldCheck, 
  Globe, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Truck, 
  CreditCard, 
  Network,
  Share2,
  Lock,
  MessageSquare,
  BadgeAlert
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function ConnectCommunitiesPage() {
  const { t } = useTranslation();
  const connectionTypes = [
    {
      title: 'One-to-One',
      description: 'Two communities connect directly to exchange goods or services.',
      icon: <ArrowRight className="text-[#008752]" size={20} />
    },
    {
      title: 'Hub-and-Spoke',
      description: 'One central community connects with multiple satellite communities.',
      icon: <Network className="text-[#FFD700]" size={20} />
    },
    {
      title: 'Network',
      description: 'Multiple communities all connected to each other in a mesh.',
      icon: <Share2 className="text-[#EF3340]" size={20} />
    },
    {
      title: 'Fully Open',
      description: 'A community open to any HellOOpass member globally.',
      icon: <Globe className="text-blue-400" size={20} />
    }
  ];

  const benefits = [
    {
      title: 'Expanded Markets',
      description: 'Members access new buyers and sellers across different communities.',
      icon: <Users size={20} />
    },
    {
      title: 'Better Prices',
      description: 'Direct trade removes middlemen, increasing margins for producers.',
      icon: <Zap size={20} />
    },
    {
      title: 'Cross-Border Trade',
      description: 'Secure transactions across countries and regions with ease.',
      icon: <Globe size={20} />
    },
    {
      title: 'Specialization',
      description: 'Communities can focus on what they do best: produce, process, or distribute.',
      icon: <CheckCircle2 size={20} />
    },
    {
      title: 'Network Effects',
      description: 'Value grows exponentially as more communities join the ecosystem.',
      icon: <Network size={20} />
    },
    {
      title: 'Continental Trade',
      description: 'Supports AfCFTA goals for a unified African free trade area.',
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 bg-slate-950 min-h-screen font-black uppercase tracking-widest text-[10px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-[#008752]/10 border border-[#008752]/20 rounded-full text-[#008752] mb-6">
            <Link size={14} />
            <span>{t('connectCommunities.badge')}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
            {t('connectCommunities.title').split('CONNECTIVITY').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008752] via-[#FFD700] to-[#EF3340]">CONNECTIVITY</span>}
              </React.Fragment>
            ))}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed mb-10 normal-case font-medium">
            {t('connectCommunities.desc')}
          </motion.p>
        </motion.section>

        {/* Core Concepts Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('connectCommunities.bilateral'), desc: t('connectCommunities.bilateralDesc'), icon: <Scale size={24} className="text-[#008752]" /> },
              { title: t('connectCommunities.control'), desc: t('connectCommunities.controlDesc'), icon: <Lock size={24} className="text-[#FFD700]" /> },
              { title: t('connectCommunities.noLimits'), desc: t('connectCommunities.noLimitsDesc'), icon: <Zap size={24} className="text-[#EF3340]" /> },
              { title: t('connectCommunities.openOption'), desc: t('connectCommunities.openOptionDesc'), icon: <Globe size={24} className="text-blue-400" /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-[#008752]/50 transition-colors group"
              >
                <div className="mb-6 bg-slate-950 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-black mb-4 tracking-tighter">{item.title}</h3>
                <p className="text-slate-400 normal-case font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Real World Example Section */}
        <section className="mb-24 bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-full text-[#FFD700] mb-8">
                <Globe size={14} />
                <span>{t('connectCommunities.scenario')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter leading-none">
                {t('connectCommunities.chadTitle')} <br />
                <span className="text-[#008752]">{t('connectCommunities.ivoryCoast')}</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { step: '01', text: 'Communities agree to connect on HellOOpass.' },
                  { step: '02', text: 'Ivory Coast distributor places order visible to Chad members.' },
                  { step: '03', text: 'Chad herder wins bid and supplies cattle.' },
                  { step: '04', text: 'DeFi Buy Goods provides transport financing.', special: true },
                  { step: '05', text: 'Cattle delivered; payment released from escrow.' },
                  { step: '06', text: 'Landing Bills provides liquidity during transit.', special: true }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className={`text-[10px] font-black ${item.special ? 'text-[#FFD700]' : 'text-[#008752]'} pt-1`}>{item.step}</span>
                    <p className={`text-xs md:text-sm font-black ${item.special ? 'text-white' : 'text-slate-300'}`}>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#008752]/5 border border-[#008752]/20 rounded-2xl">
                <p className="text-sm font-black text-[#008752]">{t('connectCommunities.result')}</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/chad-to-ivory-coast-trade-with-orange-phone-42122e68-1772392488429.webp" 
                alt="Chad to Ivory Coast trade" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent lg:block hidden" />
            </div>
          </div>
        </section>

        {/* Connection Types Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-black tracking-tighter uppercase">{t('connectCommunities.typesTitle')}</h2>
            <div className="h-px flex-1 bg-slate-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectionTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl"
              >
                <div className="mb-6">{type.icon}</div>
                <h3 className="text-base font-black mb-3 tracking-tighter">{type.title}</h3>
                <p className="text-slate-400 normal-case font-medium">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-24 bg-gradient-to-b from-slate-900 to-slate-950 p-12 rounded-[3rem] border border-slate-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tighter mb-4">{t('connectCommunities.possible')}</h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-[#008752] group-hover:bg-[#008752] group-hover:text-white transition-all duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-base font-black mb-2 tracking-tighter">{benefit.title}</h3>
                  <p className="text-slate-400 normal-case font-medium leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Governance Section */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EF3340]/10 border border-[#EF3340]/20 rounded-full text-[#EF3340] mb-8">
              <ShieldCheck size={14} />
              <span>{t('connectCommunities.governance')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tighter leading-tight">
              {t('connectCommunities.governanceTitle')}
            </h2>
            <p className="text-slate-400 normal-case font-medium mb-8 leading-relaxed">
              {t('connectCommunities.governanceDesc')}
            </p>
            <div className="space-y-4">
              {[
                { label: 'Member Access', value: 'Which members can trade', icon: <Users size={16} /> },
                { label: 'Restricted Products', value: 'Betting & Adult content never allowed', icon: <BadgeAlert size={16} className="text-[#EF3340]" /> },
                { label: 'Dispute Resolution', value: 'Standardized automated processes', icon: <MessageSquare size={16} /> },
                { label: 'Reputation', value: 'Portable between communities', icon: <CheckCircle2 size={16} /> },
                { label: 'Fee Structures', value: 'Transparent automated splits', icon: <CreditCard size={16} /> },
                { label: 'Data Sharing', value: 'Strictly defined limits', icon: <Lock size={16} /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">{item.icon}</span>
                    <span className="text-[10px] font-black text-slate-300 uppercase">{item.label}</span>
                  </div>
                  <span className="text-[10px] font-black text-[#008752] uppercase">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 p-12 rounded-[2.5rem] border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF3340]/10 blur-[100px] -z-10 group-hover:bg-[#EF3340]/20 transition-all" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#008752]/10 blur-[100px] -z-10 group-hover:bg-[#008752]/20 transition-all" />
            
            <h3 className="text-6xl font-black tracking-tighter leading-none mb-12 opacity-10">{t('connectCommunities.vision')}</h3>
            <p className="text-2xl md:text-3xl font-black tracking-tighter leading-tight italic text-white mb-12">
              {t('connectCommunities.visionQuote')}
            </p>
            <div className="h-px w-20 bg-[#FFD700] mb-8" />
            <p className="text-sm font-black text-slate-400 normal-case leading-relaxed">
              {t('connectCommunities.visionDesc')}
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}