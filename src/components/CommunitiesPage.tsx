import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Sprout, 
  Car, 
  Bike, 
  Globe, 
  Palette, 
  HeartHandshake, 
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CommunitySectionProps {
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  howItWorks: string;
  empowerment: string;
  index: number;
}

const CommunitySection = ({ title, icon, image, description, howItWorks, empowerment, index }: CommunitySectionProps) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 py-20 items-center border-b border-slate-800/50 last:border-0`}
    >
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#008752]/20 to-[#FFD700]/10 border border-[#008752]/30 rounded-2xl flex items-center justify-center text-[#008752]">
            {icon}
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white">
            {title}
          </h2>
        </div>

        <div className="space-y-6">
          <div className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#008752]/30 transition-all duration-300">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#008752] mb-3 flex items-center gap-2">
              <Users size={12} />
              {t('communities.labels.theCommunity')}
            </h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#FFD700]/30 transition-all duration-300">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-3 flex items-center gap-2">
              <Zap size={12} />
              {t('communities.labels.howItWorks')}
            </h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              {howItWorks}
            </p>
          </div>

          <div className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#EF3340]/30 transition-all duration-300">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#EF3340] mb-3 flex items-center gap-2">
              <Target size={12} />
              {t('communities.labels.empowerment')}
            </h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              {empowerment}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#008752]/20 via-[#FFD700]/10 to-[#EF3340]/20 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl">
            <img 
              src={image} 
              alt={title} 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
               <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-[#FFD700] transition-colors">
                  {t('common.joinPlatform')}
                  <ArrowRight size={14} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function CommunitiesPage() {
  const { t } = useTranslation();
  const communities = [
    {
      title: t('communities.items.farmers.title'),
      icon: <Sprout size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/sustainable-farmers-cooperative-ethiopian-women-ce-28681922-1772378682159.webp",
      description: t('communities.items.farmers.desc'),
      howItWorks: t('communities.items.farmers.howItWorks'),
      empowerment: t('communities.items.farmers.empowerment')
    },
    {
      title: t('communities.items.taxi.title'),
      icon: <Car size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/collective-asset-fund-taxi-d55123a4-1772376759512.webp",
      description: t('communities.items.taxi.desc'),
      howItWorks: t('communities.items.taxi.howItWorks'),
      empowerment: t('communities.items.taxi.empowerment')
    },
    {
      title: t('communities.items.gig.title'),
      icon: <Bike size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/urban-gig-worker-collective-aef90612-1772376769188.webp",
      description: t('communities.items.gig.desc'),
      howItWorks: t('communities.items.gig.howItWorks'),
      empowerment: t('communities.items.gig.empowerment')
    },
    {
      title: t('communities.items.diaspora.title'),
      icon: <Globe size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/somali-diaspora-support-pharmacy-transaction-eacec4d0-1772378314346.webp",
      description: t('communities.items.diaspora.desc'),
      howItWorks: t('communities.items.diaspora.howItWorks'),
      empowerment: t('communities.items.diaspora.empowerment')
    },
    {
      title: t('communities.items.arts.title'),
      icon: <Palette size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/cultural-arts-and-crafts-guild-c561e904-1772376764551.webp",
      description: t('communities.items.arts.desc'),
      howItWorks: t('communities.items.arts.howItWorks'),
      empowerment: t('communities.items.arts.empowerment')
    },
    {
      title: t('communities.items.aid.title'),
      icon: <HeartHandshake size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/humanitarian-aid-and-development-corridor-e30dde2d-1772376759577.webp",
      description: t('communities.items.aid.desc'),
      howItWorks: t('communities.items.aid.howItWorks'),
      empowerment: t('communities.items.aid.empowerment')
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#008752]/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EF3340]/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full"
          >
            <ShieldCheck size={16} className="text-[#008752]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('communities.badge')}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            {t('communities.title').split('Every Collective').map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008752] via-[#FFD700] to-[#EF3340]">Every Collective</span>}
              </React.Fragment>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            {t('communities.desc')}
          </motion.p>
        </div>
      </section>

      {/* Communities List */}
      <section className="px-6 max-w-7xl mx-auto">
        {communities.map((community, index) => (
          <CommunitySection key={index} {...community} index={index} />
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative p-12 bg-gradient-to-br from-[#008752]/20 to-[#slate-950] border border-[#008752]/30 rounded-[3rem] overflow-hidden text-center space-y-8"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <TrendingUp size={120} className="text-[#FFD700]" />
            </div>
            
            <h2 className="text-4xl font-black tracking-tighter text-white">
              {t('communities.ctaTitle')}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">
              {t('communities.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-10 py-4 bg-[#008752] text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-[#008752]/20">
                {t('communities.launchButton')}
              </button>
              <button className="px-10 py-4 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                {t('communities.speakArchitect')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}