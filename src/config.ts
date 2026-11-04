export const profile = {
  name: 'VOLODYMYR',
  github: 'https://github.com/xkyrell',
  email: 'xkyrell@gmail.com',
  discordId: '371321961881796612',
};

export const url = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};
