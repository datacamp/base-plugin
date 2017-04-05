# plugins-boilerplate
JS boilerplate to create plugins.

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

As helper, a `Pluging` class is created and exported in this repo. Feel free to extend your plugin using this one. It uses Rxjs as peer dependency for the subscribe mehtod. 

### NPM command
```
    npm run test // run unit test
    npm run lint // run linter
    npm run start // build the app in watch mode
    npm run build // build the app in prod mode (+ do lint and test)
    npm run prepublish // run build
```

### How to quickly create a DC plugin
First fork this repo to have quick setup. Remove all the files in the `src` and `test` folders. You are ready to create your plugin.
If you plan to subclass the `Plugin` (which is the fastest way to fit the above conventions), you should run this command: `npm install --save datacamp/plugins-boilerplate.git` to be sure that you always have the latest updated `Plugin` class. Don't forget that this package has Rx as peer dependencies.


### Libraries used (or useful)
- `jest` is used as test runner.
- `webpack` is used to build the library.
- `rxjs` is an easy way to implement the mandatory `subscribe` function.
- `babel` to write es6 code.

Check the `src` and `test` folder to see how to create a DC plugin. 
