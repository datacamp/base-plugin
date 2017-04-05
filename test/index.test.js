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
    plugin.setState({ hello: 'world' });
    unsubscriber1();
    plugin.setState({ hello: 'you', extra: 'infos' });
    unsubscriber2();
    expect(states1).toEqual([null, { hello: 'world' }]);
    expect(states2).toEqual([null, { hello: 'world' }, { hello: 'you', extra: 'infos' }]);
    expect(plugin.getState()).toEqual({ hello: 'you', extra: 'infos' });
    expect(plugin.state).toEqual({ hello: 'you', extra: 'infos' });
  });
});
