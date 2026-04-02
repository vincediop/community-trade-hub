import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight, 
  Wallet, 
  ShoppingBag, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Layers, 
  Building2,
  CheckCircle2,
  Globe,
  Briefcase,
  LayoutDashboard
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CommunityTradingPage() {
  const { t } = useTranslation();
  const businessmanImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/senegalese-businessman-making-a-payment-f82f7c5b-1772382436334.webp";
  const ecosystemImg = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/community-trading-network-concept-3b6a344c-1772382436256.webp";

  const phases = [
    {
      title: "Phase 1: Community Setup & Onboarding",
      steps: [
        {
          id: "Step 0",
          name: "A Community Adopts Helloopass",
          desc: "A cooperative, traders association, or community group decides to digitize their local trading. They partner with Helloopass to launch their own branded trading platform."
        },
        {
          id: "Step 1",
          name: "Community Onboards Its Members",
          desc: "The community registers its members (farmers, buyers, sellers, merchants) onto their branded platform. Each member gets a digital wallet."
        }
      ],
      icon: <Building2 className="text-[#008752]" />
    },
    {
      title: "Phase 2: Customer Top-Up",
      steps: [
        {
          id: "Step 2",
          name: "Member Tops Up Their Wallet",
          desc: "A community member adds funds via Mobile Money, Bank transfer, or Cash at an agent. These become community trading credits."
        },
        {
          id: "Step 3",
          name: "Funds Enter the Closed Loop",
          desc: "Credits can only be used within that specific community's merchant network. Funds are for trading only within the community."
        }
      ],
      icon: <Wallet className="text-[#FFD700]" />
    },
    {
      title: "Phase 3: Spending & Benefits",
      steps: [
        {
          id: "Step 4",
          name: "Member Shops at Community Merchants",
          desc: "Members browse products from local shops, farmers, or services that belong to the same community."
        },
        {
          id: "Step 5",
          name: "Member Pays with Their Wallet",
          desc: "Instant payment via PIN or biometric. Zero transaction fees (if chosen), BNPL facilities, and exclusive promotions."
        }
      ],
      icon: <ShoppingBag className="text-[#EF3340]" />
    },
    {
      title: "Phase 4: Merchant Experience",
      steps: [
        {
          id: "Step 6",
          name: "Merchant Receives Payment",
          desc: "Merchants instantly receive funds in their wallet, available to pay suppliers or cash out."
        },
        {
          id: "Step 7",
          name: "Merchant Settles or Cashes Out",
          desc: "Only merchants have full exit options: Transfer to Bank, Mobile Money, or Cash Pickup."
        }
      ],
      icon: <TrendingUp className="text-[#008752]" />
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-950 min-h-screen text-slate-300">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#008752]/10 border border-[#008752]/20 rounded-full text-[#008752] text-[10px] font-black uppercase tracking-widest">
              <Zap size={14} />
              {t('communityTrading.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              {t('communityTrading.title').split('Community').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#FFD700]">Community</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              {t('communityTrading.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex-1">
                <div className="text-[#FFD700] font-black text-sm mb-1 uppercase tracking-widest">{t('communityTrading.engine')}</div>
                <p className="text-xs text-slate-500">{t('communityTrading.engineDesc')}</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 flex-1">
                <div className="text-[#008752] font-black text-sm mb-1 uppercase tracking-widest">{t('communityTrading.vehicle')}</div>
                <p className="text-xs text-slate-500">{t('communityTrading.vehicleDesc')}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#008752]/20 via-[#FFD700]/10 to-transparent blur-3xl rounded-full" />
            <img 
              src={businessmanImg} 
              alt="Businessman using Helloopass"
              className="relative w-full aspect-square object-cover rounded-[2rem] shadow-2xl border border-slate-800"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#008752] rounded-full flex items-center justify-center font-black text-white">AR</div>
                <div>
                  <div className="text-white font-black text-sm uppercase tracking-widest">Moussa, 35</div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase">{t('communityTrading.trader')} \u2022 Senegal</div>
                </div>
                <div className="ml-auto flex gap-1">
                  {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-[#008752] rounded-full" />)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="bg-slate-900/30 border-y border-slate-800 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{t('communityTrading.coreConcept')}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">{t('communityTrading.coreConceptDesc')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck className="text-[#008752]" />, title: t('communityTrading.whiteLabeled'), desc: t('communityTrading.whiteLabeledDesc') },
              { icon: <Users className="text-[#FFD700]" />, title: t('communityTrading.independent'), desc: t('communityTrading.independentDesc') },
              { icon: <Zap className="text-[#EF3340]" />, title: t('communityTrading.infrastructure'), desc: t('communityTrading.infrastructureDesc') },
              { icon: <Globe className="text-blue-500" />, title: t('communityTrading.closedLoop'), desc: t('communityTrading.closedLoopDesc') }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-[#008752]/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-black text-sm uppercase tracking-widest mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Flow */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">{t('communityTrading.completeFlow')}</h2>
            <p className="text-slate-400 font-medium mb-8">{t('communityTrading.completeFlowDesc')}</p>
            <div className="space-y-4">
              {phases.map((phase, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center">
                    {phase.icon}
                  </div>
                  <div className="text-[10px] font-black text-white uppercase tracking-widest">{phase.title}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {phases.flatMap(p => p.steps).map((step, i) => (
              <div key={i} className="relative p-6 bg-slate-900/20 border border-slate-800/50 rounded-3xl hover:bg-slate-900/40 transition-colors group">
                <div className="absolute top-6 right-6 text-[10px] font-black text-slate-700 uppercase tracking-widest group-hover:text-[#008752] transition-colors">{step.id}</div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#008752]" />
                  {step.name}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Illustration */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 border border-slate-800 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#008752]/5 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={ecosystemImg} 
                alt="Community Trading Ecosystem"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter">{t('communityTrading.multipleCommunities')}</h2>
              <p className="text-slate-400 font-medium">{t('communityTrading.multipleCommunitiesDesc')}</p>
              
              <div className="space-y-4">
                {[
                  { label: "Branding", val: "Each community has its own name, colors, and app look" },
                  { label: "Rules", val: "Community defines who can join and how" },
                  { label: "Separation", val: "Member of A cannot spend in Community B" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1"><ArrowRight size={14} className="text-[#008752]" /></div>
                    <div>
                      <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Example */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{t('communityTrading.threeCommunities')}</h2>
          <p className="text-slate-400 font-medium">{t('communityTrading.realWorldExample')}</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                <th className="py-4 px-6 text-left">{t('communityTrading.table.community')}</th>
                <th className="py-4 px-6 text-left">{t('communityTrading.table.type')}</th>
                <th className="py-4 px-6 text-left">{t('communityTrading.table.members')}</th>
                <th className="py-4 px-6 text-left">{t('communityTrading.table.merchants')}</th>
                <th className="py-4 px-6 text-left">{t('communityTrading.table.uniqueFeature')}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Kilimo Farmers Coop", type: "Agricultural", members: "2,000 farmers", merchants: "50 agro-vets, 30 buyers", feat: "BNPL for seeds before harvest" },
                { name: "Gikomba Traders Association", type: "Market traders", members: "800 small vendors", merchants: "200 stalls, 50 wholesalers", feat: "Bulk purchase discounts" },
                { name: "Mama's Village", type: "Women's savings group", members: "500 women", merchants: "20 local shops, 10 services", feat: "Zero fees, rotating savings pools" }
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-800/50 hover:bg-white/5 transition-colors group">
                  <td className="py-6 px-6 text-sm font-bold text-white uppercase tracking-tight">{row.name}</td>
                  <td className="py-6 px-6 text-xs text-slate-400">{row.type}</td>
                  <td className="py-6 px-6 text-xs text-slate-400">{row.members}</td>
                  <td className="py-6 px-6 text-xs text-slate-400">{row.merchants}</td>
                  <td className="py-6 px-6 text-xs text-[#008752] font-black uppercase">{row.feat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Key Design Principles */}
      <section className="bg-slate-900/30 border-y border-slate-800 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{t('communityTrading.designPrinciples')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Community Ownership", desc: "Each community owns its member relationships; Helloopass provides the rails." },
              { title: "Closed Loops", desc: "Funds stay within the community until merchants cash out." },
              { title: "No Customer Cash-Out", desc: "Members use wallets for trading only, not as bank accounts." },
              { title: "Merchant Exit", desc: "Only merchants can convert community credits to real money." },
              { title: "Separation", desc: "Communities are technically isolated; no cross-community spending." },
              { title: "Flexibility", desc: "Each community configures fees, promotions, and BNPL rules." }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
                <h3 className="text-[10px] font-black text-white uppercase tracking-widest mb-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Helloopass Provides */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">{t('communityTrading.whatWeProvide')}</h2>
            <p className="text-slate-400 font-medium">{t('communityTrading.whatWeProvideDesc')}</p>
          </div>
          <div className="bg-[#008752] px-6 py-2 rounded-full text-white text-[10px] font-black uppercase tracking-widest">Infrastructure Provider</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "White-Label Platform", icon: <Smartphone />, desc: "Each community gets their own branded app/USSD/cashier portal." },
            { title: "Payment Processing", icon: <Layers />, desc: "Handles all transactions, settlements, and reconciliations." },
            { title: "Compliance Tools", icon: <ShieldCheck />, desc: "KYC/AML adapted to each community's risk level." },
            { title: "BNPL Engine", icon: <TrendingUp />, desc: "Algorithm to assess reputation and offer credit." },
            { title: "Merchant Cash-Out", icon: <Briefcase />, desc: "Infrastructure for merchants to withdraw to bank/mobile money." },
            { title: "Analytics Dashboard", icon: <LayoutDashboard />, desc: "Community leaders see trading activity, trends, and health." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-[#FFD700] group-hover:bg-[#008752] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary CTA */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#008752] to-[#005a37] p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-[#008752]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 relative z-10 tracking-tighter">{t('communityTrading.ctaTitle')}</h2>
          <p className="text-white/80 text-lg font-medium mb-12 relative z-10 max-w-2xl mx-auto">
            {t('communityTrading.ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button className="px-8 py-4 bg-white text-[#008752] rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
              {t('common.getStarted')}
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              {t('common.watchDemo')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}