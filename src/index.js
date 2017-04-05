import { BehaviorSubject } from 'rxjs/BehaviorSubject';

class Plugin {
  constructor() {
    this.state = {};
    this.subject$ = new BehaviorSubject(this.state);
  }

  subscribe(...arg) {
    const subscriber = this.subject$.subscribe(...arg);
    return () => subscriber.unsubscribe();
  }

  getState() { return this.subject$.getValue(); }
  mergeNewState(newState) { return { ...this.state, ...newState }; }
  setState(newState) {
    this.state = this.mergeNewState(newState);
    this.subject$.next(this.state);
  }
}

export default Plugin;
