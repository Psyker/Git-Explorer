import React from 'react';
import SearchFilters from './SearchFilters.js'

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    _toggleVisiblity = () => {
        const visible = !this.state.visible;
        this.setState({visible})
    }

    render() {
        return (
            <nav className={`navbar ${this.state.visible ? 'active' : ''}`}>
                <div className="title">Git Explorer</div>
                <div className="btn toggle-btn" onClick={this._toggleVisiblity}>Toggle Filters</div>
                <SearchFilters {...this.props} visible={this.state.visible}/>
            </nav>
        );
    }
}