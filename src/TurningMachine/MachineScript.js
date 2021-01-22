import { ruleset, tape, head } from './MachineConfig.js';

export const turningMachine = (a, b, c, d, e, f) => {
  for (e = 0; d < c; b[e] = f.w, e += f.m, d = f.n) f = a[d][b[e] || 'B'];
  return b;
};

export const machineStart = turningMachine(ruleset, tape, ...head);
