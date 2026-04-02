import React from 'react';
import { motion } from 'framer-motion';
import { Box, ShieldCheck, Cpu, ShoppingBag, Landmark, ArrowRight, Layers, Puzzle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ArchitecturePage() {
  const { t } = useTranslation();

  const layersData = [
    {
      id: 1,
      title: t('architecture.layers.core.title'),
      icon: <Cpu className="text-[#008752]" size={32} />,
      description: t('architecture.layers.core.desc'),
      analogy: t('architecture.layers.core.analogy'),
      capabilities: [
        "Open and manage customer accounts (wallets, current accounts)",
        "Process payments (send, receive, hold money)",
        "Issue virtual and physical cards",
        "Track balances and transaction history in real-time"
      ],
      users: [
        "Banks building new digital products",
        "Fintechs needing a reliable core without building from scratch",
        "Large companies wanting to manage customer funds internally"
      ],
      color: "from-[#008752]/20 to-transparent"
    },
    {
      id: 2,
      title: t('architecture.layers.compliance.title'),
      icon: <ShieldCheck className="text-[#FFD700]" size={32} />,
      description: t('architecture.layers.compliance.desc'),
      analogy: t('architecture.layers.compliance.analogy'),
      capabilities: [
        "Verify customer identities using local IDs (e.g., National ID, passport)",
        "Screen customers against global watchlists",
        "Monitor transactions for suspicious activity automatically",
        "Generate reports for regulators without manual work"
      ],
      users: [
        "Any business handling customer money that needs to stay compliant",
        "Startups with no compliance team",
        "Traditional businesses entering regulated financial services"
      ],
      color: "from-[#FFD700]/10 to-transparent"
    },
    {
      id: 3,
      title: t('architecture.layers.embedded.title'),
      icon: <Box className="text-[#EF3340]" size={32} />,
      description: t('architecture.layers.embedded.desc'),
      analogy: t('architecture.layers.embedded.analogy'),
      capabilities: [
        "Add digital wallets to their existing app",
        "Enable in-app payments and transfers",
        "Offer lending products within their platform",
        "Provide business accounts to their suppliers or customers"
      ],
      users: [
        'E-commerce platforms wanting to offer "buy now, pay later"',
        "Ride-hailing apps wanting driver wallets",
        "Telecoms wanting mobile money-style services"
      ],
      color: "from-[#EF3340]/10 to-transparent"
    },
    {
      id: 4,
      title: t('architecture.layers.trade.title'),
      icon: <ShoppingBag className="text-[#008752]" size={32} />,
      description: t('architecture.layers.trade.desc'),
      analogy: t('architecture.layers.trade.analogy'),
      capabilities: [
        "Create digital storefronts for farmers or traders",
        "Manage group purchases and bulk orders",
        "Track goods from seller to buyer",
        "Offer loans based on trading history",
        "Build reputation scores for trust among strangers"
      ],
      users: [
        "Agricultural cooperatives digitizing crop sales",
        "Cross-border trading communities",
        "SME associations wanting to formalize trade",
        "Commodity exchanges"
      ],
      color: "from-[#008752]/10 to-transparent"
    },
    {
      id: 5,
      title: t('architecture.layers.whiteLabel.title'),
      icon: <Landmark className="text-[#FFD700]" size={32} />,
      description: t('architecture.layers.whiteLabel.desc'),
      analogy: t('architecture.layers.whiteLabel.analogy'),
      capabilities: [
        "Launch a fully branded mobile banking app",
        "Offer savings accounts, transfers, and payments",
        "Run promotions and manage customers",
        "Scale to new markets quickly"
      ],
      users: [
        "New digital banking license winners needing to launch fast",
        "Traditional banks launching a separate digital brand",
        "Telcos or retailers launching financial services under their own name"
      ],
      color: "from-[#FFD700]/10 to-transparent"
    }
  ];

  const summaryData = [
    { layer: t('architecture.summary.layer'), bestFor: t('architecture.summary.bestFor'), get: t('architecture.summary.youGet'), provide: t('architecture.summary.youProvide') },
    { layer: t('architecture.layers.core.title').split(':')[0], bestFor: "Tech-savvy builders", get: "Account management, payments, cards", provide: "Front-end app, customer experience" },
    { layer: "Compliance Shield", bestFor: "Regulated businesses", get: "KYC/AML, monitoring, reporting", provide: "Your product, your customers" },
    { layer: "Embedded Finance", bestFor: "Existing platforms", get: "APIs to add financial features", provide: "Your app, your user base" },
    { layer: "Trade Hub", bestFor: "Communities & cooperatives", get: "Marketplace + finance + trust tools", provide: "Your community, your trade network" },
    { layer: "Digital Trading (Trade-In-a-Box)", bestFor: "Fast movers", get: "Complete digital bank, ready to brand", provide: "Your brand, your marketing" },
  ];

  return (
    <div className="pt-20 pb-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-slate-400 to-[#008752] bg-clip-text text-transparent">
              {t('architecture.title')}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('architecture.subtitle')}
            </p>
          </motion.div>
        </section>

        {/* Illustration 1 */}
        <section className="mb-24">
          <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/modular-architecture-concept-09751548-1772381437697.webp" 
              alt="Modular Architecture Concept" 
              className="w-full h-[400px] object-cover opacity-60"
            />
            <div className="absolute bottom-10 left-10 z-20 max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <Puzzle className="text-[#FFD700]" size={24} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FFD700]">{t('architecture.legoPrinciple')}</span>
              </div>
              <h2 className="text-3xl font-black text-white mb-2">{t('architecture.flexibilityTitle')}</h2>
              <p className="text-slate-300 text-sm">
                {t('architecture.flexibilityDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Layers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {layersData.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-[#008752]/50 transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${layer.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-slate-950 rounded-2xl w-fit shadow-xl">
                  {layer.icon}
                </div>
                <h3 className="text-xl font-black mb-4 group-hover:text-white transition-colors">{layer.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed italic border-l-2 border-[#008752] pl-4">
                  {layer.analogy}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#008752] mb-3">Capabilities</h4>
                    <ul className="space-y-2">
                      {layer.capabilities.map((cap, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <ArrowRight size={12} className="mt-0.5 text-slate-600 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Target Audience</h4>
                    <div className="flex flex-wrap gap-2">
                      {layer.users.map((user, i) => (
                        <span key={i} className="text-[9px] font-bold px-2 py-1 bg-slate-800 text-slate-400 rounded-full border border-slate-700">
                          {user}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Illustration 2 */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/helloopass-service-ecosystem-de2fdec4-1772381437674.webp" 
              alt="Helloopass Service Ecosystem" 
              className="rounded-3xl border border-slate-800 shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#008752]/10 rounded-full border border-[#008752]/20">
              <Layers className="text-[#008752]" size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#008752]">{t('architecture.systemOverview')}</span>
            </div>
            <h2 className="text-4xl font-black">{t('architecture.choosingLayer')}</h2>
            <p className="text-slate-400 leading-relaxed">
              {t('architecture.scaleCapabilities')}
            </p>
            
            <div className="space-y-4 pt-4">
               {["Agile Deployment", "Seamless Integration", "Future-Proof Scalability"].map((benefit, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-[#008752]/20 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-[#008752]" />
                   </div>
                   <span className="text-sm font-bold text-slate-300">{benefit}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-24 overflow-x-auto">
          <div className="min-w-[800px] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800">
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('architecture.summary.layer')}</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('architecture.summary.bestFor')}</th>
                  <th className="px-8 py-6 text-[10px) font-black uppercase tracking-widest text-slate-500">{t('architecture.summary.youGet')}</th>
                  <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('architecture.summary.youProvide')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {summaryData.slice(1).map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-8 py-6">
                      <span className="text-sm font-black text-[#008752]">{row.layer}</span>
                    </td>
                    <td className="px-8 py-6 text-sm text-slate-300 font-medium">{row.bestFor}</td>
                    <td className="px-8 py-6 text-sm text-slate-400">{row.get}</td>
                    <td className="px-8 py-6 text-sm text-slate-400">{row.provide}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Modularity Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Puzzle size={120} className="text-[#008752]" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-6">{t('architecture.modularityTitle')}</h2>
            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              {t('architecture.modularityDesc')}
            </p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3 bg-[#008752] text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
            >
              {t('architecture.exploreLayers')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}