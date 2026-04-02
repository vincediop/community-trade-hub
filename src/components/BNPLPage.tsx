import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Users, 
  Landmark, 
  ShieldCheck, 
  ArrowRight, 
  ShoppingBag, 
  CheckCircle2, 
  XCircle,
  Smartphone,
  ShieldAlert,
  Settings
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function BNPLPage() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const comparisonData = [
    { factor: t('bnplPage.factors.whoDecides'), bank: 'Bank committee', bnpl: 'Algorithm', helloopass: 'The community' },
    { factor: t('bnplPage.factors.collateral'), bank: 'Physical assets', bnpl: 'None (high fees)', helloopass: 'Reputation + merchant' },
    { factor: t('bnplPage.factors.creditBasis'), bank: 'Credit score', bnpl: 'Risk score', helloopass: 'Trade history + trust' },
    { factor: t('bnplPage.factors.useFunds'), bank: 'Cash', bnpl: 'Any purchase', helloopass: 'Trade only' },
    { factor: t('bnplPage.factors.merchantRole'), bank: 'Passive', bnpl: 'Passive', helloopass: 'Active decider' },
    { factor: t('bnplPage.factors.riskBearer'), bank: 'Bank', bnpl: 'Provider', helloopass: 'Merchant + Community' },
    { factor: t('bnplPage.factors.cashFlow'), bank: 'Bank profits', bnpl: 'High fees', helloopass: 'Instant liquidity' },
    { factor: t('bnplPage.factors.informalAccess'), bank: 'Very low', bnpl: 'Low', helloopass: 'High' },
    { factor: t('bnplPage.factors.culturalFit'), bank: 'Foreign', bnpl: 'Foreign', helloopass: 'Built for Africa' }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-[10px] font-black uppercase tracking-widest mb-6">
            <Zap size={14} />
            {t('bnplPage.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent leading-[1.1]">
            {t('bnplPage.title')}: <br />
            <span className="text-[#008752]">{t('bnplPage.subtitle')}</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t('bnplPage.desc')}
          </p>
        </motion.div>

        {/* Section 1: Comparison Models */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          <motion.div variants={itemVariants} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                <Landmark size={20} />
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight">{t('bnplPage.traditional')}</h2>
            </div>
            <div className="space-y-4">
              {[
                { l: t('bnplPage.factors.decision'), t: 'Bank committee' },
                { l: t('bnplPage.factors.criteria'), t: 'Scores, collateral' },
                { l: t('bnplPage.factors.risk'), t: 'Centralized' },
                { l: t('bnplPage.factors.focus'), t: 'Impersonal' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col border-b border-slate-800/50 pb-3">
                  <span className="text-[10px] font-black uppercase text-slate-500 mb-1">{item.l}</span>
                  <p className="text-sm text-slate-300">{item.t}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-[#008752]/5 border border-[#008752]/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#008752]/10 flex items-center justify-center text-[#008752]">
                <Users size={20} />
              </div>
              <h2 className="text-xl font-black uppercase tracking-tight">{t('bnplPage.model')}</h2>
            </div>
            <div className="space-y-4">
              {[
                { l: t('bnplPage.factors.decision'), t: 'The community' },
                { l: t('bnplPage.factors.criteria'), t: 'Reputation, trade history' },
                { l: t('bnplPage.factors.risk'), t: 'Decentralized' },
                { l: t('bnplPage.factors.focus'), t: 'Embedded, personal' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col border-b border-[#008752]/10 pb-3">
                  <span className="text-[10px] font-black uppercase text-[#008752]/70 mb-1">{item.l}</span>
                  <p className="text-sm text-white">{item.t}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Section 2: Illustration 1 */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008752]/10 border border-[#008752]/20 text-[#008752] text-[10px] font-black uppercase tracking-widest">
                {t('bnplPage.merchantLed.badge')}
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight">
                {t('bnplPage.merchantLed.title')} <br />
                <span className="text-[#FFD700]">{t('bnplPage.merchantLed.subtitle')}</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t('bnplPage.merchantLed.desc')}
              </p>
              <div className="space-y-4">
                {(t('bnplPage.merchantLed.points', { returnObjects: true }) as string[]).map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#008752] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-slate-800">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/south-african-merchant-with-smartphone-1010323a-1772471651062.webp" 
                alt="South African Merchant" 
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-sm text-white font-medium">{t('bnplPage.merchantLed.illustrationDesc')}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Supplier Crisis */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-8 md:p-12 mb-24"
        >
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 text-center">
            {t('bnplPage.supplierCrisis.title')} <span className="text-[#EF3340]">{t('bnplPage.supplierCrisis.subtitle')}</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
                <h3 className="text-sm font-black text-red-500 mb-2 flex items-center gap-2 uppercase">
                  <ShieldAlert size={16} /> {t('bnplPage.supplierCrisis.problem.title')}
                </h3>
                <p className="text-sm text-slate-400">{t('bnplPage.supplierCrisis.problem.desc')}</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#008752]/10 border border-[#008752]/20">
                <h3 className="text-sm font-black text-[#008752] mb-2 flex items-center gap-2 uppercase">
                  <CheckCircle2 size={16} /> {t('bnplPage.supplierCrisis.solution.title')}
                </h3>
                <p className="text-sm text-slate-300">{t('bnplPage.supplierCrisis.solution.desc')}</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800">
              <h3 className="text-lg font-bold mb-4">{t('bnplPage.supplierCrisis.exampleTitle')}</h3>
              <p className="text-sm text-slate-400 italic mb-4">{t('bnplPage.supplierCrisis.exampleDesc')}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-500 line-through"><XCircle size={14} /> {t('bnplPage.supplierCrisis.waiting')}</div>
                <div className="flex items-center gap-2 text-xs text-[#008752] font-bold"><CheckCircle2 size={14} /> {t('bnplPage.supplierCrisis.paid')}</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Risk */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">{t('bnplPage.riskManagement.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { l: t('bnplPage.riskManagement.level1.label'), t: t('bnplPage.riskManagement.level1.title'), d: t('bnplPage.riskManagement.level1.desc'), i: <ShoppingBag /> },
              { l: t('bnplPage.riskManagement.level2.label'), t: t('bnplPage.riskManagement.level2.title'), d: t('bnplPage.riskManagement.level2.desc'), i: <Users /> },
              { l: t('bnplPage.riskManagement.level3.label'), t: t('bnplPage.riskManagement.level3.title'), d: t('bnplPage.riskManagement.level3.desc'), i: <ShieldCheck /> }
            ].map((r, i) => (
              <motion.div key={i} variants={itemVariants} className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
                <div className="text-[10px] font-black text-slate-500 mb-4">{r.l}</div>
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-[#008752]">{r.i}</div>
                <h3 className="text-lg font-bold mb-2">{r.t}</h3>
                <p className="text-sm text-slate-400">{r.d}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 5: Illustration 2 */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl order-2 lg:order-1">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/south-african-community-leaders-transaction-75b5adeb-1772471651352.webp" 
                alt="South African Community Leaders" 
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-sm text-white font-medium">{t('bnplPage.collectiveTrust.illustrationDesc')}</p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/20 text-[#EF3340] text-[10px] font-black uppercase tracking-widest">
                {t('bnplPage.collectiveTrust.badge')}
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter leading-tight">
                {t('bnplPage.collectiveTrust.title')} <br />
                <span className="text-[#008752]">{t('bnplPage.collectiveTrust.subtitle')}</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                {t('bnplPage.collectiveTrust.desc')}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Comparison Table */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 overflow-x-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter">{t('bnplPage.comparisonTable')}</h2>
          </div>
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="py-4 px-6 text-[10px] font-black uppercase text-slate-500">{t('bnplPage.factors.factor')}</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase text-slate-500">Bank</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase text-slate-500">BNPL</th>
                <th className="py-4 px-6 text-[10px] font-black uppercase text-[#008752]">HellOOpass</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-slate-800/50">
                  <td className="py-4 px-6 text-xs font-bold text-slate-300">{row.factor}</td>
                  <td className="py-4 px-6 text-[10px] text-slate-500">{row.bank}</td>
                  <td className="py-4 px-6 text-[10px] text-slate-500">{row.bnpl}</td>
                  <td className="py-4 px-6 text-[10px] text-white bg-[#008752]/5">{row.helloopass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#008752] p-12 rounded-[2.5rem] text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">{t('bnplPage.finalCta')}</h2>
          <button className="px-8 py-4 bg-white text-[#008752] rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2 mx-auto shadow-xl">
            {t('common.joinNetwork')} <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}