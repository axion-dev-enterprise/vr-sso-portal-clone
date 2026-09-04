'use client';

import React, { useState } from 'react';
import { 
  Utensils, 
  ShoppingBag, 
  Car, 
  Clock, 
  Bus, 
  CreditCard, 
  Cpu, 
  Mic, 
  Store, 
  ShieldAlert, 
  ArrowRight, 
  Check, 
  Sparkles,
  CheckCircle
} from 'lucide-react';

interface SolutionsGridProps {
  currentBrand: 'vr' | 'axion';
  onOpenAuth: (role: 'trabalhador' | 'empresa' | 'estabelecimento') => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ currentBrand, onOpenAuth }) => {
  const [viewMode, setViewMode] = useState<'vr' | 'axion'>(currentBrand);

  const vrSolutions = [
    {
      id: 'vr-refeicao',
      title: 'VR Refeição',
      category: 'ALIMENTAÇÃO & REFEIÇÃO',
      description: 'Liberdade para seu colaborador escolher entre os melhores restaurantes do país.',
      icon: Utensils,
      tag: 'Isenção Fiscal PAT',
      features: ['Aceito em +500 mil estabelecimentos', 'Crédito imediato via PIX', 'App intuitivo com saldo em tempo real']
    },
    {
      id: 'vr-alimentacao',
      title: 'VR Alimentação',
      category: 'SUPERMERCADO & COMPRAS',
      description: 'Comida na mesa da família com aceitação ampla em supermercados e atacadistas.',
      icon: ShoppingBag,
      tag: 'Cultura & Saúde',
      features: ['Ampla rede credenciada', 'Transferência inteligente de saldo', 'Integração com e-commerce']
    },
    {
      id: 'vr-auto',
      title: 'VR Auto',
      category: 'MOBILIDADE CORPORATIVA',
      description: 'Gestão de combustível e manutenção preventiva para frotas de todos os portes.',
      icon: Car,
      tag: 'Redução de Custos',
      features: ['Controle de consumo por veículo', 'Relatórios automatizados de gastos', 'Desconto em redes parceiras']
    },
    {
      id: 'vr-ponto',
      title: 'VR Ponto & Holerite',
      category: 'AUTOMAÇÃO DE RH',
      description: 'Gestão de jornada 100% digital em conformidade integral com as portarias do MTE.',
      icon: Clock,
      tag: 'Redução de 85% de Tempo',
      features: ['Reconhecimento facial & Geolocalização', 'Holerite digital e assinatura eletrônica', 'Exportação instantânea para folha']
    },
    {
      id: 'vr-mobilidade',
      title: 'VR Mobilidade & VT',
      category: 'VALE-TRANSPORTE',
      description: 'Gestão centralizada de vales-transporte e aplicativos de deslocamento urbano.',
      icon: Bus,
      tag: 'Economia de 35%',
      features: ['Roteamento otimizado de itinerários', 'Zero desperdício de carga', 'Recarga direta em cartões operacionais']
    },
    {
      id: 'vr-multibeneficios',
      title: 'VR Multi Benefícios',
      category: 'FLEXIBILIDADE TOTAL',
      description: 'Um único cartão com múltiplas carteiras para premiação, home office e cultura.',
      icon: CreditCard,
      tag: 'Cartão Elo Flex',
      features: ['Bandeira aceita em todo o Brasil', 'Divisão por categorias orçamentárias', 'Gestão de limites em tempo real']
    }
  ];

  const axionSolutions = [
    {
      id: 'axion-pay',
      title: 'AXION Pay Core',
      category: 'GATEWAY & CHECKOUT SPA',
      description: 'Orquestração financeira multi-adquirente com PIX dinâmico, recorrência e liquidação instantânea.',
      icon: CreditCard,
      tag: 'Latência < 50ms',
      features: ['Split de pagamentos automático', 'Antifraude inteligente com IA', 'Checkout com conversão de 98.4%']
    },
    {
      id: 'axion-flow',
      title: 'AXION Flow (Agents)',
      category: 'PLATAFORMA DE IA MULTI-TENANT',
      description: 'Runtime de agentes autônomos com streaming SSE progressivo e integração com WhatsApp.',
      icon: Cpu,
      tag: 'ReAct Multi-Pass',
      features: ['Roteamento inteligente de LLMs', 'Conectores nativos via MCP', 'Zero Mock Tool Execution']
    },
    {
      id: 'axion-voice',
      title: 'AXION Voicebox',
      category: 'TELEMETRIA NEURAL & SIP',
      description: 'Assistente de voz em tempo real com síntese neural local e integração a WebRTC/SIP.',
      icon: Mic,
      tag: 'FastMCP /mcp',
      features: ['Transcrição STT instantânea', 'Síntese TTS com voz natural', 'Sidecar GPU otimizado']
    },
    {
      id: 'axion-pdv',
      title: 'AXION PDV System',
      category: 'VAREJO OFFLINE-FIRST',
      description: 'Sistema de frente de caixa offline-first para estabelecimentos comerciais com sync automático.',
      icon: Store,
      tag: 'Offline-First DB',
      features: ['Funcionamento sem internet', 'Emissão de NFC-e em lote', 'Sincronização em background']
    },
    {
      id: 'axion-security',
      title: 'AXION Security Audit',
      category: 'RED TEAM & AUDITORIA',
      description: 'Painel de testes de invasão automatizados, monitoramento de túneis Poseidon e conformidade LGPD.',
      icon: ShieldAlert,
      tag: 'Zero Vulnerability',
      features: ['Varredura diária de CVEs', 'Proteção DDoS em nível de borda', 'Logs auditáveis RFC 7807']
    },
    {
      id: 'axion-hub',
      title: 'AXION Hub Connectors',
      category: 'REGISTRY DE APIS',
      description: 'Central de integração multi-tenant conectando CRM, Meta Ads, Google e ERPs corporativos.',
      icon: Sparkles,
      tag: 'Vault Secured',
      features: ['Isolamento estrito por tenant', 'Gestão de segredos no Vault', 'Webhooks resilientes']
    }
  ];

  const list = viewMode === 'axion' ? axionSolutions : vrSolutions;

  return (
    <section id="solucoes" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header & Toggle Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-vr-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ecossistema Modular</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {viewMode === 'axion' ? 'Produtos & Arquitetura AXION' : 'Soluções Integradas em um só lugar'}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-2xl">
            {viewMode === 'axion'
              ? 'Conheça o mapeamento direto deste design system adaptado para os produtos industriais AXION.'
              : 'Soluções desenvolvidas para aumentar a produtividade do seu RH e trazer benefícios reais ao colaborador.'}
          </p>
        </div>

        {/* View Mode Switcher Button */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-axion-surface1 border border-slate-200 dark:border-axion-border">
          <button
            onClick={() => setViewMode('vr')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              viewMode === 'vr' 
                ? 'bg-vr-primary text-slate-950 shadow-sm' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Visão VR Benefícios
          </button>
          <button
            onClick={() => setViewMode('axion')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              viewMode === 'axion' 
                ? 'bg-vr-primary text-slate-950 shadow-sm' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Visão Produtos AXION
          </button>
        </div>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((item) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={item.id}
              className={`group relative rounded-3xl p-6 transition-all duration-300 border hover:-translate-y-1 ${
                currentBrand === 'axion'
                  ? 'bg-axion-surface1 border-axion-border text-white hover:border-vr-primary/50 hover:shadow-xl hover:shadow-emerald-500/5'
                  : 'bg-white border-slate-200/80 text-slate-900 hover:border-vr-primary hover:shadow-xl hover:shadow-slate-200/50'
              }`}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-vr-primary">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-axion-surface2 text-slate-600 dark:text-emerald-400">
                  {item.tag}
                </span>
              </div>

              {/* Title & Description */}
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                {item.category}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-vr-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2 border-t border-slate-100 dark:border-axion-border pt-4 mb-6 text-xs text-slate-600 dark:text-slate-300">
                {item.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-vr-primary shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => onOpenAuth('empresa')}
                className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-axion-surface2 group-hover:bg-vr-primary group-hover:text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Saber Mais</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};
