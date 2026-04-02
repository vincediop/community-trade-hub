import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Nfc, 
  Hash, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  ShoppingBag,
  CreditCard,
  UserCheck,
  Building2,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function ShopPage() {
  const [selectedMethod, setSelectedMethod] = useState<'app' | 'nfc' | 'ussd' | 'bnpl'>('app');
  const { t } = useTranslation();

  const paymentMethods = [
    { 
      id: 'app', 
      title: t('shop.methods.app.title'), 
      icon: <Smartphone className="text-[#008752]" size={24} />,
      desc: t('shop.methods.app.desc')
    },
    { 
      id: 'nfc', 
      title: t('shop.methods.nfc.title'), 
      icon: <Nfc className="text-[#FFD700]" size={24} />,
      desc: t('shop.methods.nfc.desc')
    },
    { 
      id: 'ussd', 
      title: t('shop.methods.ussd.title'), 
      icon: <Hash className="text-[#EF3340]" size={24} />,
      desc: t('shop.methods.ussd.desc')
    },
    { 
      id: 'bnpl', 
      title: t('shop.methods.bnpl.title'), 
      icon: <Zap className="text-[#FFD700]" size={24} />,
      desc: t('shop.methods.bnpl.desc')
    }
  ];

  const journeySteps = [
    {
      title: t('shop.journey.step1.title'),
      desc: t('shop.journey.step1.desc'),
      icon: <ShoppingBag className="text-[#008752]" size={20} />
    },
    {
      title: t('shop.journey.step2.title'),
      desc: t('shop.journey.step2.desc'),
      icon: <CreditCard className="text-[#FFD700]" size={20} />
    },
    {
      title: t('shop.journey.step3.title'),
      desc: t('shop.journey.step3.desc'),
      icon: <UserCheck className="text-[#EF3340]" size={20} />
    },
    {
      title: t('shop.journey.step4.title'),
      desc: t('shop.journey.step4.desc'),
      icon: <Building2 className="text-[#008752]" size={20} />
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 md:px-6 bg-slate-950 text-white selection:bg-[#008752]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008752]/10 border border-[#008752]/20 text-[#008752] text-[10px] font-black uppercase tracking-[0.2em]">
              <div className="w-2 h-2 rounded-full bg-[#008752] animate-pulse" />
              {t('shop.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white uppercase">
              {t('shop.title').split('Community, Any time').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#FFD700]">Community, Any time</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
              {t('shop.desc')}
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-[#008752] hover:bg-[#00A86B] text-white rounded-2xl font-black uppercase tracking-widest text-xs h-14 px-8 shadow-xl shadow-[#008752]/20">
                {t('shop.joinMerchant')}
              </Button>
              <Button size="lg" variant="outline" className="border-slate-800 text-white rounded-2xl font-black uppercase tracking-widest text-xs h-14 px-8 hover:bg-slate-900">
                {t('shop.findShops')}
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#008752]/20 via-[#FFD700]/10 to-transparent blur-[100px] -z-10 rounded-full" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/modern-african-payment-hero-image-533f215f-1772469919057.webp" 
                alt="Community Shopping Interaction" 
                className="w-full aspect-[4/5] object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#008752]/80 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Lagos, NG</span>
                </div>
                <h3 className="text-3xl font-black text-white leading-tight">{t('shop.empowering')}</h3>
                <p className="text-sm text-slate-300 font-medium mt-2">
                  {t('shop.modernTech')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Payment Methods Grid */}
        <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black tracking-tighter uppercase">{t('shop.versatile')}</h2>
            <p className="text-slate-400 font-medium">{t('shop.versatileSubtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((method) => (
              <motion.div 
                key={method.id}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedMethod(method.id as any)}
                className={`p-8 rounded-[2.5rem] border transition-all cursor-pointer group ${
                  selectedMethod === method.id 
                  ? 'bg-slate-900 border-[#008752] shadow-lg shadow-[#008752]/10' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  selectedMethod === method.id ? 'bg-[#008752]/20' : 'bg-slate-950'
                }`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">
                  {method.desc}
                </p>
                <div className="flex items-center gap-2 text-[#008752] font-black uppercase tracking-widest text-[10px]">
                  {t('common.learnMore')} <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Customer Journey */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/5 blur-[100px] -mr-48 -mt-48 rounded-full" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
                  {t('shop.journey.title')} <br />
                  <span className="text-[#EF3340]">{t('shop.journey.subtitle')}</span>
                </h2>
                <p className="text-lg text-slate-400 font-medium leading-relaxed">
                  {t('shop.journey.desc')}
                </p>
              </div>
              <div className="space-y-8">
                {journeySteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-white font-black group-hover:border-[#EF3340]/40 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg mb-1">{step.title}</h4>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="p-10 bg-slate-950 rounded-[3rem] border border-white/5 space-y-8 shadow-2xl relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#008752] flex items-center justify-center font-bold">MTB</div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-400">{t('shop.terminal.id')}</p>
                      <p className="font-bold text-white">#8821-MZ</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#008752]/10 border border-[#008752]/20 text-[#008752] text-[10px] font-black uppercase">
                    {t('shop.terminal.connected')}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{t('shop.terminal.transactionAmount')}</p>
                    <p className="text-4xl font-black text-white">1,250.00 <span className="text-sm text-slate-500">MZN</span></p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-400">
                      <span>{t('shop.terminal.customer')}</span>
                      <span className="text-white">Alex Rivera</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-400">
                      <span>{t('shop.terminal.method')}</span>
                      <span className="text-[#FFD700]">NFC Contactless</span>
                    </div>
                    <div className="h-px bg-slate-800" />
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-[#008752]">
                      <span>{t('common.status')}</span>
                      <span className="flex items-center gap-2"><CheckCircle2 size={12} /> {t('common.approved')}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full h-14 bg-[#EF3340] hover:bg-[#D62828] text-white rounded-2xl font-black uppercase tracking-widest text-xs">
                  {t('common.downloadReceipt')}
                </Button>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD700]/10 blur-3xl rounded-full" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#008752]/10 blur-3xl rounded-full" />
            </div>
          </div>
        </div>

        {/* BNPL Focus Section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/african-community-commerce-image-4ae6172f-1772469919032.webp" 
              alt="Community Commerce Network" 
              className="w-full aspect-video object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] text-[10px] font-black uppercase tracking-[0.2em]">
              <Zap size={14} />
              {t('shop.growthEngine.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-tight">
              {t('shop.growthEngine.title')} <span className="text-[#FFD700]">{t('shop.growthEngine.subtitle')}</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              {t('shop.growthEngine.desc')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                 <p className="text-2xl font-black text-[#008752]">0%</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t('shop.growthEngine.interestRate')}</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                 <p className="text-2xl font-black text-[#FFD700]">30 Days</p>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{t('shop.growthEngine.repaymentWindow')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 bg-gradient-to-br from-[#008752] to-[#005a37] rounded-[4rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-white/5 mix-blend-overlay opacity-50" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-tight">{t('shop.cta.title')} <br />{t('shop.cta.subtitle')}</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <Button size="lg" className="h-16 px-12 bg-white text-[#008752] hover:bg-slate-50 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl">
              {t('common.getMagicBox')}
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 border-white/20 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-sm">
              {t('common.talkSales')}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}