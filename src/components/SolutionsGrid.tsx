'use client';

import React from 'react';
import { 
  Utensils, 
  ShoppingBag, 
  Car, 
  Clock, 
  Bus, 
  CreditCard, 
  ArrowRight, 
  Sparkles,
  CheckCircle
} from 'lucide-react';

interface SolutionsGridProps {
  onOpenAuth: (role: 'trabalhador' | 'empresa' | 'estabelecimento') => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onOpenAuth }) => {

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

  return (
    <section id="solucoes" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Section */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ecossistema Integrado VR</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Soluções Integradas em um só lugar
        </h2>
        <p className="text-slate-500 text-sm mt-2 max-w-2xl">
          Soluções desenvolvidas para aumentar a produtividade do seu RH e trazer benefícios reais ao colaborador.
        </p>
      </div>

      {/* Grid of Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vrSolutions.map((item) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={item.id}
              className="group relative rounded-3xl p-6 transition-all duration-300 border bg-white border-slate-200/80 text-slate-900 hover:border-vr-primary hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-vr-green">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  {item.tag}
                </span>
              </div>

              {/* Title & Description */}
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-1">
                {item.category}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-vr-darker transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2 border-t border-slate-100 pt-4 mb-6 text-xs text-slate-600">
                {item.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-vr-green shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => onOpenAuth('empresa')}
                className="w-full py-2.5 rounded-xl bg-slate-50 group-hover:bg-vr-primary group-hover:text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2"
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
