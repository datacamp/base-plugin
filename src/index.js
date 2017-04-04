import Rx from 'rxjs/Rx';

export const WORDS = ['This', 'is', 'Hello', 'World'];

class HelloWorld {
  constructor() {
    this.wordsRemaining = WORDS.slice();
    this.subject$ = new Rx.BehaviorSubject(this.wordsRemaining.shift());
    this.updateState();
  }

  subscribe(...arg) {
    const subscriber = this.subject$.subscribe(...arg);
    return () => subscriber.unsubscribe();
  }

  getState() { return this.subject$.getValue(); }

  updateState() { this.state = this.getState(); }

  nextWord() {
    const nextWord = this.wordsRemaining.shift();
    this.subject$.next(nextWord);
    this.updateState();
    return nextWord;
  }
}

export default HelloWorld;
