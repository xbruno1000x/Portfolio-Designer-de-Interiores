const envValue = (value: string | undefined) => value?.trim() ?? '';

function normalizeInstagram(value: string) {
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) return value;
  if (/^(?:www\.)?instagram\.com\//i.test(value)) return `https://${value}`;

  const handle = value.replace(/^@/, '').replace(/^\/+|\/+$/g, '');
  return handle ? `https://www.instagram.com/${handle}/` : '';
}

export const siteConfig = {
  name: 'Patricia de Souza Gonçalves',
  shortName: 'Patricia de Souza',
  profession: 'Designer de Interiores',
  description:
    'Projetos de interiores que unem funcionalidade, estética e personalidade em espaços acolhedores e atemporais.',
  city: 'Nova Friburgo, RJ',
  region: 'Atendimento presencial na Região Serrana do Rio de Janeiro e online em todo o Brasil.',
  email: envValue(import.meta.env.PUBLIC_CONTACT_EMAIL),
  whatsapp: envValue(import.meta.env.PUBLIC_WHATSAPP_NUMBER),
  instagram: normalizeInstagram(envValue(import.meta.env.PUBLIC_INSTAGRAM_URL)),
  siteUrl: envValue(import.meta.env.PUBLIC_SITE_URL) || 'https://patricadesouza.com.br',
  formEndpoint: envValue(import.meta.env.PUBLIC_FORM_ENDPOINT),
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
  const number = siteConfig.whatsapp.replace(/\D/g, '');
  if (number.length < 10 || number.length > 15) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}
