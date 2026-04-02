import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, Bell, User, Users, LogOut, Settings, ShieldCheck, Zap, ChevronDown, ChevronRight, Globe, ShoppingBag, Link, Landmark, Network, Share2, Layers, Code, CreditCard, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { ViewState } from '../App';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

export function Navbar({ setView, currentView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    toast.success(`${newLang === 'en' ? 'Language changed to English' : 'Langue changée en Français'}`, {
      style: { background: '#008752', color: '#fff' }
    });
  };

  const scrollToEcosystem = () => {
    setView('landing');
    setTimeout(() => {
      const element = document.getElementById('ecosystem');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  const showComingSoon = (feature: string) => {
    toast.info(`${feature} ${t('common.comingSoon')}`, {
      style: { background: '#008752', color: '#fff' }
    });
  };

  const howItWorksItems = [
    { 
      title: t('nav.howItWorksItems.economicCells'), 
      icon: <Network size={14} />,
      view: 'economic-cells' as ViewState
    },
    { 
      title: t('nav.howItWorksItems.communityTrading'), 
      icon: <Share2 size={14} />,
      view: 'community-trading' as ViewState
    },
    { 
      title: t('nav.howItWorksItems.payAnyShop'), 
      icon: <ShoppingBag size={14} />,
      view: 'shop' as ViewState
    },
    { 
      title: t('nav.howItWorksItems.onlinePayment'), 
      icon: <Globe size={14} />,
      view: 'online-payment' as ViewState
    },
    { 
      title: t('nav.howItWorksItems.developers'), 
      icon: <Code size={14} />,
      view: 'developers' as ViewState
    },
    { 
      title: t('nav.howItWorksItems.bnpl'), 
      icon: <Zap size={14} />,
      view: 'bnpl' as ViewState
    },
    { 
      title: t('nav.howItWorksItems.connectCommunities'), 
      icon: <Link size={14} />,
      view: 'connect-communities' as ViewState
    },
    { 
      title: t('nav.howItWorksItems.clearingHouses'), 
      icon: <Landmark size={14} />,
      view: 'automated-clearing-house' as ViewState
    }
  ];

  const isHowItWorksActive = ['economic-cells', 'community-trading', 'developers', 'bnpl', 'connect-communities', 'automated-clearing-house', 'shop', 'online-payment'].includes(currentView);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between font-black uppercase tracking-widest text-[10px]">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => setView('landing')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#008752] via-[#FFD700] to-[#EF3340] rounded-lg flex items-center justify-center font-black text-xl shadow-lg shadow-[#008752]/20 text-white transition-transform group-hover:scale-110">
              H
          </div>
          <span className="text-xl font-black tracking-tighter lowercase">ellOOpass</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setView('landing')}
            className={`transition-colors ${currentView === 'landing' ? 'text-[#FFD700]' : 'text-slate-400 hover:text-white'}`}
          >
            {t('nav.vision')}
          </button>
          
          <button 
            onClick={scrollToEcosystem}
            className="text-slate-400 hover:text-[#EF3340] transition-colors flex items-center gap-2"
          >
            <Zap size={10} className="text-[#EF3340] animate-pulse" />
            {t('nav.growth')}
          </button>
          
          <button 
            onClick={() => setView('communities')}
            className={`transition-colors ${currentView === 'communities' ? 'text-[#FFD700]' : 'text-slate-400 hover:text-white'}`}
          >
            {t('nav.communities')}
          </button>

          <button 
            onClick={() => setView('architecture')}
            className={`transition-colors flex items-center gap-2 ${currentView === 'architecture' ? 'text-[#FFD700]' : 'text-slate-400 hover:text-white'}`}
          >
            <Layers size={10} className="text-[#008752]" />
            {t('nav.architecture')}
          </button>

          {/* How It Works Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHowItWorksOpen(true)}
            onMouseLeave={() => setIsHowItWorksOpen(false)}
          >
            <button 
              className={`transition-colors flex items-center gap-1 py-4 ${isHowItWorksOpen || isHowItWorksActive ? 'text-[#FFD700]' : 'text-slate-400 hover:text-white'}`}
            >
              {t('nav.howItWorks')}
              <ChevronDown size={12} className={`transition-transform duration-300 ${isHowItWorksOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isHowItWorksOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 mt-0 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-2"
                >
                  <div className="p-2 space-y-1">
                    {howItWorksItems.map((item, idx) => (
                      <div key={idx} className="group/item">
                        <button 
                          onClick={() => {
                            if (item.view) {
                              setView(item.view);
                              setIsHowItWorksOpen(false);
                            } else {
                              showComingSoon(item.title);
                            }
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 ${currentView === item.view ? 'text-[#FFD700] bg-slate-800' : 'text-slate-400'} hover:text-white hover:bg-slate-800 rounded-lg transition-all`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[#008752] group-hover/item:scale-110 transition-transform">{item.icon}</span>
                            {item.title}
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="h-4 w-px bg-slate-800" />

          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-400 hover:text-[#FFD700] transition-colors"
          >
            <Languages size={14} className="text-[#FFD700]" />
            <span>{i18n.language.startsWith('en') ? 'FR' : 'EN'}</span>
          </button>

          <button 
            onClick={() => setView('dashboard')}
            className="px-6 py-2.5 bg-[#008752] text-white rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-[#008752]/20"
          >
            <LayoutDashboard size={14} />
            {t('nav.enterMtb')}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            >
            <div className="p-6 space-y-4 font-black uppercase tracking-widest text-[10px]">
                <button 
                    onClick={() => { setView('landing'); setIsOpen(false); }}
                    className={`block w-full text-left py-2 ${currentView === 'landing' ? 'text-[#FFD700]' : 'text-slate-400'}`}
                >
                    {t('nav.vision')}
                </button>
                <button 
                    onClick={() => { setView('communities'); setIsOpen(false); }}
                    className={`block w-full text-left py-2 ${currentView === 'communities' ? 'text-[#FFD700]' : 'text-slate-400'}`}
                >
                    {t('nav.communities')}
                </button>

                <button 
                    onClick={() => { setView('architecture'); setIsOpen(false); }}
                    className={`block w-full text-left py-2 flex items-center gap-2 ${currentView === 'architecture' ? 'text-[#FFD700]' : 'text-slate-400'}`}
                >
                    <Layers size={14} className="text-[#008752]" />
                    {t('nav.architecture')}
                </button>

                {/* Mobile Language Switcher */}
                <button 
                    onClick={() => { toggleLanguage(); setIsOpen(false); }}
                    className="flex items-center gap-2 text-slate-400 py-2"
                >
                    <Languages size={14} className="text-[#FFD700]" />
                    {i18n.language.startsWith('en') ? t('nav.switchToFrench') : t('nav.switchToEnglish')}
                </button>

                {/* Mobile How It Works */}
                <div className="space-y-2">
                  <div className="text-slate-500 pb-2 border-b border-slate-800">{t('nav.howItWorks')}</div>
                  <div className="pl-4 space-y-4 pt-2">
                    {howItWorksItems.map((item, idx) => (
                      <div key={idx}>
                        <button 
                          onClick={() => {
                            if (item.view) {
                                setView(item.view);
                                setIsOpen(false);
                            } else {
                                showComingSoon(item.title);
                            }
                          }}
                          className={`block w-full text-left ${currentView === item.view ? 'text-[#FFD700]' : 'text-slate-400'} hover:text-white flex items-center gap-2`}
                        >
                          {item.icon}
                          {item.title}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                    onClick={() => { setView('dashboard'); setIsOpen(false); }}
                    className="w-full bg-[#008752] text-white py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#008752]/20"
                >
                    <LayoutDashboard size={16} />
                    {t('nav.enterDashboard')}
                </button>
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}