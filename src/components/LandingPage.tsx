import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box, Share2, Coins, Cpu, Fingerprint, ShieldCheck, Zap, Globe, Heart, Sparkles, Network, ZapOff, Layers, Users, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LandingPageProps {
  onEnterApp: () => void;
}

export function LandingPage({ onEnterApp }: LandingPageProps) {
  const { t } = useTranslation();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#008752]/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008752]/10 border border-[#008752]/20 text-[#008752] text-sm font-medium mb-6 uppercase tracking-wider">
              <Sparkles size={16} className="text-[#FFD700] animate-pulse" />
              {t('hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 whitespace-pre-line">
              {t('hero.title').split('Economics').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008752] via-[#FFD700] to-[#EF3340]">Economics</span>}
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              {t('hero.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onEnterApp}
                className="px-8 py-4 bg-[#008752] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#008752]/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#008752]/20"
              >
                {t('hero.launch')}
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-all">
                {t('hero.whitepaper')}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <SparklingMagicBox />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#008752]/20 blur-[80px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#EF3340]/10 blur-[80px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#EF3340]/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#008752]/5 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.2em] bg-slate-900 border border-slate-800 rounded-full text-[#FFD700]"
            >
              {t('ecosystem.badge')}
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('ecosystem.title').split('Wildfire').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#EF3340]">Wildfire</span>}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t('ecosystem.desc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <GrowthFactor 
                icon={<ZapOff className="text-[#EF3340] font-bold" />}
                title={t('ecosystem.noGatekeepers.title')}
                desc={t('ecosystem.noGatekeepers.desc')}
              />
              <GrowthFactor 
                icon={<Network className="text-[#008752] font-bold" />}
                title={t('ecosystem.networkEffects.title')}
                desc={t('ecosystem.networkEffects.desc')}
              />
              <GrowthFactor 
                icon={<TrendingUp className="text-[#FFD700] font-bold" />}
                title={t('ecosystem.selfSustaining.title')}
                desc={t('ecosystem.selfSustaining.desc')}
              />
              <GrowthFactor 
                icon={<Layers className="text-[#008752] font-bold" />}
                title={t('ecosystem.modular.title')}
                desc={t('ecosystem.modular.desc')}
              />
              <GrowthFactor 
                icon={<Users className="text-[#FFD700] font-bold" />}
                title={t('ecosystem.incentivized.title')}
                desc={t('ecosystem.incentivized.desc')}
              />
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#008752]/20 via-[#FFD700]/10 to-[#EF3340]/20 blur-3xl rounded-full" />
              <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden border border-slate-800 shadow-2xl group">
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/human-inspired-ecosystem-growth-0acc5ceb-1772374761133.webp" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Human Inspired Ecosystem" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl">
                  <p className="text-sm font-bold text-white">"{t('ecosystem.quote')}"</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-widest">{t('ecosystem.architecture')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Interactive */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">{t('features.title')}</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">{t('features.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <InteractiveFeature 
                    icon={<ShieldCheck size={32} className="text-[#008752]" />}
                    title={t('features.zeroCost.title')}
                    desc={t('features.zeroCost.desc')}
                />
                <InteractiveFeature 
                    icon={<Heart size={32} className="text-[#FFD700]" />}
                    title={t('features.supportBonus.title')}
                    desc={t('features.supportBonus.desc')}
                />
                <InteractiveFeature 
                    icon={<Zap size={32} className="text-[#EF3340]" />}
                    title={t('features.bnpl.title')}
                    desc={t('features.bnpl.desc')}
                />
                <InteractiveFeature 
                    icon={<Globe size={32} className="text-[#008752]" />}
                    title={t('features.interconnection.title')}
                    desc={t('features.interconnection.desc')}
                />
            </div>
        </div>
      </section>

      {/* Tech Spotlight Section */}
      <section className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
                        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/biometric-verification-ui-dd8553e0-1772373444950.webp" className="w-full aspect-square object-cover rounded-xl mb-4" alt="Biometrics" />
                        <h4 className="font-bold flex items-center gap-2"><Fingerprint size={16} className="text-[#008752]" /> {t('landing.techSpotlight.biometrics')}</h4>
                        <p className="text-xs text-slate-500 mt-2">{t('landing.techSpotlight.biometricsDesc')}</p>
                    </div>
                    <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 mt-8">
                        <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/iot-farming-sensor-443f2903-1772373445599.webp" className="w-full aspect-square object-cover rounded-xl mb-4" alt="IoT" />
                        <h4 className="font-bold flex items-center gap-2"><Box size={16} className="text-[#FFD700]" /> {t('landing.techSpotlight.iot')}</h4>
                        <p className="text-xs text-slate-500 mt-2">{t('landing.techSpotlight.iotDesc')}</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 space-y-8">
                <h2 className="text-4xl font-bold">{t('landing.techSpotlight.title')}</h2>
                <p className="text-slate-400 leading-relaxed">
                    {t('landing.techSpotlight.desc')}
                </p>
                <ul className="space-y-4">
                    <li className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#008752]/20 flex items-center justify-center shrink-0"><ShieldCheck size={14} className="text-[#008752]" /></div>
                        <p className="text-sm"><span className="font-bold text-white">{t('landing.techSpotlight.fraudProof.title')}:</span> {t('landing.techSpotlight.fraudProof.desc')}</p>
                    </li>
                    <li className="flex gap-4">
                        <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0"><Cpu size={14} className="text-[#FFD700]" /></div>
                        <p className="text-sm"><span className="font-bold text-white">{t('landing.techSpotlight.aiRisk.title')}:</span> {t('landing.techSpotlight.aiRisk.desc')}</p>
                    </li>
                </ul>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#008752] via-[#FFD700] to-[#EF3340] rounded-3xl p-12 text-center shadow-2xl shadow-[#008752]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/community-trade-market-75c2dc0b-1772373445940.webp')] opacity-10 mix-blend-overlay object-cover" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('landing.cta.title')}</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                {t('landing.cta.desc')}
            </p>
            <button 
                onClick={onEnterApp}
                className="px-10 py-5 bg-white text-[#008752] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl active:scale-95"
            >
                {t('common.launchEconomy')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function SparklingMagicBox() {
    const { t } = useTranslation();
    const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            const newSparkle = {
                id: Date.now(),
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 8 + 4
            };
            setSparkles(prev => [...prev.slice(-10), newSparkle]);
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,135,82,0.3)] border border-slate-800 bg-slate-900/50 group">
            <motion.div
                animate={{
                    boxShadow: [
                        "0 0 20px rgba(0,135,82,0.1)",
                        "0 0 40px rgba(255,215,0,0.2)",
                        "0 0 20px rgba(239,51,64,0.1)",
                        "0 0 20px rgba(0,135,82,0.1)"
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full"
            >
                <img 
                    src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/magic-trade-box-sparkly-b83f00bd-1772374388367.webp" 
                    alt="Magic Trade Box" 
                    className="w-full aspect-[4/3] object-cover"
                />
            </motion.div>

            {/* Shimmer Overlay */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full"
                animate={{ translateX: ["100%", "-100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />

            {/* Sparkles Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <AnimatePresence>
                    {sparkles.map(sparkle => (
                        <motion.div
                            key={sparkle.id}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], rotate: [0, 90] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                position: 'absolute',
                                left: `${sparkle.x}%`,
                                top: `${sparkle.y}%`,
                                width: sparkle.size,
                                height: sparkle.size,
                            }}
                        >
                            <Sparkles className="text-[#FFD700] w-full h-full fill-[#FFD700]" />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#008752] flex items-center justify-center font-bold relative overflow-hidden group">
                            <motion.div 
                                className="absolute inset-0 bg-white/20"
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                            MTB
                        </div>
                        <div>
                            <p className="text-sm font-bold">{t('landing.stats.active')}</p>
                            <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">{t('landing.stats.groups')}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-[#FFD700] font-bold">$42M+</p>
                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">{t('landing.stats.volume')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InteractiveFeature({ icon, title, desc }: any) {
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-[#008752]/40 transition-all cursor-default group"
        >
            <div className="mb-6 p-4 bg-slate-950 rounded-2xl w-fit group-hover:scale-110 transition-transform shadow-inner">
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">{desc}</p>
        </motion.div>
    );
}

function GrowthFactor({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex gap-6 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
    >
      <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}