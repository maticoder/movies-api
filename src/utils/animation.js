export const variants = {
  enter: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
};

export const appear = {
  enter: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
};

export const card = {
  enter: {
    y: 100,
    opacity: 0,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
    },
  },
};
