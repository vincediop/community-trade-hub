import React from 'react';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#008752] rounded-lg flex items-center justify-center">
                <Shield className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Helloopass<span className="text-[#008752]">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">{t('footer.platform')}</h4>
            <ul className="space-y-4 text-slate-600 text-sm font-medium">
              <li><a href="#" className="hover:text-[#008752]">{t('footer.links.clearing')}</a></li>
              <li><a href="#" className="hover:text-[#008752]">{t('footer.links.compliance')}</a></li>
              <li><a href="#" className="hover:text-[#008752]">{t('footer.links.fx')}</a></li>
              <li><a href="#" className="hover:text-[#008752]">{t('footer.links.docs')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">{t('footer.company')}</h4>
            <ul className="space-y-4 text-slate-600 text-sm font-medium">
              <li><a href="#" className="hover:text-[#008752]">{t('footer.links.about')}</a></li>
              <li><a href="#" className="hover:text-[#008752]">{t('footer.links.careers')}</a></li>
              <li><a href="#" className="hover:text-[#008752]">{t('footer.links.press')}</a></li>
              <li><a href="#" className="hover:text-[#008752]">{t('footer.links.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">{t('footer.stayUpdated')}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#008752]/10 hover:text-[#008752] transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#008752]/10 hover:text-[#008752] transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#008752]/10 hover:text-[#008752] transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium">
            \u00a9 {new Date().getFullYear()} Helloopass Technologies Inc. {t('footer.rights')}
          </p>
          <div className="flex gap-8 text-xs font-medium text-slate-400">
            <a href="#" className="hover:text-slate-600">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-slate-600">{t('footer.terms')}</a>
            <a href="#" className="hover:text-slate-600">{t('footer.security')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;