# eslint-plugin-jsdoc-issue-repro

Reproduction instructions:
- run `npm install`
- run `npm run lint`
You should see the following error:
```sh
11:1  error  The type 'methodOne' is undefined           jsdoc/no-undefined-types
11:1  error  The type 'nonStaticMethodTwo' is undefined  jsdoc/no-undefined-types
```