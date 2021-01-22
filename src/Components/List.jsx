import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem.jsx';

const List = ({ title, subTitle, expectedValue, ruleset, tape, head, turningMachine }) => {
    return(
        <ListWrapper>
            <h1>{title}</h1>
            <StyledDiv>
            <h2>{subTitle}</h2>
            <UnList>Ruleset:
                <ListItem
                    text={ruleset}
                />
                <ListItem
                    text={'tape: ' + tape}
                />
                <ListItem
                    text={'Head: ' + head}
                />
            </UnList>
            </StyledDiv>
            <p><b>Wartość oczekiwana:</b> {expectedValue}</p>
            <p><span><b>Otrzymana wartość:</b> {turningMachine}</span></p>
            <StyledDiv2>
            <h2>Użyta funkcja</h2>
                {`const turningMachine = (a, b, c, d, e, f) => {
        for (e = 0; d < c; b[e] = f.w, e += f.m, d = f.n) f = a[d][b[e] || 'B'];
        return b;
};`}
            </StyledDiv2>
        </ListWrapper>
    )
};

const ListWrapper = styled.div`
    margin-left: 20px;

    h1{
        font-size: 40px;
        color: #1b1b1b;
        margin-top: 40px;
        margin-bottom: 0px;
    }

    h2 {
        font-size: 24px;
        color: rgba(31, 33, 38, 0.45);
    }

    p{
        font-size: 18px;
        color: rgba(31, 33, 38, 0.45);
        margin-top: 4px;
        margin-bottom: 0px;
        letter-spacing: 3px;
        span {
            color: #0087fe;
        }

        b{
            letter-spacing: 0px;
        }
    }
`;

const StyledDiv = styled.div`
    border: 1px solid rgba(31, 33, 38, 0.04);
    border-radius: 16px;
    width: 100%;
    max-width: 500px;
    margin: 40px 0;
    padding: 16px;
    box-shadow: 4px 20px 16px rgba(31, 33, 38, 0.1);
    white-space: pre-wrap;
`;
const StyledDiv2 = styled.div`
    border: 1px solid rgba(31, 33, 38, 0.04);
    border-radius: 16px;
    width: 100%;
    max-width: 500px;
    margin: 40px 0;
    padding: 16px;
    box-shadow: 4px 20px 16px rgba(31, 33, 38, 0.1);
    white-space: pre-wrap;
`;

const UnList = styled.ul`
    list-style-type: none;
`
export default List;