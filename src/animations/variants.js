export const home = {
  initial: {
    opacity: 0,
    x: 0,
  },
  in: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
  out: {
    opacity: 0,
    x: '-100vw',
    transition: { duration: 0.5 },
  },
};

export const detail = {
  ...home,
  out: {
    opacity: 0,
    x: '100vw',
    transition: { duration: 0.5 },
  },
};
