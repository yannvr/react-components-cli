## React styled component generator

"Automate every single boring and repetitive tasks" -- DevOps Handbook

Create a styled component with test (Jest ready) including optionals story and style
component

Create components based on the following structure:
- `src/components/new-component/index.jsx`
- `src/components/new-component/test.jsx`
- `src/components/new-component/story.js` (optional)
- `src/components/new-component/style.js` (optional)

### Usage
You can substitute `yarn` with `npm`
- Create any components type using prompts: 
    - `yarn create-component`
    - `npm run create-component`
- Create styled components interactively using: 
    - `yarn create-component`
    - `npm run create-component` 
- Or without prompt: 
    - `yarn create-component <ComponentName> <stateless|class|pure> <targetDir> [styled] [story]`
    - `npm run create-component <ComponentName> <stateless|class|pure> <targetDir> [styled] [story]`

For instance: `yarn create-component avatar src/component/profile pure true true`
will create a pure component `<Avatar />` in `src/component/profile` including test and story files. 

![screen recording](.github/react-styled-component-screen-recording.gif)

Note: the template can generate unstyled component. You'll just have to remove styled component references.
