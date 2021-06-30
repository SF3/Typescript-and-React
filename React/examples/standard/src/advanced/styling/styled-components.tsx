import React, {ChangeEvent, Component} from 'react';
import styled, {keyframes} from "styled-components";

const Panel = styled.div`
    background: coral;
    color: black;
    padding: 1em;
`;

const Title = styled.h2<{size: number}>`
    color: lime;
    font-weight: bold;
    font-size: ${props => props.size}px;
`;

const spinner = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const Spinner = styled.div`
    margin: 10px;
    width: 100px;
    height: 100px;
    align-content: center;
    animation-name: ${spinner};
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

export class StyledComponents extends Component {
    state = {size: 32};

    setSize = (e: ChangeEvent<HTMLInputElement>) =>
        this.setState({size: e.target.value});

    render() {
        return (
            <Panel>
                <Title size={this.state.size}>Styled Components</Title>
                <p>
                    The style-components allows us to do CSS in JS
                    but unlike inline styles it is creating classes.
                </p>
                <p>
                    The package creates controls that we use in JSX.
                    We can parameterise the components and build the
                    parameters into the class.
                </p>
                <p>
                    Finally, unlike inline styles, animations are supported.
                </p>
                <input type='range' min={10} max={60}
                       onChange={this.setSize}
                       value={this.state.size}/>
                <Spinner>Bad Design!</Spinner>
            </Panel>
        );
    }
}

