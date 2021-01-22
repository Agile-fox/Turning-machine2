# Turning Machine - React.js
https://relaxed-brown-5ea891.netlify.app/

Odpalanie projektu, wpisac w konsole.
pnpm install
pnpm start

##Użyta Funkcja: </br>
`const turningMachine = (a, b, c, d, e, f) => { for (e = 0; d < c; b[e] = f.w, e += f.m, d = f.n) f = a[d]b[e] || 'B']; return b; };`

##Ustawienia maszyny:</br>
`const ruleset = { q0: { 1: { w: 'B', m: 1, n: 'q1' }, }, q1: { 1: { w: '1', m: 1, n: 'q1' }, 0: { w: '0', m: 1, n: 'q2' }, B: { w: '0', m: 1, n: 'q2' }, }, q2: { 1: { w: '1', m: 1, n: 'q2' }, B: { w: '1', m: -1, n: 'q3' }, }, q3: { 1: { w: '1', m: -1, n: 'q3' }, 0: { w: '0', m: -1, n: 'q3' }, B: { w: '1', m: 1, n: 'q4' }, }, q4: { 1: { w: 'B', m: 1, n: 'q1' }, 0: { w: '0', m: 1, n: 'q5' }, }, };`

`const tape = [1, 1, 1];`

`const head = ['q5', 'q0', 0];`
