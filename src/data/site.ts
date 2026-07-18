export const siteConfig = {
  name: 'Patricia de Souza Gonçalves',
  shortName: 'Patricia de Souza',
  profession: 'Designer de Interiores',
  description:
    'Projetos de interiores que unem funcionalidade, estética e personalidade em espaços acolhedores e atemporais.',
  city: 'Nova Friburgo, RJ',
  region: 'Atendimento presencial na Região Serrana do Rio de Janeiro e online em todo o Brasil.',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL ?? '',
  whatsapp: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '',
  instagram: import.meta.env.PUBLIC_INSTAGRAM_URL ?? '',
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? 'https://patricadesouza.com.br',
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  whatsappMessage:
    'Olá, Patricia! Conheci seu portfólio e gostaria de conversar sobre um projeto de interiores.',
};

export const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Portfólio', href: '/portfolio/' },
  { label: 'Sobre', href: '/sobre/' },
  { label: 'Serviços', href: '/servicos/' },
  { label: 'Contato', href: '/contato/' },
];

export function whatsappUrl() {
  if (!siteConfig.whatsapp) return '/contato/';
  const number = siteConfig.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}

