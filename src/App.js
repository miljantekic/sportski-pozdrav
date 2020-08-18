import React, {Component} from 'react';
import _ from 'lodash';
import {CopyToClipboard} from "react-copy-to-clipboard";

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
            copied: false,
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

        setTimeout(() => {
            clearInterval(interval);
            this.setState({
                inProgress: false,
            })
        }, _.random(1000, 1500));
    }

    handleCopy = () => {
        this.setState({
            copied: true,
        });
    }

    render() {
        const {emojis, currentEmoji, inProgress, copied} = this.state;

        return <div className="PozdravApp">
            <div className="SpinnersWrapper">
                <div className="SlotSpinner SpinnerSide">
                    <span  role="img" aria-label="sportski">{emojis[currentEmoji]}</span>
                </div>
                <div className="WaveSpinner SpinnerSide">
                    <span role="img" aria-label="pozdrav">👋</span>
                </div>
                {!inProgress && <div className="AdditionalActions">
                    <CopyToClipboard text={`${emojis[currentEmoji]} 👋\n> Powered by sportskipozdrav.rs`} onCopy={this.handleCopy}>
                        <button className="CopyButton">
                            <span>Copy to Cliboard</span>
                        </button>
                    </CopyToClipboard>
                    {copied && <div className="CopiedText">Copied</div>}
                </div>}
            </div>
        </div>
    }
}

export default App;
