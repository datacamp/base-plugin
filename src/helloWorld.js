import Plugin from './index';

class HelloWorld extends Plugin {
  constructor() {
    super();
    this.wordsRemaining = WORDS.slice();
    super.setState(this.wordsRemaining.shift());
  }
  mergeNewState(newState) { return newState; }
  nextWord() { return super.setState(this.wordsRemaining.shift()); }
}

export const WORDS = ['This', 'is', 'Hello', 'World'];
export const PLUGIN_NAME = 'HelloWorld';
export default HelloWorld;
