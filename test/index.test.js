import HelloWorld, { WORDS } from '../src/index';

describe('Tests Hello World plugin', () => {
  test('HelloWorld class', () => {
    expect(new HelloWorld()).toBeInstanceOf(HelloWorld);
  });

  test('HelloWorld class using ES5', () => {
    // eslint-disable-next-line
    const HelloWorldES5 = require('../src/index').default;
    expect(new HelloWorldES5()).toBeInstanceOf(HelloWorld);
  });

  test('WORDS constant', () => {
    expect(WORDS).toEqual(['This', 'is', 'Hello', 'World']);
  });

  test('checks subscription', () => {
    const helloWorld = new HelloWorld();
    const states = [];
    const unsubscriber = helloWorld.subscribe(state => states.push(state));
    helloWorld.nextWord();
    unsubscriber();
    helloWorld.nextWord(); // should update `states` since we've unsubscribe before
    expect(states).toEqual(['This', 'is']);
  });

  test('handles multiple subscription', () => {
    const helloWorld = new HelloWorld();
    const states1 = [];
    const states2 = [];
    const unsubscriber1 = helloWorld.subscribe(state => states1.push(state));
    const unsubscriber2 = helloWorld.subscribe(state => states2.push(state));

    helloWorld.nextWord();
    unsubscriber1();
    helloWorld.nextWord(); // should update only `states2`
    unsubscriber2();

    expect(states1).toEqual(['This', 'is']);
    expect(states2).toEqual(['This', 'is', 'Hello']);
  });

  test('gets the current state', () => {
    const helloWorld = new HelloWorld();
    expect(helloWorld.getState()).toEqual('This');
    expect(helloWorld.state).toEqual('This');
    helloWorld.nextWord();
    expect(helloWorld.getState()).toEqual('is');
    helloWorld.nextWord();
    expect(helloWorld.getState()).toEqual('Hello');
    helloWorld.nextWord();
    expect(helloWorld.getState()).toEqual('World');
    expect(helloWorld.state).toEqual('World');
    helloWorld.nextWord();
    expect(helloWorld.getState()).toEqual(undefined);
  });
});
