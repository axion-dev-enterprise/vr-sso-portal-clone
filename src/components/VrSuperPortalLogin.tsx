'use client';

import React, { useState } from 'react';
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
  Smartphone,
  ShieldCheck
} from 'lucide-react';

export const VrSuperPortalLogin: React.FC = () => {
  const [userEmail, setUserEmail] = useState('caro********@gmai*****');
  const [code, setCode] = useState('');
  const [rememberDevice, setRememberDevice] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendStatus, setResendStatus] = useState<string | null>(null);
  const [methodModalOpen, setMethodModalOpen] = useState(false);

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
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-white font-sans text-slate-800 select-none">
      
      {/* ================= TOP CONTENT SPLIT SCREEN ================= */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT COLUMN: AUTH FORM */}
        <div className="w-full md:w-[420px] lg:w-[440px] xl:w-[460px] shrink-0 bg-white flex flex-col justify-center px-8 sm:px-12 xl:px-16 z-20">
          
          <div className="w-full max-w-[340px] mx-auto space-y-6">
            
            {/* REAL VR LOGO + "facilita a vida" */}
            <div className="flex items-center gap-3">
              {/* Official VR Icon Box */}
              <div className="w-12 h-10 bg-[#00ba20] rounded-xl flex items-center justify-center p-1.5 shadow-xs">
                <svg viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* VR Monogram Ribbon Path */}
                  <path 
                    d="M6 8 L18 30 L30 8 Q36 2 42 7 Q46 12 43 18 L38 24 M30 8 Q35 14 42 14" 
                    stroke="white" 
                    strokeWidth="5.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>

              {/* Tagline */}
              <span className="text-[#1e293b] font-bold text-[15px] tracking-tight">
                facilita a vida
              </span>
            </div>

            {/* Instruction Title */}
            <h1 className="text-[15px] font-medium text-[#374151] leading-snug">
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
                className="w-full px-3.5 py-3 rounded-lg border border-[#d1d5db] hover:border-slate-400 bg-white flex items-center justify-between cursor-pointer transition"
                title="Clique para alterar o e-mail"
              >
                <span className="font-medium text-sm text-[#1f2937] tracking-tight">
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
                  className="w-full px-3.5 py-3 rounded-lg border border-[#d1d5db] text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:border-[#00ba20] focus:ring-1 focus:ring-[#00ba20] transition"
                />
              </div>

              {/* Checkbox Remember Device */}
              <div className="flex items-center gap-2.5 pt-0.5">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberDevice}
                  onChange={(e) => setRememberDevice(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#00ba20] focus:ring-[#00ba20] accent-[#00ba20] cursor-pointer"
                />
                <label 
                  htmlFor="remember"
                  className="text-xs text-[#374151] font-normal cursor-pointer select-none"
                >
                  Lembrar deste dispositivo por 30 dias
                </label>
              </div>

              {/* Primary Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!code || isSubmitting}
                  className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center ${
                    code 
                      ? 'bg-[#00ba20] hover:bg-[#009e1b] text-white shadow-md cursor-pointer' 
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
                <div className="text-center text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg p-2 font-medium">
                  {resendStatus}
                </div>
              )}

              {/* Resend & Alternative Method Links */}
              <div className="pt-2 space-y-1.5 text-center text-xs">
                <div>
                  <span className="text-[#4b5563]">Não recebeu um e-mail? </span>
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

        </div>

        {/* RIGHT COLUMN: GREEN SUPERPORTAL HERO BANNER */}
        <div className="hidden md:flex flex-1 relative bg-[#00ba20] p-6 lg:p-8 xl:p-10 flex-col justify-between overflow-hidden">
          
          {/* Real Inner Rounded Outline Frame (as highlighted in the red box) */}
          <div className="absolute inset-6 lg:inset-8 rounded-[32px] border-1.5 border-white/45 pointer-events-none z-10" />

          {/* Top Section */}
          <div className="relative z-20 space-y-6 lg:space-y-8 pl-4 lg:pl-6 pt-2">
            
            {/* Top SuperPortal VR Search Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/50 bg-white/10 backdrop-blur-xs text-xs font-semibold text-white tracking-wide">
              <span>SuperPortal VR</span>
              <Search className="w-3.5 h-3.5 text-white/90" />
            </div>

            {/* Main Headline */}
            <div className="grid grid-cols-12 gap-4 lg:gap-8 items-baseline max-w-4xl">
              <div className="col-span-5">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[0.98] text-white">
                  Super<br />
                  Portal<br />
                  VR.
                </h2>
              </div>

              <div className="col-span-7">
                <p className="text-2xl lg:text-3xl xl:text-[34px] font-extrabold text-[#0a0a0a] leading-tight tracking-tight">
                  Facilidade<br />
                  em um só lugar,<br />
                  para você poder mais.
                </p>
              </div>
            </div>

            {/* Product Modules Horizontal Row */}
            <div className="flex flex-wrap items-center gap-x-5 lg:gap-x-7 gap-y-2 text-xs lg:text-[13px] font-semibold text-white/95">
              <div className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-white" />
                <span>RH Digital</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bus className="w-4 h-4 text-white" />
                <span>Mobilidade</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-white" />
                <span>Benefícios</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-white" />
                <span>Despesas e Viagens</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wallet className="w-4 h-4 text-white" />
                <span>Soluções Financeiras</span>
              </div>
            </div>

          </div>

          {/* Bottom Visual: Stylized Green Pluses + Real Photograph of Smiling Woman */}
          <div className="relative z-20 flex items-end justify-between pl-4 lg:pl-6">
            
            {/* Green Stylized Outline Plus Symbols (+ + +) */}
            <div className="flex items-center gap-2 pb-4 lg:pb-8">
              {[1, 2, 3].map((idx) => (
                <div 
                  key={idx} 
                  className="w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center relative"
                >
                  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full drop-shadow-sm">
                    <path 
                      d="M22 6H38V22H54V38H38V54H22V38H6V22H22V6Z" 
                      fill="none" 
                      stroke="#00ff2e" 
                      strokeWidth="3.5" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Real Professional Image (Woman in green top with laptop & ambient backlight) */}
            <div className="relative w-80 lg:w-[450px] xl:w-[540px] aspect-[16/10] rounded-tl-3xl overflow-hidden -mr-6 lg:-mr-8 xl:-mr-10 -mb-6 lg:-mb-8 xl:-mb-10 shadow-2xl">
              <img 
                src="/vr_portal_woman.jpg" 
                alt="Colaboradora VR sorridente no escritório com notebook"
                className="w-full h-full object-cover object-[center_15%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00ba20]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-600/30 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Right Floating Accessibility Blue Buttons */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-1">
            <button 
              className="w-8 h-10 bg-[#0047ba] hover:bg-[#003894] text-white flex items-center justify-center rounded-l-md shadow-md transition"
              title="Acessibilidade"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <circle cx="12" cy="4" r="2" />
                <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01 0-.02-.01H13c-.35-.2-.75-.3-1.19-.26-.6.06-1.12.39-1.42.89L8.14 11.8C7.4 13.04 7.8 14.65 9.04 15.39c.4.24.84.36 1.28.36.91 0 1.78-.51 2.19-1.35l.89-1.8v5.4h2v-5l2.4 1.4c.5.3 1.1.4 1.7.4h.5v-2h-.5c-.2 0-.4-.1-.5-.2z" />
              </svg>
            </button>
            <button 
              className="w-8 h-10 bg-[#0047ba] hover:bg-[#003894] text-white flex items-center justify-center rounded-l-md shadow-md transition"
              title="VLibras - Tradução de Língua Brasileira de Sinais"
            >
              <span className="font-bold text-[9px] tracking-tighter">LIBRAS</span>
            </button>
          </div>

        </div>

      </div>

      {/* ================= BOTTOM FOOTER BAR (FULL WIDTH REAL FOOTER) ================= */}
      <footer className="w-full h-11 bg-[#c8ffbe] border-t border-[#b2f8a5] px-6 sm:px-10 flex items-center justify-between text-xs text-[#1e5828] font-medium shrink-0 z-30">
        <div>
          © 2026 VR - Todos os direitos reservados
        </div>

        <div className="flex items-center gap-1.5 hover:underline cursor-pointer">
          <HelpCircle className="w-4 h-4 text-[#1e5828]" />
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
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-[#00ba20] hover:bg-slate-50 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-emerald-600" />
                  <span>SMS no celular cadastrado</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button 
                onClick={() => { setMethodModalOpen(false); setResendStatus('Notificação enviada ao App VR!'); }}
                className="w-full p-3 rounded-xl border border-slate-200 hover:border-[#00ba20] hover:bg-slate-50 flex items-center justify-between text-left"
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
