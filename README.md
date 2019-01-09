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

![screen recording](https://uc4bb3b5388dc795a61fe8103c38.previews.dropboxusercontent.com/p/orig/AASTWhTdAE8wg-wp-2ccqrr76oH7HNg8Xa3aFnLQWQbT6h_RIS7KhMnnKC1bpsBbbckzOlH4j8T8o5I76RO7MrPxpzPW8nWoyT5-8UwZSbIDL0GklVX_g1vayAFXnaX6_T-LlLWOjXqj3OF8aOELWpFuPuR6C-f3Mkn6Cw-E1047PU80EwylipSgP5zZGVm9pgHVDySItFfTO1wTBP2lRNAD_edmbY6OkPIZvzKjjFniOFaKT5AL6T-ENeFHSpkH42YgLEaDFuwDGGV3bMCXNO2KACfth2TGBd-Wo0AMbY_l-L2ZW3k_iJQQcKFy3xByuL9BoLV1_PXRsAUi-b008jOUGUMQ6loRnLxiq0b2-K6fOw/p.gif?size=2048x1536&size_mode=3)

Note: the template can generate unstyled component. You'll just have to remove styled component references.
