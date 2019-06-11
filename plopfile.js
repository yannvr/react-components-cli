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
          { name: 'function', value: 'function', checked: true },
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

      {
        type: 'confirm',
        name: 'ts',
        message: 'Typescript?',
        default: false,
      },

    ],

    actions: function(data) {
      let actions = []

      const targetDir = data['directory']
      const baseDir = cwd + '/' + targetDir
      const templateFile = 'plop-templates/'.concat(data.ts ? 'ts' : 'js')
      const fileExt = data.ts ? 'ts' : 'js'

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
            path: baseDir + `/{{selectedComponentCase name}}/{{selectedComponentCase name}}.${fileExt}x`,
            templateFile: `${templateFile}/component.class-component.hbs`,
          })
          break
        case 'pure':
          actions.push({
            type: 'add',
            path: baseDir + `/{{selectedComponentCase name}}/{{selectedComponentCase name}}.${fileExt}x`,
            templateFile: `${templateFile}/component.pure-component.hbs`,
          })
          break
        case 'function':
        default:
          actions.push({
            type: 'add',
            path: baseDir + `/{{selectedComponentCase name}}/{{selectedComponentCase name}}.${fileExt}x`,
            templateFile: `${templateFile}/component.function-component.hbs`,
          })
          break
      }

      if (data.story) {
        actions.push({
          type: 'add',
          path: baseDir + `/{{selectedComponentCase name}}/{{ name }}.story.${fileExt}`,
          templateFile: `${templateFile}/story.hbs`,
        })
      }

      if (data.styled) {
        actions.push({
          type: 'add',
          path: baseDir + `/{{selectedComponentCase name}}/{{ name }}.style.${fileExt}`,
          templateFile: `${templateFile}/style.hbs`,
        })
      }

      actions.push({
        type: 'add',
        path: baseDir + `/{{selectedComponentCase name}}/{{ name }}.test.${fileExt}x`,
        templateFile: `${templateFile}/test.hbs`,
      })

      actions.push({
        type: 'add',
        path: baseDir + `/{{selectedComponentCase name}}/index.${fileExt}`,
        templateFile: `${templateFile}/index.hbs`,
      })

      return actions
    },
  })
}
