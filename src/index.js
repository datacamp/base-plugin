/* eslint-disable no-plusplus, guard-for-in, no-restricted-syntax */

class Plugin {
  constructor() {
    this.state = {};
    this.subscriberCount = 0;
    this.subscribers = {};
  }

  subscribe(fn) {
    const count = ++this.subscriberCount;
    fn(this.state);
    this.subscribers[count] = fn;
    return () => delete this.subscribers[count];
  }

  getState() { return this.state; }
  mergeNewState(newState) { return { ...this.state, ...newState }; }
  setState(newState) {
    this.state = this.mergeNewState(newState);
    for (const i in this.subscribers) {
      this.subscribers[i](this.state);
    }
  }
}

export const PLUGIN_NAME = 'Plugin';
export default Plugin;
