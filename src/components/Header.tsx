'use client';

import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  Store, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  onOpenAuth: (role: 'trabalhador' | 'empresa' | 'estabelecimento') => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 text-slate-900 backdrop-blur-md">
      {/* Top Banner Bar */}
      <div className="bg-vr-darker text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded text-[10px] bg-vr-primary text-slate-950">
              <Sparkles className="w-3 h-3" />
              SSO PORTAL
            </span>
            <span className="hidden sm:inline text-slate-200">
              VR Benefícios - Soluções para gestão de pessoas em um só lugar
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
            <a href="#trabalhador" onClick={() => onOpenAuth('trabalhador')} className="hover:text-vr-primary transition">
              Atendimento Trabalhador
            </a>
            <span className="text-slate-600">|</span>
            <a href="#empresa" onClick={() => onOpenAuth('empresa')} className="hover:text-vr-primary transition">
              Atendimento RH
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-12 h-10 bg-vr-primary rounded-xl flex items-center justify-center text-vr-darker font-black text-2xl tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
                VR
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-vr-darker leading-none tracking-tight">BENEFÍCIOS</span>
                <span className="text-[9px] text-slate-500 font-semibold tracking-wider uppercase">Ecossistema Completo</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
              {/* Dropdown: Soluções */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('solucoes')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1.5 py-2 text-slate-700 hover:text-vr-darker transition-colors">
                  <span>Soluções</span>
                  <ChevronDown className="w-4 h-4 opacity-75" />
                </button>

                {activeDropdown === 'solucoes' && (
                  <div className="absolute top-full left-0 w-72 rounded-2xl p-4 bg-white border border-slate-100 text-slate-900 shadow-2xl transition-all">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-3">
                      Produtos Principais
                    </div>
                    <a href="#solucoes" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition">
                      <div className="font-bold text-sm text-slate-900">VR Refeição & Alimentação</div>
                      <div className="text-xs text-slate-500">Cartões flexíveis com isenção fiscal PAT</div>
                    </a>
                    <a href="#solucoes" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition">
                      <div className="font-bold text-sm text-slate-900">VR Ponto & Holerite Digital</div>
                      <div className="text-xs text-slate-500">Redução de até 85% do tempo do RH</div>
                    </a>
                    <a href="#solucoes" className="block px-3 py-2.5 rounded-xl hover:bg-slate-50 transition">
                      <div className="font-bold text-sm text-slate-900">VR Auto & Mobilidade</div>
                      <div className="text-xs text-slate-500">Gestão simplificada de frotas e deslocamento</div>
                    </a>
                  </div>
                )}
              </div>

              <a href="#beneficios" className="text-slate-700 hover:text-vr-darker transition-colors">
                Para Empresas (RH)
              </a>
              <a href="#trabalhador" className="text-slate-700 hover:text-vr-darker transition-colors">
                Para Trabalhadores
              </a>
              <a href="#cufa" className="text-slate-700 hover:text-vr-darker transition-colors">
                Impacto Social
              </a>
            </nav>
          </div>

          {/* Profile SSO Selector */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center p-1 rounded-full bg-slate-100 border border-slate-200">
              <button
                onClick={() => onOpenAuth('trabalhador')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800 hover:bg-white transition shadow-sm"
              >
                <User className="w-3.5 h-3.5 text-vr-green" />
                <span>Trabalhador</span>
              </button>

              <button
                onClick={() => onOpenAuth('empresa')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800 hover:bg-white transition shadow-sm"
              >
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Empresa</span>
              </button>

              <button
                onClick={() => onOpenAuth('estabelecimento')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800 hover:bg-white transition shadow-sm"
              >
                <Store className="w-3.5 h-3.5 text-teal-600" />
                <span>Estabelecimento</span>
              </button>
            </div>

            {/* Main CTA */}
            <button
              onClick={() => onOpenAuth('empresa')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-vr-dark text-white hover:bg-slate-800 transition-all duration-200 shadow-md active:scale-95"
            >
              <span>Acessar Portal SSO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white text-slate-900 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Acesso Rápido SSO</div>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('trabalhador'); }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 font-semibold text-sm"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-vr-green" />
                <span>Sou Trabalhador</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
            
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('empresa'); }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 font-semibold text-sm"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>Sou Empresa / RH</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAuth('estabelecimento'); }}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 font-semibold text-sm"
            >
              <div className="flex items-center gap-2">
                <Store className="w-4 h-4 text-teal-600" />
                <span>Sou Estabelecimento</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-2 font-semibold text-sm">
            <a href="#solucoes" className="block py-2">Soluções Completas</a>
            <a href="#beneficios" className="block py-2">Benefícios PAT</a>
            <a href="#cufa" className="block py-2">Impacto Social</a>
          </div>
        </div>
      )}
    </header>
  );
};
