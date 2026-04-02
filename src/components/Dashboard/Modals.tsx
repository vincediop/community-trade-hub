import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, QrCode, ShieldCheck, Fingerprint, Search } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SendModal({ isOpen, onClose }: ModalProps) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { t } = useTranslation();

  const handleSend = () => {
    if (!amount || !recipient) return;
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      toast.success(`${t('dashboard.modals.send.success')} \u20ac${amount} to ${recipient}`, {
          description: "Trade finalized with 0 fees.",
          icon: <ShieldCheck className="text-white" size={20} />,
          style: { background: '#008752', color: '#fff' }
      });
      setAmount('');
      setRecipient('');
    }, 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('dashboard.send') + " Capital"}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{t('dashboard.modals.send.recipient')}</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
            <input 
                type="text" 
                placeholder={t('dashboard.modals.send.recipientPlaceholder')}
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl outline-none focus:border-[#008752] transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{t('dashboard.modals.send.amount')}</label>
          <input 
            type="number" 
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-4 bg-slate-900 border border-slate-800 rounded-xl text-2xl font-bold outline-none focus:border-[#008752] transition-colors"
          />
          <div className="flex justify-between text-[10px] font-bold text-slate-500">
            <span>{t('dashboard.modals.send.fee')}: \u20ac0.00</span>
            <span>{t('dashboard.modals.send.available')}: \u20ac840.50</span>
          </div>
        </div>

        <button 
            disabled={isProcessing || !amount || !recipient}
            onClick={handleSend}
            className="w-full py-4 bg-[#008752] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#008752]/90 transition-all disabled:opacity-50 disabled:grayscale"
        >
            {isProcessing ? t('dashboard.modals.send.processing') : t('dashboard.send') + ' Capital'}
            {!isProcessing && <Send size={20} />}
        </button>
      </div>
    </Modal>
  );
}

export function ReceiveModal({ isOpen, onClose }: ModalProps) {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('dashboard.qrPay')}>
      <div className="flex flex-col items-center gap-8 py-4">
        <div className="p-4 bg-white rounded-2xl shadow-2xl">
            <QrCode size={200} className="text-slate-950" />
        </div>
        <div className="text-center space-y-2">
            <p className="font-bold text-xl">Alex Rivera</p>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-black">Member ID: MTB-GHS-49102</p>
        </div>
        <div className="w-full p-4 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-xl flex items-center gap-3">
            <Fingerprint size={24} className="text-[#FFD700]" />
            <p className="text-xs text-slate-300">{t('dashboard.modals.receive.instruction')}</p>
        </div>
      </div>
    </Modal>
  );
}

export function JoinNetworkModal({ isOpen, onClose }: ModalProps) {
    const [code, setCode] = useState('');
    const [isJoining, setIsJoining] = useState(false);
    const { t } = useTranslation();

    const handleJoin = () => {
        if (!code) return;
        setIsJoining(true);
        setTimeout(() => {
            setIsJoining(false);
            onClose();
            toast.success(t('dashboard.modals.join.success'), {
                description: "Welcome to the community economy.",
                style: { background: '#008752', color: '#fff' }
            });
            setCode('');
        }, 1500);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={t('common.joinNetwork')}>
            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{t('dashboard.modals.join.inviteCode')}</label>
                    <input 
                        type="text" 
                        placeholder="MTB-XXXX-XXXX"
                        value={code}
                        onChange={(e) => setCode(e.target.value.toUpperCase())}
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl outline-none focus:border-[#FFD700] transition-colors text-center font-mono text-xl"
                    />
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                    {t('dashboard.modals.join.desc')}
                </p>
                <button 
                    disabled={isJoining || !code}
                    onClick={handleJoin}
                    className="w-full py-4 bg-[#FFD700] text-slate-950 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#FFD700]/90 transition-all disabled:opacity-50"
                >
                    {isJoining ? t('dashboard.modals.join.processing') : t('common.joinPlatform')}
                </button>
            </div>
        </Modal>
    );
}

function Modal({ isOpen, onClose, title, children }: any) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-[#008752]/10"
          >
            <div className="px-6 py-6 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold">{title}</h3>
              <button onClick={onClose} className="p-2 hover:bg-slate-900 rounded-lg text-slate-500 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}