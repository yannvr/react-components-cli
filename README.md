## React styled component generator

"Automate every single boring and repetitive tasks" -- DevOps Handbook

Create a styled component with test (Jest ready) including optionals story and style
component. Supports Typescript.

Create components based on the following structure (example given in js)
- `src/components/new-component/index.jsx`
- `src/components/new-component/test.jsx`
- `src/components/new-component/story.js` (optional)
- `src/components/new-component/style.js` (optional)

### Installation
- `yarn global add react-components-cli`
or
- `npm -g install react-components-cli`

### Usage
You can substitute `yarn` with `npm run`
- Create any components type using prompts: 
    - `npm run create-component`
    - `yarn run create-component`
- Create styled components interactively using: 
    - `npm run create-component` 
    - `yarn run create-component`
- Or without any prompt: 
    ```
        npx create-component -- 
        --name <ComponentName> 
        --componentType (stateless|class|pure) 
        --componentCase (camel|kebab)
        --directory <targetDir> 
        --story <Boolean>
        --syled <Boolean>
    ```
    
### Examples

- `npx create-component -- --name FunctionComponent  --directory src/components --componentType stateless --styled true --story false --componentCase camel` 
will create a function component `<FunctionComponent />` in `src/component/profile` including test and story files

![screen recording](http://g.recordit.co/XMuQeSSrgy.gif)

### TODO
- Cypress template

Note: the template can generate unstyled component but you'll just have to remove styled component references.
PR welcome for different handling templates with other conventions/libraries
