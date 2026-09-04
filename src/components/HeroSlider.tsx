'use client';

import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Percent, 
  HeartHandshake, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight,
  CreditCard,
  QrCode
} from 'lucide-react';

interface HeroSliderProps {
  onOpenAuth: (role: 'trabalhador' | 'empresa' | 'estabelecimento') => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenAuth }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'rh-digital',
      badge: 'AUTOMAÇÃO E PRODUTIVIDADE',
      title: 'Reduza até 85% do tempo',
      titleHighlight: 'gasto com tarefas manuais do RH',
      subtitle: 'Do controle de ponto ao holerite, automatize processos e elimine o retrabalho entre sistemas com alta precisão.',
      ctaText: 'Quero reduzir o retrabalho',
      statNumber: '85%',
      statLabel: 'Economia de Tempo no RH',
      cardIcon: Clock
    },
    {
      id: 'beneficios-pat',
      badge: 'ISENÇÃO E ECONOMIA',
      title: 'Metade do tempo, muito mais',
      titleHighlight: 'eficiência em benefícios',
      subtitle: 'Incentivo fiscal de até 4% no IR, taxa zero e crédito em minutos via PIX com segurança jurídica integral.',
      ctaText: 'Quero economizar com benefícios',
      statNumber: '4%',
      statLabel: 'Dedução direta no Imposto de Renda (PAT)',
      cardIcon: Percent
    },
    {
      id: 'cufa-impacto',
      badge: 'RESPONSABILIDADE SOCIAL',
      title: 'Transforme troco em esperança com o',
      titleHighlight: 'Programa Troco Solidário',
      subtitle: 'Apoie projetos sociais e iniciativas comunitárias em todo o Brasil diretamente pela plataforma.',
      ctaText: 'Conhecer projetos sociais',
      statNumber: '100%',
      statLabel: 'Transparência no repasse social',
      cardIcon: HeartHandshake
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <section className="relative my-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Slider Container */}
      <div className="relative overflow-hidden rounded-3xl min-h-[580px] lg:min-h-[520px] bg-gradient-to-br from-vr-darker via-emerald-950 to-slate-950 border border-emerald-900/40 text-white shadow-2xl transition-colors duration-500">
        
        {/* Decorative Background Geometry */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-vr-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12 min-h-[520px]">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vr-primary/10 border border-vr-primary/30 text-vr-primary text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>{active.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {active.title}{' '}
              <span className="bg-gradient-to-r from-vr-primary to-emerald-300 bg-clip-text text-transparent block sm:inline">
                {active.titleHighlight}
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {active.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenAuth('empresa')}
                className="px-7 py-3.5 rounded-full bg-vr-primary text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all duration-200 shadow-lg shadow-emerald-500/20 transform active:scale-95 flex items-center gap-2"
              >
                <span>{active.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenAuth('trabalhador')}
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition border border-white/10 backdrop-blur-sm"
              >
                Sou Trabalhador (Ver Saldo)
              </button>
            </div>

            {/* Highlight Metric Pill */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-vr-primary font-black text-xl">
                  {active.statNumber}
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Métrica Chave</div>
                  <div className="text-sm font-bold text-slate-200">{active.statLabel}</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 border-l border-white/10 pl-6">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% de conformidade técnica e jurídica PAT</span>
              </div>
            </div>

          </div>

          {/* Right Column: VR App Phone Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md bg-slate-900/60 rounded-3xl p-6 border border-white/10 shadow-2xl backdrop-blur-xl space-y-4">
              
              <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-slate-300">Portal VR Benefícios</span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">v4.8-LIVE</span>
              </div>

              <div className="bg-slate-950/80 rounded-2xl p-5 border border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs text-slate-400">Saldo Atualizado</div>
                    <div className="text-2xl font-bold font-mono text-emerald-400">R$ 1.480,50</div>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-500/20 text-vr-primary">
                    <CreditCard className="w-6 h-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-200">VR Refeição</div>
                      <div className="text-[10px] text-slate-400">Liberado em PIX</div>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-2.5 rounded-xl border border-white/5 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-200">VR Alimentação</div>
                      <div className="text-[10px] text-slate-400">Saldo Integrado</div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-950/50 rounded-xl p-3 border border-emerald-500/30 flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4 text-vr-primary" />
                    <span className="font-semibold text-slate-200">Pagamento por QR Code</span>
                  </div>
                  <span className="text-[10px] bg-vr-primary text-slate-950 font-bold px-2 py-0.5 rounded">Ativo</span>
                </div>
              </div>

              <div className="bg-slate-900/90 rounded-xl p-3 border border-white/10 text-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                  RH
                </div>
                <div>
                  <div className="font-bold text-slate-200">Gestão Simplificada</div>
                  <div className="text-[10px] text-slate-400">Mais de 50.000 empresas ativas na rede</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Slide Controls & Pagination */}
        <div className="absolute bottom-6 left-8 right-8 z-20 flex justify-between items-center border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-vr-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Ir para o slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition border border-white/10"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition border border-white/10"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
