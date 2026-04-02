import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  ChevronRight, 
  Smartphone, 
  Fingerprint, 
  Lock, 
  CheckCircle2, 
  Truck, 
  Wallet, 
  Globe, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRightLeft,
  Info,
  Users
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function OnlinePaymentPage() {
  const { t } = useTranslation();
  
  const steps = [
    {
      title: t('onlinePayment.steps.step1.title'),
      description: t('onlinePayment.steps.step1.desc'),
      icon: <ShoppingBag className="text-blue-500" />
    },
    {
      title: t('onlinePayment.steps.step2.title'),
      description: t('onlinePayment.steps.step2.desc'),
      icon: <Globe className="text-[#FFD700]" />
    },
    {
      title: t('onlinePayment.steps.step3.title'),
      description: t('onlinePayment.steps.step3.desc'),
      icon: <Fingerprint className="text-[#EF3340]" />
    },
    {
      title: t('onlinePayment.steps.step4.title'),
      description: t('onlinePayment.steps.step4.desc'),
      icon: <Zap className="text-[#008752]" />
    },
    {
      title: t('onlinePayment.steps.step5.title'),
      description: t('onlinePayment.steps.step5.desc'),
      icon: <CheckCircle2 className="text-blue-400" />
    },
    {
      title: t('onlinePayment.steps.step6.title'),
      description: t('onlinePayment.steps.step6.desc'),
      icon: <ArrowRightLeft className="text-purple-400" />
    }
  ];

  const authMethods = [
    { method: "In-App Approval", works: "Push notification to Helloopass app \u2192 Customer approves with fingerprint or face ID" },
    { method: "PIN Entry", works: "Customer enters their Helloopass PIN on the payment page" },
    { method: "OTP (SMS)", works: "One-time password sent to registered phone number \u2192 Customer enters code" }
  ];

  const comparison = [
    { method: "Wallet Balance", works: "Direct deduction from Helloopass wallet", requiresApp: "Yes (for approval)", bestFor: "Everyday online purchases" },
    { method: "BNPL", works: "Buy now, pay later at end of week/month", requiresApp: "Yes", bestFor: "Customers with good reputation" },
    { method: "NFC Card", works: "\u274c Not available online", requiresApp: "N/A", bestFor: "Physical in-person tap payments only" }
  ];

  const benefits = [
    { title: "Fast", description: "Under 10 seconds from click to confirmation", icon: <Clock size={18} /> },
    { title: "Secure", description: "Multiple authentication layers; no sharing of bank details", icon: <ShieldCheck size={18} /> },
    { title: "Community Choice", description: "Customer chooses which community wallet to use", icon: <Users size={18} /> },
    { title: "BNPL Online", description: "Eligible customers can buy now, pay later even on websites", icon: <Zap size={18} /> },
    { title: "Low Cost", description: "Much lower fees than cards or traditional gateways", icon: <Wallet size={18} /> },
    { title: "Instant Settlement", description: "Merchant gets funds immediately, not days later", icon: <CheckCircle2 size={18} /> },
    { title: "No Chargebacks", description: "Funds are settled; no reversal risk like credit cards", icon: <Lock size={18} /> }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-slate-950 text-slate-100 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#008752]/10 border border-[#008752]/20 text-[#008752] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Globe size={14} />
            {t('onlinePayment.badge')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            {t('onlinePayment.title').split('with Helloopass').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <br />}
                {i < arr.length - 1 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008752] via-[#FFD700] to-[#EF3340]">with Helloopass</span>}
              </React.Fragment>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto italic"
          >
            {t('onlinePayment.desc')}
          </motion.p>
        </section>

        {/* Customer Images Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/angolan-customer-online-shopping-1-34902a95-1772470783653.webp" 
              alt="Angolan customer using smartphone for online payment" 
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">{t('onlinePayment.luandaTitle')}</p>
              <p className="text-slate-300 text-sm">{t('onlinePayment.luandaDesc')}</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/angolan-customer-online-shopping-2-5cea0ef6-1772470786145.webp" 
              alt="Angolan professional completing online checkout" 
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-bold text-lg">{t('onlinePayment.modernBusiness')}</p>
              <p className="text-slate-300 text-sm">{t('onlinePayment.modernBusinessDesc')}</p>
            </div>
          </motion.div>
        </section>

        {/* Step by Step Guide */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">{t('onlinePayment.journeyTitle')}</h2>
            <p className="text-slate-400">{t('onlinePayment.journeySubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-[#008752]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Authentication Methods */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">{t('onlinePayment.authTitle')}</h2>
            <p className="text-slate-400">{t('onlinePayment.authDesc')}</p>
            
            <div className="space-y-4">
              {authMethods.map((auth, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-[#FFD700] font-bold mb-1">{auth.method}</h4>
                  <p className="text-slate-400 text-sm">{auth.works}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex gap-3 items-start">
              <Info className="text-amber-500 shrink-0 mt-0.5" size={18} />
              <p className="text-amber-500/90 text-sm">
                <strong>{t('common.status')}:</strong> {t('onlinePayment.nfcNote')}
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-[40px] border border-slate-800 space-y-8">
            <h3 className="text-2xl font-bold text-center">{t('onlinePayment.realExample')}</h3>
            <div className="space-y-6">
              {[
                { s: 1, text: "James buys a phone for 50,000 KES on a Helloopass-integrated marketplace." },
                { s: 2, text: "At checkout, he selects Helloopass and his 'Kilimo Farmers Community'." },
                { s: 3, text: "His phone receives a push notification. He approves with fingerprint." },
                { s: 4, text: "Wallet balance is verified. Payment processes instantly." },
                { s: 5, text: "He gets an SMS: 'Payment successful. Your phone will arrive in 3 days.'" },
                { s: 6, text: "The merchant receives 50,000 KES in their wallet immediately." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#008752] text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-1">
                    {item.s}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{t('onlinePayment.comparisonTitle')}</h2>
            <p className="text-slate-400 mt-2">{t('onlinePayment.comparisonSubtitle')}</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300 uppercase tracking-widest">Method</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300 uppercase tracking-widest">How It Works</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300 uppercase tracking-widest">Requires App</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-slate-300 uppercase tracking-widest">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {comparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#FFD700]">{item.method}</td>
                    <td className="px-6 py-4 text-slate-400 text-sm">{item.works}</td>
                    <td className="px-6 py-4 text-slate-400 text-sm">{item.requiresApp}</td>
                    <td className="px-6 py-4 text-slate-300 font-medium">{item.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Visual Steps */}
        <section className="bg-[#008752]/5 rounded-[40px] border border-[#008752]/10 p-10 md:p-16 text-center space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">{t('onlinePayment.customerSees')}</h2>
            <p className="text-slate-400">{t('onlinePayment.customerSeesSubtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Select Helloopass",
              "Choose Community",
              "Confirm Amount",
              "Authenticate",
              "Success Screen"
            ].map((v, idx) => (
              <React.Fragment key={idx}>
                <div className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-2xl font-bold text-sm">
                  {v}
                </div>
                {idx < 4 && <ChevronRight className="text-slate-700 self-center hidden md:block" />}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold">{t('onlinePayment.keyBenefits')}</h2>
            <p className="text-slate-400 mt-2">{t('onlinePayment.keyBenefitsSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-[#008752]/10 text-[#008752] rounded-xl flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="font-bold mb-2">{benefit.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA/Quote */}
        <section className="bg-gradient-to-br from-[#008752] to-slate-900 rounded-[40px] p-12 text-center text-white space-y-6">
          <h2 className="text-3xl font-black italic">"{t('onlinePayment.quote')}"</h2>
          <p className="text-[#FFD700] font-bold tracking-widest uppercase text-sm">{t('onlinePayment.empowering')}</p>
        </section>
      </div>
    </div>
  );
}