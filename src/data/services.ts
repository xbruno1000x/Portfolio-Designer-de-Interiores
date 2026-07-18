export type Service = {
  number: string;
  name: string;
  summary: string;
  audience: string;
  deliverables: string[];
  steps: string[];
};

export const services: Service[] = [
  {
    number: '01',
    name: 'Projeto completo de interiores',
    summary:
      'Planejamento integral do ambiente, da primeira ideia ao detalhamento necessário para uma execução segura e coerente.',
    audience: 'Para quem deseja transformar um ou mais ambientes com uma visão completa e personalizada.',
    deliverables: ['Briefing e conceito', 'Layout e circulação', 'Moodboard e materiais', 'Imagens 3D', 'Detalhamento técnico'],
    steps: ['Levantamento', 'Estudo preliminar', 'Anteprojeto', 'Projeto executivo', 'Entrega'],
  },
  {
    number: '02',
    name: 'Consultoria de interiores',
    summary:
      'Orientação objetiva para escolhas de cores, mobiliário, decoração, iluminação e organização do espaço.',
    audience: 'Para quem precisa tomar decisões pontuais com mais segurança, sem desenvolver um projeto completo.',
    deliverables: ['Encontro consultivo', 'Direcionamento visual', 'Lista de recomendações', 'Resumo pós-consultoria'],
    steps: ['Questionário', 'Análise', 'Encontro', 'Recomendações'],
  },
  {
    number: '03',
    name: 'Projeto de ambiente',
    summary:
      'Solução focada em um único espaço, como sala, cozinha, quarto, banheiro ou escritório.',
    audience: 'Para quem quer renovar um ambiente específico com unidade estética e funcional.',
    deliverables: ['Layout', 'Paleta e materiais', 'Mobiliário', 'Imagens 3D', 'Especificações'],
    steps: ['Briefing', 'Conceito', 'Desenvolvimento', 'Apresentação', 'Entrega'],
  },
  {
    number: '04',
    name: 'Layout e circulação',
    summary:
      'Estudo da distribuição de móveis para melhorar fluxos, proporções e aproveitamento de cada metro quadrado.',
    audience: 'Para imóveis novos, reformas leves ou ambientes que parecem pouco práticos no dia a dia.',
    deliverables: ['Planta de layout', 'Alternativas de distribuição', 'Medidas orientativas'],
    steps: ['Medição', 'Diagnóstico', 'Opções de layout', 'Ajustes'],
  },
  {
    number: '05',
    name: 'Modelagem e visualização 3D',
    summary:
      'Imagens realistas para antecipar escolhas e visualizar a atmosfera do projeto antes da execução.',
    audience: 'Para clientes e profissionais que desejam comunicar uma proposta com clareza visual.',
    deliverables: ['Modelo tridimensional', 'Cenas principais', 'Imagens renderizadas', 'Rodada de ajustes'],
    steps: ['Recebimento do projeto', 'Modelagem', 'Materiais', 'Iluminação', 'Renderização'],
  },
  {
    number: '06',
    name: 'Projeto de iluminação',
    summary:
      'Planejamento de pontos, cenas e temperaturas de cor para conciliar conforto, função e atmosfera.',
    audience: 'Para quem quer valorizar o espaço e evitar uma iluminação uniforme ou pouco funcional.',
    deliverables: ['Planta de iluminação', 'Especificação de luminárias', 'Cenas e circuitos', 'Orientações técnicas'],
    steps: ['Análise de uso', 'Conceito luminotécnico', 'Distribuição', 'Especificação'],
  },
];

