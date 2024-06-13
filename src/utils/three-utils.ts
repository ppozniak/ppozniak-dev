import { random } from "maath";

export const randomStarfield = (n: number = 5000) => {
  const positions = random.inSphere(new Float32Array(n * 3), {
    radius: 8,
  }) as Float32Array;
  const colors = new Float32Array(n * 3);

  for (let i = 0; i < n; i++) {
    const r = Math.random();
    const g = Math.random();
    const b = Math.random();

    colors[i] = r;
    colors[i + 1] = g;
    colors[i + 2] = b;
  }

  return {
    colors,
    positions,
  };
};
