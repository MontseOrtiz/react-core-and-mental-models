import confetti from "canvas-confetti";

const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ["#FFD6EC", "#E0BBFF", "#D8B4FE", "#BDE0FE", "#CDE7FF"],
};

export const shoot = () => {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
};
