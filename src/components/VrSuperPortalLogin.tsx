'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  HelpCircle, 
  Laptop, 
  Bus, 
  CreditCard, 
  Plane, 
  Wallet, 
  Search, 
  Check, 
  RefreshCw,
  Eye,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export const VrSuperPortalLogin: React.FC = () => {
  // States for MFA and email step
  const [step, setStep] = useState<'mfa' | 'email'>('mfa');
  const [userEmail, setUserEmail] = useState('caro********@gmai*****');
  const [code, setCode] = useState('');
  const [rememberDevice, setRememberDevice] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendStatus, setResendStatus] = useState<string | null>(null);
  const [methodModalOpen, setMethodModalOpen] = useState(false);

  // Handle submit
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Código validado com sucesso! Redirecionando para o SuperPortal VR...');
    }, 1200);
  };

  const handleResend = () => {
    setResendStatus('Código reenviado para seu e-mail!');
    setTimeout(() => setResendStatus(null), 4000);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-white font-sans text-slate-800 antialiased select-none">
      
      {/* Main Split Screen Area */}
      <div className="flex-1 flex flex-col lg:flex-row w-full">
        
        {/* ================= LEFT COLUMN: AUTH FORM ================= */}
        <div className="w-full lg:w-[480px] xl:w-[520px] shrink-0 bg-white flex flex-col justify-between p-8 sm:p-12 lg:p-16 border-r border-slate-100">
          
          <div className="space-y-8 max-w-sm mx-auto w-full pt-4">
            
            {/* VR Logo Header */}
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-9 bg-[#00b11d] rounded-lg flex items-center justify-center text-white font-black text-xl tracking-tight shadow-sm">
                VR
              </div>
              <span className="text-slate-800 font-bold text-sm tracking-tight">
                facilita a vida
              </span>
            </div>

            {/* Instruction Title */}
            <h1 className="text-base sm:text-lg font-medium text-slate-700 leading-snug">
              Informe os dados do seu Acesso VR para acessar os produtos.
            </h1>

            {/* Form */}
            <form onSubmit={handleContinue} className="space-y-4">
              
              {/* User Email Chip / Selector */}
              <div 
                onClick={() => {
                  const newEmail = prompt('Editar identificador/email:', userEmail);
                  if (newEmail) setUserEmail(newEmail);
                }}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white flex items-center justify-between cursor-pointer transition shadow-xs"
                title="Clique para alterar o e-mail"
              >
                <span className="font-medium text-sm text-slate-800 tracking-wide">
                  {userEmail}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </div>

              {/* Code Input */}
              <div>
                <input
                  type="text"
                  required
                  autoFocus
                  maxLength={8}
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Inserir o código*"
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-[#00b11d] focus:ring-1 focus:ring-[#00b11d] transition"
                />
              </div>

              {/* Checkbox Remember Device */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberDevice}
                  onChange={(e) => setRememberDevice(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#00b11d] focus:ring-[#00b11d] accent-[#00b11d] cursor-pointer"
                />
                <label 
                  htmlFor="remember"
                  className="text-xs sm:text-sm text-slate-600 font-normal cursor-pointer select-none"
                >
                  Lembrar deste dispositivo por 30 dias
                </label>
              </div>

              {/* Primary Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!code || isSubmitting}
                  className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center ${
                    code 
                      ? 'bg-[#00b11d] hover:bg-[#009618] text-white shadow-md' 
                      : 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Continuar'
                  )}
                </button>
              </div>

              {/* Status Message */}
              {resendStatus && (
                <div className="text-center text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg p-2 font-medium animate-in fade-in">
                  {resendStatus}
                </div>
              )}

              {/* Resend & Alternative Method Links */}
              <div className="pt-2 space-y-2 text-center text-xs sm:text-sm">
                <div>
                  <span className="text-slate-600">Não recebeu um e-mail? </span>
                  <button
                    type="button"
                    onClick={handleResend}
                    className="font-bold text-[#2563eb] hover:underline"
                  >
                    Reenviar
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setMethodModalOpen(true)}
                    className="font-bold text-[#2563eb] hover:underline"
                  >
                    Tentar outro método
                  </button>
                </div>
              </div>

            </form>

          </div>

          <div className="text-center pt-8 text-[11px] text-slate-400">
            Acesso seguro protegido por autenticação multifator (MFA)
          </div>

        </div>

        {/* ================= RIGHT COLUMN: GREEN SUPERPORTAL HERO ================= */}
        <div className="flex-1 relative overflow-hidden bg-[#00ba20] flex flex-col justify-between p-8 sm:p-12 lg:p-16 text-white min-h-[500px]">
          
          {/* Inner Rounded Frame Outline Border (exact as in VR UI) */}
          <div className="absolute inset-4 sm:inset-6 rounded-3xl border border-white/25 pointer-events-none z-10" />

          {/* Top Section */}
          <div className="relative z-20 space-y-8">
            
            {/* Top SuperPortal VR Search Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-wide">
              <span>SuperPortal VR</span>
              <Search className="w-3.5 h-3.5 text-white/80" />
            </div>

            {/* Main Headline */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline max-w-4xl">
              <div className="md:col-span-5">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
                  Super<br />
                  Portal<br />
                  VR.
                </h2>
              </div>

              <div className="md:col-span-7">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight">
                  Facilidade<br />
                  em um só lugar,<br />
                  para você poder mais.
                </p>
              </div>
            </div>

            {/* Product Modules Line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-xs sm:text-sm font-semibold text-white/95">
              <div className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4" />
                <span>RH Digital</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bus className="w-4 h-4" />
                <span>Mobilidade</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4" />
                <span>Benefícios</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Plane className="w-4 h-4" />
                <span>Despesas e Viagens</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wallet className="w-4 h-4" />
                <span>Soluções Financeiras</span>
              </div>
            </div>

          </div>

          {/* Bottom Visual: Stylized Pluses + Woman Photography */}
          <div className="relative z-20 pt-8 flex items-end justify-between">
            
            {/* Green Stylized Outline Plus Symbols (+ + +) */}
            <div className="flex items-center gap-2 pb-6">
              {[1, 2, 3].map((idx) => (
                <div 
                  key={idx} 
                  className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center relative"
                >
                  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full drop-shadow-md">
                    <path 
                      d="M22 6H38V22H54V38H38V54H22V38H6V22H22V6Z" 
                      fill="none" 
                      stroke="#02ff2e" 
                      strokeWidth="3.5" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Realistic Professional Photo (Smiling woman in workplace) */}
            <div className="relative w-72 sm:w-96 lg:w-[460px] aspect-[4/3] rounded-t-3xl overflow-hidden shadow-2xl -mb-8 sm:-mb-12 lg:-mb-16">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Colaboradora sorridente no escritório VR"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00ba20]/60 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Right Floating Accessibility Blue Buttons (Exact as on sso-acesso.vr.com.br) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-1">
            <button 
              className="w-9 h-11 bg-[#0047ba] hover:bg-[#003894] text-white flex items-center justify-center rounded-l-md shadow-md transition"
              title="Acessibilidade"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <circle cx="12" cy="4" r="2" />
                <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01 0-.02-.01H13c-.35-.2-.75-.3-1.19-.26-.6.06-1.12.39-1.42.89L8.14 11.8C7.4 13.04 7.8 14.65 9.04 15.39c.4.24.84.36 1.28.36.91 0 1.78-.51 2.19-1.35l.89-1.8v5.4h2v-5l2.4 1.4c.5.3 1.1.4 1.7.4h.5v-2h-.5c-.2 0-.4-.1-.5-.2z" />
              </svg>
            </button>
            <button 
              className="w-9 h-11 bg-[#0047ba] hover:bg-[#003894] text-white flex items-center justify-center rounded-l-md shadow-md transition"
              title="VLibras - Tradução de Língua Brasileira de Sinais"
            >
              <span className="font-bold text-[10px] tracking-tighter">LIBRAS</span>
            </button>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM FOOTER BAR ================= */}
      <footer className="w-full bg-[#d7ffd1] border-t border-[#c0f8b8] px-6 sm:px-12 py-3 flex items-center justify-between text-xs text-[#0a481d] font-semibold">
        <div>
          © 2026 VR - Todos os direitos reservados
        </div>

        <div className="flex items-center gap-1.5 hover:underline cursor-pointer">
          <HelpCircle className="w-4 h-4 text-[#0a481d]" />
          <span>Ajuda</span>
        </div>
      </footer>

      {/* ================= MODAL: TENTAR OUTRO MÉTODO ================= */}
      {methodModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Escolha outro método de autenticação
            </h3>
            <p className="text-xs text-slate-500">
              Selecione como deseja receber a confirmação de segurança para o seu Acesso VR.
            </p>

            <div className="space-y-2 pt-2 text-sm font-semibold">
              <button 
                onClick={() => { setMethodModalOpen(false); setResendStatus('Código enviado via SMS!'); }}
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-[#00b11d] hover:bg-slate-50 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>SMS no celular cadastrado</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button 
                onClick={() => { setMethodModalOpen(false); setResendStatus('Notificação enviada ao App VR!'); }}
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-[#00b11d] hover:bg-slate-50 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Notificação no Aplicativo VR</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setMethodModalOpen(false)}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
