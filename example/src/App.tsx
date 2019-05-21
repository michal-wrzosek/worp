import React, { Component } from "react";
import styled from "styled-components";

import { fixtureFactory, FactoryInstructions } from "./reactComponentLib";

const StyledDiv = styled.div`
  padding: 10px;
  background-color: blue;
  color: white;
`;

type ExampleProps = {
  a: string;
  b: number;
  c: string;
};

class App extends Component {
  render() {
    const factoryInstructions: FactoryInstructions<ExampleProps> = {
      a: index => `propert A, record nr: ${index + 1}`,
      b: index => index + 1,
      c: () =>
        `propert C, random integer from 1 to 10: ${Math.ceil(
          Math.random() * 10
        )}`
    };

    const records = fixtureFactory(factoryInstructions, {
      nrOfRecordsToGenerate: 100
    });

    return (
      <div>
        <StyledDiv>Demo App</StyledDiv>
        <ul>
          {records.map(record => (
            <li key={record.a}>
              <ul>
                <li>A: {record.a}</li>
                <li>B: {record.b}</li>
                <li>C: {record.c}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
