# plugins-boilerplate
JS boilerplate to create plugins

As Convention, a Datacamp JS plugin should:
- `export default` the plugin class.
- `export` all the useful constants or/and function helpers.
- have as instance variable (at least):
    + `state`: the current state.
- have as instance methods (at least):
    + `subscribe(nextState:(state) => {}, error:(e) => {}, complete:() => {}): function` : only `nextState` argument is mandatory. For every new state, the plugin will trigger the `nextState` function. `subscribe` will return a function that let the possible to unsubscribe to the flow.
    + `getState()`: this function will return the current state.
- implement tests.
- contains tags for every release (+ CHANGELOG eventually)
- 
### NPM command
```
    npm run test // run unit test
    npm run lint // run linter
    npm run start // build the app in watch mode
    npm run build // build the app in prod mode (+ do lint and test)
    npm run prepublish // run build
```

Check the `src` and `test` folder to see how to create a DC plugin. 
