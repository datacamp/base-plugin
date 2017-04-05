import Plugin from '../src/index';

describe('Tests plugin base class', () => {
  test('plugin class', () => {
    expect(new Plugin()).toBeInstanceOf(Plugin);
  });

  test('subscriptions', () => {
    const plugin = new Plugin();
    const states1 = [];
    const states2 = [];
    const unsubscriber1 = plugin.subscribe(state => states1.push(state));
    const unsubscriber2 = plugin.subscribe(state => states2.push(state));
    plugin.setState('test');
    unsubscriber1();
    plugin.setState('test2');
    unsubscriber2();
    expect(states1).toEqual([null, 'test']);
    expect(states2).toEqual([null, 'test', 'test2']);
    expect(plugin.getState()).toEqual('test2');
    expect(plugin.state).toEqual('test2');
  });
});
