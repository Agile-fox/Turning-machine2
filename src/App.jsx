import React from 'react';
import * as TurningMachine from './TurningMachine/MachineScript.js';
import styled from 'styled-components';
import List from './Components/List.jsx'

function App() {
   const ruleset = `
   {
    q0: {
        1: { w: 'B', m: 1, n: 'q1' } },
    q1: {
        1: { w: '1', m: 1, n: 'q1' },
        0: { w: '0', m: 1, n: 'q2' },
        B: { w: '0', m: 1, n: 'q2' } },
    q2: {
        1: { w: '1', m: 1, n: 'q2' },
        B: { w: '1', m: -1, n: 'q3' } },
    q3: {
        1: { w: '1', m: -1, n: 'q3' },
        0: { w: '0', m: -1, n: 'q3' },
        B: { w: '1', m: 1, n: 'q4' } },
    q4: {
        1: { w: 'B', m: 1, n: 'q1' },
        0: { w: '0', m: 1, n: 'q5' } },
    }
  `;

  return (
    <StyledDiv>
      <List
        title="Maszyna Turinga"
        subTitle="Ustawienia maszyny"
        expectedValue="1,1,1,0,1,1,1"
        tape={"[1, 1, 1]"}
        head={"[q5, q0, 0]"}
        ruleset={ruleset}
        turningMachine={TurningMachine.machineStart}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  *{
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
    font-family: 'DM Sans', sans-serif;
  }
`;
export default App;