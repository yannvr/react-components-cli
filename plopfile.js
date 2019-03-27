const path = require('path')

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
        name: 'comptype',
        message: 'What component type is it?',
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
    ],

    actions: function(data) {
      let actions = []

      const targetDir = data['directory']
      const baseDir = cwd + '/' + targetDir

      switch (data.comptype) {
        case 'class':
          actions.push({
            type: 'add',
            path: baseDir + '/{{kebabCase name}}/index.jsx',
            templateFile: 'plop-templates/component/index.class-component.hbs',
          })
          break
        case 'pure':
          actions.push({
            type: 'add',
            path: baseDir + '/{{kebabCase name}}/index.jsx',
            templateFile: 'plop-templates/component/index.pure-component.hbs',
          })
          break
        case 'stateless':
        default:
          actions.push({
            type: 'add',
            path: baseDir + '/{{kebabCase name}}/index.jsx',
            templateFile: 'plop-templates/component/index.stateless-component.hbs',
          })
          break
      }

      if (data.story) {
        actions.push({
          type: 'add',
          path: baseDir + '/{{kebabCase name}}/story.js',
          templateFile: 'plop-templates/component/story.hbs',
        })
      }

      if (data.styled) {
        actions.push({
          type: 'add',
          path: baseDir + '/{{kebabCase name}}/style.js',
          templateFile: 'plop-templates/component/style.hbs',
        })
      }

      actions.push({
        type: 'add',
        path: baseDir + '/{{kebabCase name}}/test.jsx',
        templateFile: 'plop-templates/component/test.hbs',
      })

      return actions
    },
  })
}
