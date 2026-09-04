'use client';

import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  Store, 
  ChevronDown, 
  Menu, 
  X, 
  Layers, 
  Sparkles,
  Shield,
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';

interface HeaderProps {
  currentBrand: 'vr' | 'axion';
  onToggleBrand: () => void;
  onOpenAuth: (role: 'trabalhador' | 'empresa' | 'estabelecimento') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentBrand, onToggleBrand, onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isAxion = currentBrand === 'axion';

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${
      isAxion 
        ? 'bg-axion-bg/95 border-b border-axion-border text-white backdrop-blur-md' 
        : 'bg-white border-b border-slate-200 text-slate-900 backdrop-blur-md'
    }`}>
      {/* Top Banner Bar */}
      <div className={`${isAxion ? 'bg-axion-surface1 text-slate-300' : 'bg-vr-darker text-white'} text-xs py-2 px-4`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded text-[10px] ${
              isAxion ? 'bg-vr-primary text-slate-950' : 'bg-vr-primary text-slate-950'
            }`}>
              <Sparkles className="w-3 h-3" />
              {isAxion ? 'AXION ECOSYSTEM UI' : 'SSO PORTAL'}
            </span>
            <span className="hidden sm:inline text-slate-300">
              {isAxion 
                ? 'Interface reconstruída para o portfólio AXION Enterprise & Reuso Industrial' 
                : 'VR Benefícios - Soluções para gestão de pessoas em um só lugar'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Brand Toggle Switcher */}
            <button
              onClick={onToggleBrand}
              className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                isAxion 
                  ? 'bg-vr-primary text-slate-950 hover:bg-emerald-400' 
                  : 'bg-slate-800 text-vr-primary hover:bg-slate-700'
              }`}
              title="Alternar entre marca VR e Identidade AXION Enterprise"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Ver como: <strong>{isAxion ? 'AXION Enterprise' : 'VR Benefícios'}</strong></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3 group">
              {isAxion ? (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-vr-primary flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/20">
                    A
                  </div>
                  <div>
                    <span className="font-extrabold text-xl tracking-tight text-white block leading-none">AXION</span>
                    <span className="text-[10px] text-emerald-400 font-mono uppercase tracking-widest block">ENTERPRISE</span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-12 h-10 bg-vr-primary rounded-xl flex items-center justify-center text-vr-darker font-black text-2xl tracking-tighter">
                    VR
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-lg text-vr-darker leading-none tracking-tight">BENEFÍCIOS</span>
                    <span className="text-[9px] text-slate-500 font-semibold tracking-wider uppercase">Ecossistema Completo</span>
                  </div>
                </div>
              )}
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
              {/* Dropdown 1: Soluções */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solucoes')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={`flex items-center gap-1.5 py-2 transition-colors ${
                  isAxion ? 'text-slate-200 hover:text-vr-primary' : 'text-slate-700 hover:text-vr-darker'
                }`}>
                  <span>Soluções</span>
                  <ChevronDown className="w-4 h-4 opacity-75" />
                </button>

                {activeDropdown === 'solucoes' && (
                  <div className={`absolute top-full left-0 w-72 rounded-2xl p-4 shadow-2xl border transition-all ${
                    isAxion ? 'bg-axion-surface1 border-axion-border text-white' : 'bg-white border-slate-100 text-slate-900'
                  }`}>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-3">
                      {isAxion ? 'Módulos AXION' : 'Produtos Principais'}
                    </div>
                    <a href="#solucoes" className={`block px-3 py-2.5 rounded-xl transition ${
                      isAxion ? 'hover:bg-axion-surface2' : 'hover:bg-slate-50'
                    }`}>
                      <div className="font-bold text-sm">{isAxion ? 'AXION Pay (Gateway)' : 'VR Refeição & Alimentação'}</div>
                      <div className="text-xs text-slate-400">Cartões flexíveis com zero taxa</div>
                    </a>
                    <a href="#solucoes" className={`block px-3 py-2.5 rounded-xl transition ${
                      isAxion ? 'hover:bg-axion-surface2' : 'hover:bg-slate-50'
                    }`}>
                      <div className="font-bold text-sm">{isAxion ? 'AXION Flow (Automação)' : 'VR Ponto & Holerite'}</div>
                      <div className="text-xs text-slate-400">Redução de até 85% do tempo do RH</div>
                    </a>
                    <a href="#solucoes" className={`block px-3 py-2.5 rounded-xl transition ${
                      isAxion ? 'hover:bg-axion-surface2' : 'hover:bg-slate-50'
                    }`}>
                      <div className="font-bold text-sm">{isAxion ? 'AXION Voice (Telemetria)' : 'VR Auto & Mobilidade'}</div>
                      <div className="text-xs text-slate-400">Gestão simplificada de frotas e deslocamento</div>
                    </a>
                  </div>
                )}
              </div>

              {/* Navigation Items */}
              <a href="#beneficios" className={`transition-colors ${
                isAxion ? 'text-slate-200 hover:text-vr-primary' : 'text-slate-700 hover:text-vr-darker'
              }`}>
                Para Empresas (RH)
              </a>
              <a href="#trabalhador" className={`transition-colors ${
                isAxion ? 'text-slate-200 hover:text-vr-primary' : 'text-slate-700 hover:text-vr-darker'
              }`}>
                Para Trabalhadores
              </a>
              <a href="#cufa" className={`transition-colors ${
                isAxion ? 'text-slate-200 hover:text-vr-primary' : 'text-slate-700 hover:text-vr-darker'
              }`}>
                Impacto Social
              </a>
            </nav>
          </div>

          {/* Header Actions & Auth Role Quick Selector */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Profile SSO Buttons */}
            <div className={`flex items-center p-1 rounded-full border ${
              isAxion ? 'bg-axion-surface1 border-axion-border' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => onOpenAuth('trabalhador')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                  isAxion 
                    ? 'hover:bg-axion-surface2 text-slate-200' 
                    : 'hover:bg-white text-slate-800 shadow-sm'
                }`}
              >
                <User className="w-3.5 h-3.5 text-vr-green" />
                <span>Trabalhador</span>
              </button>

              <button
                onClick={() => onOpenAuth('empresa')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                  isAxion 
                    ? 'hover:bg-axion-surface2 text-slate-200' 
                    : 'hover:bg-white text-slate-800 shadow-sm'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Empresa</span>
              </button>

              <button
                onClick={() => onOpenAuth('estabelecimento')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                  isAxion 
                    ? 'hover:bg-axion-surface2 text-slate-200' 
                    : 'hover:bg-white text-slate-800 shadow-sm'
                }`}
              >
                <Store className="w-3.5 h-3.5 text-teal-600" />
                <span>Estabelecimento</span>
              </button>
            </div>

            {/* Main CTA */}
            <button
              onClick={() => onOpenAuth('empresa')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 transform active:scale-95 shadow-md ${
                isAxion 
                  ? 'bg-vr-primary text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20' 
                  : 'bg-vr-dark text-white hover:bg-slate-800'
              }`}
            >
              <span>Acessar Portal SSO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isAxion ? 'bg-axion-surface1 border-axion-border text-white' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-b px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300 ${
          isAxion ? 'bg-axion-bg border-axion-border text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Acesso Rápido SSO</div>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('trabalhador'); }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-axion-surface1 font-semibold text-sm"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-vr-green" />
                <span>Sou Trabalhador</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('empresa'); }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-axion-surface1 font-semibold text-sm"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>Sou Empresa / RH</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('estabelecimento'); }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-axion-surface1 font-semibold text-sm"
            >
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-teal-600" />
                <span>Sou Estabelecimento</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-axion-border space-y-2 font-semibold text-sm">
            <a href="#solucoes" className="block py-2">Soluções Completas</a>
            <a href="#beneficios" className="block py-2">Benefícios PAT</a>
            <a href="#cufa" className="block py-2">Impacto Social</a>
          </div>
        </div>
      )}
    </header>
  );
};
