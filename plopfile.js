module.exports = function(plop) {
  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:',
        validate: function(value) {
          if (!value) {
            return 'Please enter a valid component name'
          }
          return true
        },
      },
      {
        type: 'input',
        name: 'Target directory',
        message: 'Target directory:',
        default: 'src/components',
      },
      {
        type: 'list',
        name: 'type',
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

      const targetDir = data['Target directory']
      console.log('targetDir', targetDir)

      switch (data.type) {
        case 'class':
          actions.push({
            type: 'add',
            path: targetDir + '/{{kebabCase name}}/index.jsx',
            templateFile: 'plop-templates/component/index.class-component.hbs',
          })
          break
        case 'pure':
          actions.push({
            type: 'add',
            path: targetDir + '/{{kebabCase name}}/index.jsx',
            templateFile: 'plop-templates/component/index.pure-component.hbs',
          })
          break
        case 'stateless':
        default:
          actions.push({
            type: 'add',
            path: targetDir + '/{{kebabCase name}}/index.jsx',
            templateFile: 'plop-templates/component/index.stateless-component.hbs',
          })
          break
      }

      if (data.story) {
        actions.push({
          type: 'add',
          path: targetDir + '/{{kebabCase name}}/story.js',
          templateFile: 'plop-templates/component/story.hbs',
        })
      }

      if (data.styled) {
        actions.push({
          type: 'add',
          path: targetDir + '/{{kebabCase name}}/style.js',
          templateFile: 'plop-templates/component/style.hbs',
        })
      }

      actions.push({
        type: 'add',
        path: targetDir + '/{{kebabCase name}}/test.jsx',
        templateFile: 'plop-templates/component/test.hbs',
      })

      return actions
    },
  })
}
