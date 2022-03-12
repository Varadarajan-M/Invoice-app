export const getTheme = () => localStorage.getItem('theme') ?? 'light';

export const setTheme = (theme) => localStorage.setItem('theme', theme);
