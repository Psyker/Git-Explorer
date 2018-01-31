import React, { Component } from 'react';
import './App.css';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import theme from './theme.js'
import Results from './components/Results';
import Header from './components/Header';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTopics: []
        }
    }

    _setTopics = (currentTopics) => {
        this.setState({
            currentTopics: currentTopics || []
        })
    };

    _toggleTopic = (topic) => {
        const {currentTopics} = this.state;
        const nextState = currentTopics.includes(topic)
                ? currentTopics.filter(t => t !== topic)
                : currentTopics.concat(topic);
        this.setState({
            currentTopics: nextState
        })
    };

    render() {
        return (
          <section className="container">
              <ReactiveBase
                  app="git-explorer"
                  credentials="2AVCumSBv:0b58d964-f820-4fdc-b49d-1a4b5176d586"
                  type="gitxplore-latest"
                  theme={theme}
              >
                  <div className="flex row-reverse app-container">
                      <Header currentTopics={this.state.currentTopics} setTopics={this._setTopics}/>
                      <div className="results-container">
                          <DataSearch
                              componentId="repo"
                              filterLabel="Search"
                              dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
                              placeholder="Search repositories"
                              autoSuggest="true"
                              iconPosition="left"
                              URLParams
                              className="data-search-container results-container"
                              innerClass={{
                                  input: 'search-input'
                              }}
                          />
                          <Results toggleTopic={this._toggleTopic} currentTopics={this.state.currentTopics}/>
                      </div>
                  </div>
              </ReactiveBase>
          </section>
        );
      }
}

export default App;
