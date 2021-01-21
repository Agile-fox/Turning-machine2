import React from 'react';
import { machineStart } from './TurningMachine/MachineScript.js';

function App() {
  //Tutaj wklepujecie wasz ruleset ktory uzyliscie, zmiennych nie zaciągałem bo sie nadpisują przez funkcje.
   const usedRuleset = `
   {
    q0: { 1: { w: 'B', m: 1, n: 'q1' } },
    q1: {
      1: { w: '1', m: 1, n: 'q1' },
      0: { w: '0', m: 1, n: 'q2' },
      B: { w: '0', m: 1, n: 'q2' },
    },
    q2: { 1: { w: '1', m: 1, n: 'q2' }, B: { w: '1', m: -1, n: 'q3' } },
    q3: {
      1: { w: '1', m: -1, n: 'q3' },
      0: { w: '0', m: -1, n: 'q3' },
      B: { w: '1', m: 1, n: 'q4' },
    },
    q4: { 1: { w: 'B', m: 1, n: 'q1' }, 0: { w: '0', m: 1, n: 'q5' } },
  }
  `;
  //  Tu wasz rulset sie konczy, jak walniecie bez backticku to wam wyjebie program jak Sasin 70 milionow na wybory które sie nie odbyly

  return (
    <div>
        <h1>Maszyna turninga</h1>
        <p>Ustawienia maszyny.</p>
        <ul>
          <li>Ruleset:<br />
           {usedRuleset}
          </li>
          <li>Tape:
            [1, 1, 1]
          </li>
          <li>Head:
            ["q5", "q0", 0]
          </li>
        </ul>
        <p>Wartośc oczekiwana: 1,1,1,0,1,1,1</p>
        <h4>Otrzymana wartość: {machineStart}</h4>
    </div>
  );
}
export default App;