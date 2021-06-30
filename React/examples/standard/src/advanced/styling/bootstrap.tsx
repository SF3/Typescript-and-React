import React, {Component} from 'react';
import classNames from 'classnames';

const primaryButton = ['btn', 'btn-primary'];

interface State {
    largeButton1: boolean;
    largeButton2: boolean;
}

export class Bootstrap extends Component<{}, State> {
    state = {
        largeButton1: false,
        largeButton2: false,
    };

    toggleButton = (buttonName: keyof State) => () => {
        return this.setState({[buttonName]: !this.state[buttonName]} as Pick<State, keyof State>);
    };

    toggleButton1 = this.toggleButton("largeButton1");
    toggleButton2 = this.toggleButton("largeButton2");

    render() {
        return (
            <div className='row card bg-light border-dark p-4'>
                <div className='col-12'>
                    <h2>Bootstrap Example</h2>
                    <p>
                        Bootstrap is a good example of how well structured
                        global styles can be used across your applications.
                    </p>
                    <p>
                        Packages like "classnames" can make conditional
                        classes and combination easier.
                    </p>
                </div>
                <div className='col-12 row'>
                    <button className={classNames(
                        {'col-3': !this.state.largeButton1},
                        {'col-4': this.state.largeButton1},
                        'offset-1', primaryButton)}
                            onClick={this.toggleButton1}>
                        Primary
                    </button>
                    <button className={classNames(
                        {'col-3': !this.state.largeButton2},
                        {'col-4': this.state.largeButton2},
                        'offset-1', 'btn', 'btn-secondary')}
                            onClick={this.toggleButton2}>
                        Secondary
                    </button>
                </div>
            </div>
        );
    }
}

