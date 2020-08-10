import React, {Component} from 'react';
import _ from 'lodash';

import './App.css';

const sportEmojis = [
    '⛷️',
    '🏂',
    '🏇',
    '🏄‍♂️',
    '🏊‍♂️',
    '🥌',
    '⛸️',
    '🏓',
    '🥊',
    '🎾',
    '🏈',
    '🏐',
    '🏀',
    '⚾',
    '⚽',
];

class App extends Component {
    constructor(props) {
        super(props);

        const emojis = _.shuffle(sportEmojis);

        this.state = {
            emojis,
            inProgress: true,
            currentEmoji: 0,
        };
    }

    componentDidMount() {
        const {emojis} = this.state;

        let emoji = 0;

        const interval = setInterval(() => {
            emoji++;

            if (emoji >= emojis.length) {
                emoji = 0;
            }

            this.setState({
                currentEmoji: emoji,
            });
        }, 80);

        console.log(interval);

        setTimeout(() => {
            clearInterval(interval);
        }, _.random(1000, 1500))
    }

    render() {
        const {emojis, currentEmoji} = this.state;

        return <div className="PozdravApp">
            <div className="SlotSpinner SpinnerSide">
                <span  role="img" aria-label="sportski">{emojis[currentEmoji]}</span>
            </div>
            <div className="WaveSpinner SpinnerSide">
                <span role="img" aria-label="pozdrav">👋</span>
            </div>
        </div>
    }
}

export default App;
