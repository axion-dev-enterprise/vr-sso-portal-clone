'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSlider } from '@/components/HeroSlider';
import { SsoLoginModal } from '@/components/SsoLoginModal';
import { SolutionsGrid } from '@/components/SolutionsGrid';
import { Footer } from '@/components/Footer';
import { 
  Building2, 
  UserCheck, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

export default function Home() {
  const [currentBrand, setCurrentBrand] = useState<'vr' | 'axion'>('vr');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authRole, setAuthRole] = useState<'trabalhador' | 'empresa' | 'estabelecimento'>('empresa');

  const handleOpenAuth = (role: 'trabalhador' | 'empresa' | 'estabelecimento') => {
    setAuthRole(role);
    setAuthModalOpen(true);
  };

  const isAxion = currentBrand === 'axion';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isAxion ? 'bg-axion-bg text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Header */}
      <Header 
        currentBrand={currentBrand}
        onToggleBrand={() => setCurrentBrand(isAxion ? 'vr' : 'axion')}
        onOpenAuth={handleOpenAuth}
      />

      {/* Main Content Body */}
      <main>
        {/* Hero Slider */}
        <HeroSlider 
          currentBrand={currentBrand}
          onOpenAuth={handleOpenAuth}
        />

        {/* Feature Highlights Band */}
        <section className="py-12 border-y border-slate-200/60 dark:border-axion-border bg-white dark:bg-axion-surface1/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-axion-surface2 border border-slate-100 dark:border-axion-border">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-vr-primary flex items-center justify-center font-bold">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-sm">Crédito Rápido PIX</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Recarga em minutos</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-axion-surface2 border border-slate-100 dark:border-axion-border">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-vr-primary flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-sm">Segurança Jurídica</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">100% de conformidade PAT</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-axion-surface2 border border-slate-100 dark:border-axion-border">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-vr-primary flex items-center justify-center font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-sm">Gestão Unificada</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Holerite e ponto em um app</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-axion-surface2 border border-slate-100 dark:border-axion-border">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-vr-primary flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-extrabold text-sm">+50 Mil Empresas</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Rede corporativa ativada</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Product & Solutions Grid */}
        <SolutionsGrid 
          currentBrand={currentBrand}
          onOpenAuth={handleOpenAuth}
        />

        {/* Social Impact / CUFA Section */}
        <section id="cufa" className="py-16 bg-gradient-to-r from-emerald-950 via-slate-900 to-vr-darker text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vr-primary/20 text-vr-primary text-xs font-bold uppercase">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Troco Solidário CUFA</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                  Ajude a transformar realidades sociais a cada refeição
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  Ao utilizar os cartões do ecossistema, os colaboradores podem doar pequenas quantias de troco para apoiar projetos de educação, qualificação profissional e combate à fome nas favelas de todo o Brasil.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenAuth('empresa')}
                    className="px-6 py-3 rounded-full bg-vr-primary text-slate-950 font-bold text-sm hover:bg-emerald-400 transition flex items-center gap-2"
                  >
                    <span>Quero Apoiar Projetos Sociais</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md space-y-4">
                <div className="text-xs font-mono uppercase text-emerald-400">Impacto Consolidado</div>
                <div className="text-4xl font-black text-white font-mono">+R$ 12,4 Milhões</div>
                <p className="text-xs text-slate-300">
                  Doados diretamente a projetos da Central Única das Favelas (CUFA) com 100% de rastreabilidade.
                </p>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-vr-primary h-full w-[78%]" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer currentBrand={currentBrand} />

      {/* Authentication Modal */}
      <SsoLoginModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialRole={authRole}
        currentBrand={currentBrand}
      />
    </div>
  );
}
