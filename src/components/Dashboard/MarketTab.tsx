import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart,
  BarChart3,
  ShieldCheck,
  Search,
  Filter,
  Users
} from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface MarketTabProps {
  bonusBalance: number;
  onSupport: (name: string, cost: number) => void;
}

export function MarketTab({ bonusBalance, onSupport }: MarketTabProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const { t } = useTranslation();

  const handleSupportClick = (name: string, cost: number) => {
    if (bonusBalance >= cost) {
      onSupport(name, cost);
      toast.success(`Allocated ${cost} Bonus to ${name}'s project!`, {
        description: "You'll receive profit shares upon completion.",
        style: { background: '#008752', color: '#fff', border: 'none' }
      });
    } else {
      toast.error(t('dashboard.market.insufficient'), {
        description: 'Complete more trades to earn bonuses!',
        style: { background: '#EF3340', color: '#fff', border: 'none' }
      });
    }
  };

  const categories = ['All', 'Agriculture', 'Logistics', 'Retail', 'Transport'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <div className="bg-[#008752]/10 border border-[#008752]/20 p-8 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 blur-[80px] rounded-full -z-0" />
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{t('dashboard.market.title')}</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              {t('dashboard.market.desc').split('Social Capital').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && <span className="text-[#FFD700] font-bold">Social Capital</span>}
                </React.Fragment>
              ))}
            </p>
            <div className="flex gap-4">
              <div className="bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800">
                <span className="text-xs text-slate-500 block text-uppercase font-black">{t('dashboard.availableSocialCapital')}</span>
                <span className="text-xl font-bold text-[#FFD700]">{bonusBalance.toFixed(2)}</span>
              </div>
              <div className="bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800">
                <span className="text-xs text-slate-500 block text-uppercase font-black">{t('dashboard.avgMemberRoi')}</span>
                <span className="text-xl font-bold text-[#008752]">12.5%</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-48 shrink-0">
             <BarChart3 size={120} className="text-[#008752]/30" />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
         <div className="flex items-center gap-4 w-full sm:w-auto">
           <div className="relative flex-1 sm:w-64">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
             <input 
              type="text" 
              placeholder={t('dashboard.searchProjects')} 
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm focus:border-[#008752] outline-none transition-colors"
             />
           </div>
           <button className="p-2 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
             <Filter size={18} className="text-slate-400" />
           </button>
         </div>
         <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
           {categories.map(cat => (
             <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                activeFilter === cat 
                ? 'bg-[#008752] text-white' 
                : 'bg-slate-900 text-slate-500 hover:text-slate-300 border border-slate-800'
              }`}
             >
               {cat}
             </button>
           ))}
         </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <FundingRequest 
          name="Kojo Mensah"
          category="Agriculture"
          project="Bulk Fertilizer Purchase"
          amount={`\u20ac2,500 ${t('dashboard.market.requested')}`}
          funded={`85% ${t('dashboard.market.funded')}`}
          profitShare="15% of Sale Profit"
          rating="A+"
          bonusCost={50}
          onSupport={() => handleSupportClick('Kojo Mensah', 50)}
        />
        <FundingRequest 
          name="Sarah Johnson"
          category="Logistics"
          project="Delivery Motorbike Repair"
          amount={`\u20ac800 ${t('dashboard.market.requested')}`}
          funded={`42% ${t('dashboard.market.funded')}`}
          profitShare="10% of Daily Income"
          rating="B"
          bonusCost={25}
          onSupport={() => handleSupportClick('Sarah Johnson', 25)}
        />
        <FundingRequest 
          name="Elena Rossi"
          category="Retail"
          project="Textile Stock Expansion"
          amount={`\u20ac1,200 ${t('dashboard.market.requested')}`}
          funded={`61% ${t('dashboard.market.funded')}`}
          profitShare="8% of Profit"
          rating="A"
          bonusCost={40}
          onSupport={() => handleSupportClick('Elena Rossi', 40)}
        />
        <FundingRequest 
          name="Taxi Collective"
          category="Transport"
          project="New Vehicle Acquisition"
          amount={`\u20ac15,000 ${t('dashboard.market.requested')}`}
          funded={`12% ${t('dashboard.market.funded')}`}
          profitShare="20% Monthly Yield"
          rating="A+"
          bonusCost={100}
          onSupport={() => handleSupportClick('Taxi Collective', 100)}
        />
      </div>
    </motion.div>
  );
}

function FundingRequest({ name, category, project, amount, funded, profitShare, rating, bonusCost, onSupport }: any) {
  const { t } = useTranslation();
  const percent = parseInt(funded);
  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col h-full hover:border-slate-600 transition-colors group">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[#008752]">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-sm">{name}</h4>
            <div className="flex items-center gap-1 text-[10px] text-[#008752] font-black uppercase">
              <ShieldCheck size={10} /> {t('common.approved')}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="px-2 py-1 rounded bg-slate-800 border border-slate-700 text-[10px] font-black text-slate-400 group-hover:bg-slate-700 transition-colors uppercase">
            Rating: <span className="text-white">{rating}</span>
          </div>
          <span className="text-[9px] font-black text-slate-600 uppercase tracking-tighter">{category}</span>
        </div>
      </div>
      
      <h5 className="font-bold text-lg mb-2 tracking-tight">{project}</h5>
      <p className="text-sm text-slate-400 mb-6 flex-1 line-clamp-2">Join {name.split(' ')[0]}'s growth pool to fulfill verified community demand with high yield.</p>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
          <span className="text-slate-500">{amount}</span>
          <span className="text-[#008752]">{funded}</span>
        </div>
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            className="h-full bg-[#008752]"
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-slate-500 text-[10px] font-black uppercase">{t('dashboard.market.projectYield')}</span>
          <span className="text-[#FFD700] font-bold">{profitShare}</span>
        </div>
      </div>

      <button 
        onClick={onSupport}
        className="w-full py-3 bg-[#FFD700]/10 text-[#FFD700] rounded-xl font-bold hover:bg-[#FFD700] hover:text-slate-950 transition-all border border-[#FFD700]/20 text-sm flex items-center justify-center gap-2"
      >
        <Heart size={16} /> {t('common.approved').split(' ')[0]} ({bonusCost} Bonus)
      </button>
    </div>
  );
}