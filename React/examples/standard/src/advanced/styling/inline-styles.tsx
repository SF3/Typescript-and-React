import React, {Component, CSSProperties} from 'react';

const panel = {
    background: 'lightgreen',
    color: 'black',
    padding: '1em'
};

interface State {
    size: number;
}

export class InlineStyles extends Component<{}, State> {
    state = {size: 32};

    setSize = (e: React.ChangeEvent<HTMLInputElement>) =>
        this.setState({size: Number(e.target.value)});

    render() {
        const title: CSSProperties = {
            color: 'red',
            fontWeight: 'bold',
            fontSize: `${this.state.size}px`
        };

        return (
            <div style={panel}>
                <h2 style={title}>Inline Styles</h2>
                <p>
                    We can use simple objects to populate the style prop.
                    You need to use camel case instead of kebab case.
                </p>
                <p>
                    Since these are simple objects we can paramterise the styles.
                </p>
                <p>
                    Complex styles like animation keyframes, media etc are not supported.
                </p>
                <input type='range' min={10} max={60}
                      onChange={this.setSize}
                      value={this.state.size}/>
            </div>
        );
    }
}

