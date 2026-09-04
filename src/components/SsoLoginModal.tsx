'use client';

import React, { useState } from 'react';
import { 
  X, 
  User, 
  Building2, 
  Store, 
  Lock, 
  Mail, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  EyeOff,
  AlertCircle
} from 'lucide-react';

interface SsoLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole: 'trabalhador' | 'empresa' | 'estabelecimento';
  currentBrand: 'vr' | 'axion';
}

export const SsoLoginModal: React.FC<SsoLoginModalProps> = ({
  isOpen,
  onClose,
  initialRole,
  currentBrand
}) => {
  const [activeRole, setActiveRole] = useState<'trabalhador' | 'empresa' | 'estabelecimento'>(initialRole);
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);

  if (!isOpen) return null;

  const isAxion = currentBrand === 'axion';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthSuccess(true);

      setTimeout(() => {
        setAuthSuccess(false);
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container Card */}
      <div 
        className={`relative w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all duration-300 ${
          isAxion 
            ? 'bg-axion-surface1 border-axion-border text-white shadow-emerald-500/10' 
            : 'bg-white border-slate-200 text-slate-900 shadow-slate-900/20'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition ${
            isAxion 
              ? 'hover:bg-axion-surface2 text-slate-400 hover:text-white' 
              : 'hover:bg-slate-100 text-slate-500 hover:text-slate-900'
          }`}
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-sm ${
              isAxion ? 'bg-vr-primary text-slate-950' : 'bg-vr-primary text-slate-950'
            }`}>
              {isAxion ? 'A' : 'VR'}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
              Autenticação Unificada SSO
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight">
            Acesse o Portal {isAxion ? 'AXION SSO' : 'VR Benefícios'}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Selecione seu perfil e informe as credenciais de acesso seguro.
          </p>
        </div>

        {/* Profile Tabs */}
        <div className={`grid grid-cols-3 gap-1 p-1 rounded-2xl mb-6 border ${
          isAxion ? 'bg-axion-bg border-axion-border' : 'bg-slate-100 border-slate-200'
        }`}>
          <button
            type="button"
            onClick={() => { setActiveRole('trabalhador'); setAuthSuccess(false); }}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition ${
              activeRole === 'trabalhador'
                ? isAxion 
                  ? 'bg-axion-surface1 text-vr-primary shadow-sm border border-axion-border' 
                  : 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Trabalhador</span>
            <span className="sm:hidden">Usuário</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveRole('empresa'); setAuthSuccess(false); }}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition ${
              activeRole === 'empresa'
                ? isAxion 
                  ? 'bg-axion-surface1 text-vr-primary shadow-sm border border-axion-border' 
                  : 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Empresa RH</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveRole('estabelecimento'); setAuthSuccess(false); }}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition ${
              activeRole === 'estabelecimento'
                ? isAxion 
                  ? 'bg-axion-surface1 text-vr-primary shadow-sm border border-axion-border' 
                  : 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Parceiro</span>
            <span className="sm:hidden">Loja</span>
          </button>
        </div>

        {/* Auth Feedback Notification */}
        {authSuccess ? (
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3 animate-in zoom-in-95 duration-300">
            <CheckCircle2 className="w-12 h-12 text-vr-primary mx-auto" />
            <h3 className="text-lg font-bold text-emerald-400">Autenticação Realizada com Sucesso!</h3>
            <p className="text-xs text-slate-400">
              Redirecionando para o painel do perfil <strong>{activeRole.toUpperCase()}</strong>...
            </p>
          </div>
        ) : (
          /* Login Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Field 1: Identifier */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-400">
                {activeRole === 'trabalhador' 
                  ? 'CPF do Trabalhador' 
                  : activeRole === 'empresa' 
                    ? 'CNPJ ou E-mail da Empresa' 
                    : 'Código ou CNPJ do Estabelecimento'}
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  {activeRole === 'trabalhador' ? <CreditCard className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                </div>

                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={
                    activeRole === 'trabalhador' 
                      ? '000.000.000-00' 
                      : activeRole === 'empresa' 
                        ? 'empresa@dominio.com.br' 
                        : 'CNPJ ou Código 8 dígitos'
                  }
                  className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium transition border outline-none ${
                    isAxion 
                      ? 'bg-axion-bg border-axion-border text-white focus:border-vr-primary' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-vr-darker'
                  }`}
                />
              </div>
            </div>

            {/* Field 2: Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Senha de Acesso
                </label>
                <a href="#" className="text-xs font-semibold text-emerald-500 hover:underline">
                  Esqueceu a senha?
                </a>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>

                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`w-full pl-10 pr-10 py-3 rounded-xl text-sm font-medium transition border outline-none ${
                    isAxion 
                      ? 'bg-axion-bg border-axion-border text-white focus:border-vr-primary' 
                      : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-vr-darker'
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg flex items-center justify-center gap-2 transform active:scale-98 ${
                isAxion 
                  ? 'bg-vr-primary text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20' 
                  : 'bg-vr-dark text-white hover:bg-slate-800'
              }`}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Entrar no Portal SSO</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Trust Footer Notice */}
            <div className="pt-3 text-center border-t border-slate-100 dark:border-axion-border">
              <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Conexão encriptada de 256 bits com certificado de segurança SSL</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
