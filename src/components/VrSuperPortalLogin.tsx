'use client';

import React, { useState } from 'react';
import { 
  HelpCircle, 
  Laptop, 
  Bus, 
  CreditCard, 
  Plane, 
  Wallet, 
  Search, 
  Eye, 
  EyeOff 
} from 'lucide-react';

export const VrSuperPortalLogin: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Login validado com sucesso! Redirecionando...');
    }, 1000);
  };

  const isFormValid = identifier.trim().length > 0 && password.trim().length > 0;

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-white font-sans text-slate-800 select-none">
      
      {/* ================= CORPO PRINCIPAL: DIVISÃO EXATA EM 2 COLUNAS ================= */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* COLUNA ESQUERDA: FORMULÁRIO DE ACESSO (Exatamente ~30% a 32% de largura) */}
        <div className="w-full md:w-[32%] lg:w-[30%] min-w-[340px] max-w-[420px] shrink-0 bg-white flex flex-col justify-center px-8 sm:px-10 lg:px-12 z-20">
          
          <div className="w-full max-w-[320px] mx-auto space-y-7">
            
            {/* LOGO OFICIAL VR + "facilita a vida" */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-10 bg-[#00ba20] rounded-xl flex items-center justify-center p-1.5 shadow-xs shrink-0">
                <svg viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path 
                    d="M6 8 L18 30 L30 8 Q36 2 42 7 Q46 12 43 18 L38 24 M30 8 Q35 14 42 14" 
                    stroke="white" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>

              <span className="text-[#1e293b] font-bold text-[16px] tracking-tight">
                facilita a vida
              </span>
            </div>

            {/* Texto de Instrução */}
            <h1 className="text-[15px] font-normal text-[#4b5563] leading-snug">
              Informe os dados do seu Acesso VR para acessar os produtos.
            </h1>

            {/* Formulário de Login */}
            <form onSubmit={handleContinue} className="space-y-4">
              
              {/* Campo 1: CPF ou e-mail* */}
              <div>
                <input
                  type="text"
                  required
                  autoFocus
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="CPF ou e-mail*"
                  className="w-full px-3.5 py-3.5 rounded-lg border border-[#d1d5db] text-slate-900 placeholder:text-[#9ca3af] text-sm font-normal focus:outline-none focus:border-[#00ba20] focus:ring-1 focus:ring-[#00ba20] transition bg-white"
                />
              </div>

              {/* Campo 2: Senha* com toggle de exibição */}
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha*"
                  className="w-full pl-3.5 pr-10 py-3.5 rounded-lg border border-[#d1d5db] text-slate-900 placeholder:text-[#9ca3af] text-sm font-normal focus:outline-none focus:border-[#00ba20] focus:ring-1 focus:ring-[#00ba20] transition bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Botão Continuar (Pill cinza quando inativo, verde quando ativo) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-3.5 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center ${
                    isFormValid 
                      ? 'bg-[#00ba20] hover:bg-[#009e1b] text-white shadow-md cursor-pointer' 
                      : 'bg-[#f0f2f5] text-[#9ca3af] cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Continuar'
                  )}
                </button>
              </div>

              {/* Link Redefinir Senha */}
              <div className="pt-3 text-left">
                <a
                  href="#redefinir"
                  onClick={(e) => { e.preventDefault(); alert('Fluxo de redefinição de senha do Acesso VR.'); }}
                  className="text-xs font-bold text-[#1f2937] hover:underline underline-offset-2"
                >
                  Redefinir senha
                </a>
              </div>

            </form>

          </div>

        </div>

        {/* COLUNA DIREITA: BANNER SUPERPORTAL VR COM ENQUADRAMENTO EXATO */}
        <div className="hidden md:flex flex-1 relative bg-[#00ba20] flex-col justify-between overflow-hidden">
          
          {/* MOLDURA CONTÍNUA COM O RECORTE INTEGRADO DA PÍLULA */}
          <div className="absolute inset-0 pointer-events-none z-10 p-6 lg:p-8">
            <div className="relative w-full h-full">
              {/* Borda principal conectada */}
              <div className="w-full h-full rounded-[28px] border-2 border-white/40 border-t-transparent" />
              
              {/* Linha superior esquerda */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-white/40 rounded-tl-[28px]" />
              
              {/* Linha superior direita */}
              <div className="absolute top-0 left-[215px] right-0 h-[2px] bg-white/40" />
            </div>
          </div>

          {/* ÁREA SUPERIOR: TÍTULOS E MÓDULOS */}
          <div className="relative z-20 pt-6 lg:pt-8 pl-8 lg:pl-10 pr-6 space-y-6 lg:space-y-7">
            
            {/* Pílula SuperPortal VR (exatamente encaixada no recorte da moldura) */}
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-white/70 bg-transparent text-xs font-bold text-white tracking-wide shadow-xs">
              <span>SuperPortal VR</span>
              <Search className="w-3.5 h-3.5 text-white stroke-[2.5]" />
            </div>

            {/* Título Principal */}
            <div className="grid grid-cols-12 gap-4 lg:gap-6 items-baseline max-w-4xl">
              <div className="col-span-5">
                <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-black tracking-tight leading-[0.98] text-white">
                  Super<br />
                  Portal<br />
                  VR.
                </h2>
              </div>

              <div className="col-span-7 pl-2 lg:pl-4">
                <p className="text-2xl lg:text-3xl xl:text-[34px] font-extrabold text-[#000000] leading-[1.12] tracking-tight">
                  Facilidade<br />
                  em um só lugar,<br />
                  para você poder mais.
                </p>
              </div>
            </div>

            {/* Linha Horizontal de Módulos (Ícones Lineares e Textos) */}
            <div className="flex flex-wrap items-center gap-x-5 lg:gap-x-7 gap-y-2 text-xs lg:text-[13px] font-semibold text-white">
              <div className="flex items-center gap-1.5">
                <Laptop className="w-4 h-4 text-white stroke-[2]" />
                <span>RH Digital</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bus className="w-4 h-4 text-white stroke-[2]" />
                <span>Mobilidade</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-white stroke-[2]" />
                <span>Benefícios</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-white stroke-[2]" />
                <span>Despesas e Viagens</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Wallet className="w-4 h-4 text-white stroke-[2]" />
                <span>Soluções Financeiras</span>
              </div>
            </div>

          </div>

          {/* ÁREA INFERIOR: SÍMBOLOS +++ E IMAGEM SANGRADA ATÉ A BORDA */}
          <div className="relative z-20 flex items-end justify-between w-full">
            
            {/* Três cruzes contornadas em verde neon (+ + +) com fundo escuro */}
            <div className="flex items-center gap-2 pl-8 lg:pl-10 pb-8 z-30">
              {[1, 2, 3].map((idx) => (
                <div 
                  key={idx} 
                  className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center relative drop-shadow-md"
                >
                  <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
                    <path 
                      d="M22 6H38V22H54V38H38V54H22V38H6V22H22V6Z" 
                      fill="#0d1b11" 
                      stroke="#00ff2e" 
                      strokeWidth="3.5" 
                      strokeLinejoin="round" 
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Imagem Real da Campanha ocupando todo o quadrante inferior direito */}
            <div className="relative w-full max-w-[580px] lg:max-w-[680px] xl:max-w-[760px] h-[340px] lg:h-[400px] xl:h-[440px] overflow-hidden self-end">
              <img 
                src="/vr_portal_woman.jpg" 
                alt="Colaboradora sorridente no escritório VR"
                className="w-full h-full object-cover object-[center_12%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00ba20]/20 via-transparent to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#1d4ed8]/35 to-transparent pointer-events-none" />
            </div>

          </div>

          {/* BOTÃO FLUTUANTE DE ACESSIBILIDADE LATERAL AZUL COBALTO */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col bg-[#0047ba] rounded-l-lg shadow-xl overflow-hidden">
            {/* Ícone de Acessibilidade */}
            <button 
              className="w-8 h-10 flex items-center justify-center text-white hover:bg-[#003894] transition border-b border-white/20"
              title="Acessibilidade"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <circle cx="12" cy="4" r="2" />
                <path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01 0-.02-.01H13c-.35-.2-.75-.3-1.19-.26-.6.06-1.12.39-1.42.89L8.14 11.8C7.4 13.04 7.8 14.65 9.04 15.39c.4.24.84.36 1.28.36.91 0 1.78-.51 2.19-1.35l.89-1.8v5.4h2v-5l2.4 1.4c.5.3 1.1.4 1.7.4h.5v-2h-.5c-.2 0-.4-.1-.5-.2z" />
              </svg>
            </button>
            
            {/* Ícone de Mãos do VLibras */}
            <button 
              className="w-8 h-10 flex items-center justify-center text-white hover:bg-[#003894] transition"
              title="VLibras - Tradução de Língua Brasileira de Sinais"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M21.5 9.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3h-1v-5c0-.83-.67-1.5-1.5-1.5S15 7.17 15 8v4.5h-1V5.5c0-.83-.67-1.5-1.5-1.5S11 4.67 11 5.5v7h-1V7.5c0-.83-.67-1.5-1.5-1.5S7 6.67 7 7.5v8c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5V9.5z" />
              </svg>
            </button>
          </div>

        </div>

      </div>

      {/* ================= RODAPÉ INFERIOR VERDE MENTA PASTEL EXATO ================= */}
      <footer className="w-full h-11 bg-[#d4ffd0] border-t border-[#bbf7b6] px-6 sm:px-10 flex items-center justify-between text-xs text-[#0a481d] font-normal shrink-0 z-30">
        <div>
          © 2026 VR - Todos os direitos reservados
        </div>

        <div className="flex items-center gap-1.5 hover:underline cursor-pointer">
          <HelpCircle className="w-4 h-4 text-[#0a481d] stroke-[1.8]" />
          <span>Ajuda</span>
        </div>
      </footer>

    </div>
  );
};
