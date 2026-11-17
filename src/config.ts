export const profile = {
  name: 'Volodymyr',
  nickname: 'Xkyrell',
  github: 'https://github.xkyrell.me',
  email: 'contact@xkyrell.me',
  discord: 'https://discord.xkyrell.me',
};

export const url = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};
