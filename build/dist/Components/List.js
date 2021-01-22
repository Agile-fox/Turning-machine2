import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import ListItem from "./ListItem.js";
const List = ({title, subTitle, expectedValue, ruleset, tape, head, turningMachine}) => {
  return /* @__PURE__ */ React.createElement(ListWrapper, null, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement(StyledDiv, null, /* @__PURE__ */ React.createElement("h2", null, subTitle), /* @__PURE__ */ React.createElement(UnList, null, "Ruleset:", /* @__PURE__ */ React.createElement(ListItem, {
    text: ruleset
  }), /* @__PURE__ */ React.createElement(ListItem, {
    text: "tape: " + tape
  }), /* @__PURE__ */ React.createElement(ListItem, {
    text: "Head: " + head
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Warto\u015B\u0107 oczekiwana:"), " ", expectedValue), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", null, "Otrzymana warto\u015B\u0107:"), " ", turningMachine)), /* @__PURE__ */ React.createElement(StyledDiv2, null, /* @__PURE__ */ React.createElement("h2", null, "U\u017Cyta funkcja"), `const turningMachine = (a, b, c, d, e, f) => {
        for (e = 0; d < c; b[e] = f.w, e += f.m, d = f.n) f = a[d][b[e] || 'B'];
        return b;
};`));
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
`;
export default List;
