export const ruleset = {
  q0: {
    1: { w: 'B', m: 1, n: 'q1' },
  },
  q1: {
    1: { w: '1', m: 1, n: 'q1' },
    0: { w: '0', m: 1, n: 'q2' },
    B: { w: '0', m: 1, n: 'q2' },
  },
  q2: {
    1: { w: '1', m: 1, n: 'q2' },
    B: { w: '1', m: -1, n: 'q3' },
  },
  q3: {
    1: { w: '1', m: -1, n: 'q3' },
    0: { w: '0', m: -1, n: 'q3' },
    B: { w: '1', m: 1, n: 'q4' },
  },
  q4: {
    1: { w: 'B', m: 1, n: 'q1' },
    0: { w: '0', m: 1, n: 'q5' },
  },
};

export const tape = [1, 1, 1];

export const head = ['q5', 'q0', 0];
