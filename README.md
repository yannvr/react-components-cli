## React styled component generator

"Automate every single boring and repetitive tasks" -- DevOps Handbook

Create components based on the following structure:
- `src/components/new-component/index.jsx`
- `src/components/new-component/test.jsx`
- `src/components/new-component/story.js` (optional)
- `src/components/new-component/style.js` (optional)

### Usage
- Create any components type using prompts: `npm run create:component` or `yarn run create-styled-component`
- Create styled components interactively using: `npm run create:component` or `yarn run create-styled-component`
- Or without prompt: `npm run create:styled-component <ComponentName> <stateless|class|pure> <targetDir> [styled] [test]`

For instance: `npm run create:styled-component avatar src/component/profile pure true true`
will create a pure component `<Avatar />` in `src/component/profile`. 

https://www.dropbox.com/s/y0hnt2jq6nee3y2/react-styled-component-screen-recording.gif

![screen recording](https://www.dropbox.com/s/y0hnt2jq6nee3y2/react-styled-component-screen-recording.gif?dl=1)

Note: the template can generate unstyled component. You'll just have to remove styled component references.
