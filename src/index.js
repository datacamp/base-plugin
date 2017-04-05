import { BehaviorSubject } from 'rxjs/BehaviorSubject';

class Plugin {
  constructor() {
    this.state = null;
    this.subject$ = new BehaviorSubject(this.state);
  }

  subscribe(...arg) {
    const subscriber = this.subject$.subscribe(...arg);
    return () => subscriber.unsubscribe();
  }

  getState() { return this.subject$.getValue(); }
  setState(newState) {
    this.state = newState;
    this.subject$.next(newState);
  }
}

export default Plugin;
