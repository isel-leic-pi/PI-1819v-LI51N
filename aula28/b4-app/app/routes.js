const Handlebars = require('../node_modules/handlebars/dist/handlebars')

const nop = function () { }
//const tasksSearchScript = require('./tasksSearch')


const noView = async  function () { 
  return 'no view'
}

const scripts = {
  alert: require('./scripts/alert')
} 
//tasksSearchScript = require('./tasksSearch')


const compiledTemplates = {
  welcome: syncToAsync(Handlebars.compile(require('./templates/welcome.hbs').default)),
  alert: syncToAsync(Handlebars.compile(require('./templates/alert.hbs').default)),
}

function syncToAsync(syncF) {
  return async function(...args) {
    return syncF.apply(this, args)
  }
}

module.exports = {
  welcome: {
    view: compiledTemplates.welcome,
    script: () => scripts.alert(compiledTemplates.alert)
  },
  booksSearch: {
    view: compiledTemplates.tasksSearch,
    script: () => tasksSearchScript(compiledTemplates.tasksSearchResults)
  },
  booksBundles: {
    view: noView,
    script: nop
  },
  book: {
    view: async function() { 
      return `no view for task ${arguments[0]} details `
      console.log(`task called with ${arguments[0]}`)
    },
    script: nop
  }
}
