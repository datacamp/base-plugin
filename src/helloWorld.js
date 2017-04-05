import Plugin from './index';

class HelloWorld extends Plugin {
  constructor() {
    super();
    this.wordsRemaining = WORDS.slice();
    super.setState(this.wordsRemaining.shift());
  }
  nextWord() { return super.setState(this.wordsRemaining.shift()); }
}

export const WORDS = ['This', 'is', 'Hello', 'World'];
export default HelloWorld;
