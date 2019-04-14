const path = require('path')
const { upperFirst, kebabCase, camelCase } = require('lodash')

module.exports = function(plop) {

  const cwd = path.resolve('.')

  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (ie: MyComponent):',
        validate: function(value) {
          if (!value) {
            return 'Please enter a valid component name'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Target directory:',
        default: 'src/components',
      },

      {
        type: 'list',
        name: 'componentType',
        message: 'Component type?',
        choices: [
          { name: 'stateless', value: 'stateless', checked: true },
          { name: 'class', value: 'class' },
          { name: 'pure', value: 'pure' },
        ],
      },

      {
        type: 'confirm',
        name: 'styled',
        message: 'Styled component?',
        default: true,
      },

      {
        type: 'confirm',
        name: 'story',
        message: 'Create story?',
        default: true,
      },

      {
        type: 'list',
        name: 'componentCase',
        message: 'What component type is it?',
        choices: [
          { name: 'camelCase', value: 'camel', checked: true },
          { name: 'kebabCase', value: 'kebab' },
        ],
      },

    ],

    actions: function(data) {
      let actions = []

      const targetDir = data['directory']
      const baseDir = cwd + '/' + targetDir

      plop.setHelper('selectedComponentCase', function (text) {
        if (data.componentCase === 'kebab') {
          return kebabCase(text)
        }
        return upperFirst(camelCase(text))
      });

      switch (data.componentType) {
        case 'class':
          actions.push({
            type: 'add',
            path: baseDir + '/{{selectedComponentCase name}}/{{selectedComponentCase name}}.jsx',
            templateFile: 'plop-templates/component/component.class-component.hbs',
          })
          break
        case 'pure':
          actions.push({
            type: 'add',
            path: baseDir + '/{{selectedComponentCase name}}/{{selectedComponentCase name}}.jsx',
            templateFile: 'plop-templates/component/component.pure-component.hbs',
          })
          break
        case 'stateless':
        default:
          actions.push({
            type: 'add',
            path: baseDir + '/{{selectedComponentCase name}}/{{selectedComponentCase name}}.jsx',
            templateFile: 'plop-templates/component/component.stateless-component.hbs',
          })
          break
      }

      if (data.story) {
        actions.push({
          type: 'add',
          path: baseDir + '/{{selectedComponentCase name}}/story.js',
          templateFile: 'plop-templates/component/story.hbs',
        })
      }

      if (data.styled) {
        actions.push({
          type: 'add',
          path: baseDir + '/{{selectedComponentCase name}}/style.js',
          templateFile: 'plop-templates/component/style.hbs',
        })
      }

      actions.push({
        type: 'add',
        path: baseDir + '/{{selectedComponentCase name}}/test.jsx',
        templateFile: 'plop-templates/component/test.hbs',
      })

      actions.push({
        type: 'add',
        path: baseDir + '/{{selectedComponentCase name}}/index.js',
        templateFile: 'plop-templates/component/index.hbs',
      })

      return actions
    },
  })
}
