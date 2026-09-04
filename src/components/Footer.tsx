'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Award, 
  Heart, 
  Sparkles, 
  ArrowUpRight 
} from 'lucide-react';

interface FooterProps {
  currentBrand: 'vr' | 'axion';
}

export const Footer: React.FC<FooterProps> = ({ currentBrand }) => {
  const isAxion = currentBrand === 'axion';

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isAxion 
        ? 'bg-axion-bg border-axion-border text-slate-400' 
        : 'bg-slate-900 border-slate-800 text-slate-400'
    }`}>
      {/* Regulatory & Compliance Banner */}
      <div className="border-b border-white/5 bg-slate-950/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-vr-primary shrink-0" />
            <span>
              <strong>PAT Regulamentado:</strong> Benefícios em conformidade integral com a Lei 14.442/2022 e Decreto 10.854/2021.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>SSL Full (Strict)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>ISO 27001 Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-vr-primary flex items-center justify-center text-slate-950 font-black text-sm">
              {isAxion ? 'A' : 'VR'}
            </div>
            <span className="font-extrabold text-sm text-white tracking-tight">
              {isAxion ? 'AXION ENTERPRISE' : 'VR BENEFÍCIOS'}
            </span>
          </div>

          <p className="text-slate-400 leading-relaxed">
            {isAxion 
              ? 'Plataforma industrial de UI/UX e ecossistema de software autônomo da AXION Enterprise.'
              : 'O ecossistema mais completo do mercado para gestão de pessoas, RH e benefícios corporativos.'}
          </p>

          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
              <Sparkles className="w-3 h-3" />
              <span>Monorepo Canvas Reference</span>
            </span>
          </div>
        </div>

        {/* Col 2: Produtos & Benefícios */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Soluções</h4>
          <ul className="space-y-2.5">
            <li><a href="#solucoes" className="hover:text-vr-primary transition">VR Refeição & Alimentação</a></li>
            <li><a href="#solucoes" className="hover:text-vr-primary transition">VR Ponto & Holerite Digital</a></li>
            <li><a href="#solucoes" className="hover:text-vr-primary transition">VR Auto & Frotas</a></li>
            <li><a href="#solucoes" className="hover:text-vr-primary transition">VR Mobilidade Corporativa</a></li>
            <li><a href="#solucoes" className="hover:text-vr-primary transition">VR Multi Benefícios</a></li>
          </ul>
        </div>

        {/* Col 3: Portal SSO & Atendimento */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Portais de Acesso</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-vr-primary transition">Portal do Trabalhador</a></li>
            <li><a href="#" className="hover:text-vr-primary transition">Portal da Empresa (RH)</a></li>
            <li><a href="#" className="hover:text-vr-primary transition">Portal do Estabelecimento</a></li>
            <li><a href="#" className="hover:text-vr-primary transition">Central de Ajuda & FAQ</a></li>
            <li><a href="#" className="hover:text-vr-primary transition">Segurança da Informação</a></li>
          </ul>
        </div>

        {/* Col 4: Institucional & Portfólio */}
        <div>
          <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Institucional</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="hover:text-vr-primary transition">Sobre a VR / AXION</a></li>
            <li><a href="#" className="hover:text-vr-primary transition">Programa Troco Solidário CUFA</a></li>
            <li><a href="#" className="hover:text-vr-primary transition">Política de Privacidade</a></li>
            <li><a href="#" className="hover:text-vr-primary transition">Termos de Uso do Portal</a></li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            © {new Date().getFullYear()} {isAxion ? 'AXION Enterprise' : 'VR Benefícios'}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido para portfólio & reutilização de UI/UX pela</span>
            <strong className="text-slate-300">AXION Enterprise</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
