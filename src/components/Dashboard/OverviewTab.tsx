import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  TrendingUp, 
  Heart,
  CreditCard,
  QrCode,
  ShieldCheck,
  Zap,
  ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface OverviewTabProps {
  bonusBalance: number;
  onEnterMarket: () => void;
  onSend: () => void;
  onReceive: () => void;
}

export function OverviewTab({ bonusBalance, onEnterMarket, onSend, onReceive }: OverviewTabProps) {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('dashboard.overview')}</h1>
          <p className="text-slate-400 text-sm">{t('dashboard.overviewSub')}</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
          <ShieldCheck className="text-[#008752]" size={18} />
          <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">{t('dashboard.biometricVerified')}</span>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          label={t('dashboard.walletBalance')} 
          value="\u20ac1,240.50" 
          sub={t('dashboard.overviewTab.acrossNetworks')} 
          icon={<Wallet className="text-[#008752]" />} 
        />
        <StatCard 
          label={t('dashboard.supportMarket')} 
          value={bonusBalance.toFixed(2)} 
          sub={t('dashboard.socialCapitalSub')} 
          icon={<Heart className="text-[#FFD700]" />} 
          highlight
        />
        <StatCard 
          label={t('dashboard.bnplCredit')} 
          value="\u20ac500.00" 
          sub={t('dashboard.bnplSub')} 
          icon={<Zap className="text-[#EF3340]" />} 
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Zap size={20} className="text-[#FFD700]" />
          {t('dashboard.magicActions')}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ActionButton icon={<ArrowUpRight size={24} />} label={t('dashboard.send')} onClick={onSend} color="#008752" />
          <ActionButton icon={<ArrowDownLeft size={24} />} label={t('dashboard.receive')} onClick={onReceive} color="#FFD700" />
          <ActionButton icon={<QrCode size={24} />} label={t('dashboard.payMerchant')} onClick={() => toast.info('Scan to pay interface coming soon')} color="#EF3340" />
          <ActionButton icon={<CreditCard size={24} />} label={t('dashboard.cards')} onClick={() => toast.info('Virtual cards ready')} color="#008752" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-[#FFD700]" />
            {t('dashboard.marketPulse')}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">{t('dashboard.pooledCapital')}</span>
              <span className="text-sm font-bold">\u20ac12,450.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">{t('dashboard.activeRequests')}</span>
              <span className="text-sm font-bold">14</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">{t('dashboard.avgMemberRoi')}</span>
              <span className="text-sm font-bold text-[#008752]">+12.4%</span>
            </div>
            <button onClick={onEnterMarket} className="w-full mt-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] font-black">
              {t('dashboard.overviewTab.enterMarket')} <ChevronRight size={14} />
            </button>
          </div>
        </div>
        
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-lg font-bold">{t('dashboard.recentTrades')}</h3>
            <button className="text-[#008752] text-xs font-black uppercase hover:underline">{t('dashboard.viewAll')}</button>
          </div>
          <div className="divide-y divide-slate-800">
            <ActivityRow 
              title={t('dashboard.activity.organicFarm')} 
              sub={t('dashboard.activity.tradeTransaction')} 
              amount="-\u20ac15.00" 
              bonus="+1.50 Bonus"
              date={t('dashboard.activity.today')}
              accentColor="#008752"
            />
            <ActivityRow 
              title={t('dashboard.activity.profitShare')} 
              sub={t('dashboard.activity.assetReward')} 
              amount="+\u20ac42.30" 
              bonus={t('dashboard.activity.socialReturn')}
              date={t('dashboard.activity.yesterday')}
              positive
              accentColor="#FFD700"
            />
            <ActivityRow 
              title={t('dashboard.activity.schoolFee')} 
              sub={t('dashboard.activity.remittanceLoad')} 
              amount="-\u20ac200.00" 
              bonus="+20.00 Bonus"
              date={t('dashboard.activity.daysAgo')}
              accentColor="#EF3340"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, sub, icon, highlight }: any) {
  return (
    <div className={`p-6 rounded-2xl border transition-all ${highlight ? 'bg-slate-900 border-[#FFD700]/30 ring-1 ring-[#FFD700]/10 shadow-lg shadow-[#FFD700]/5' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-slate-400 text-xs font-black uppercase tracking-wider">{label}</span>
        <div className={`p-2 rounded-lg ${highlight ? 'bg-[#FFD700]/10' : 'bg-slate-800'}`}>{icon}</div>
      </div>
      <div className="text-2xl font-bold mb-1 tracking-tight">{value}</div>
      <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">{sub}</div>
    </div>
  );
}

function ActionButton({ icon, label, onClick, color }: any) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition-all active:scale-95 group"
    >
      <div 
        className="w-12 h-12 bg-slate-800 text-slate-300 rounded-full flex items-center justify-center border border-slate-700 transition-all group-hover:border-white/20 shadow-inner"
        style={{ color: color }}
      >
        {icon}
      </div>
      <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-slate-200 transition-colors">{label}</span>
    </button>
  );
}

function ActivityRow({ title, sub, amount, bonus, date, positive, accentColor }: any) {
  return (
    <div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
      <div className="flex gap-4 items-center">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 bg-slate-800 shadow-inner"
          style={{ color: accentColor }}
        >
          {positive ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
        </div>
        <div>
          <h4 className="font-bold text-sm tracking-tight">{title}</h4>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{sub}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-sm" style={{ color: positive ? accentColor : '#fff' }}>{amount}</div>
        <div className="text-[10px] font-black tracking-tight" style={{ color: '#FFD700' }}>{bonus}</div>
        <div className="text-[10px] text-slate-500 mt-1 font-medium">{date}</div>
      </div>
    </div>
  );
}