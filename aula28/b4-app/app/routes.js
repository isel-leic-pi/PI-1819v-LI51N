const Handlebars = require('../node_modules/handlebars/dist/handlebars')

const nop = function () { }
//const tasksSearchScript = require('./tasksSearch')


const noView = async  function () { 
  return 'no view'
}

const scripts = {
  alert: require('./scripts/alert'),
  search: require('./scripts/search')
} 
//tasksSearchScript = require('./tasksSearch')


const compiledTemplates = {
  welcome: syncToAsync(Handlebars.compile(require('./templates/welcome.hbs').default)),
  search: syncToAsync(Handlebars.compile(require('./templates/search.hbs').default)),
  searchResults: syncToAsync(Handlebars.compile(require('./templates/searchResults.hbs').default)),
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
  search: {
    view: compiledTemplates.search,
    script: () => scripts.search(compiledTemplates.searchResults)
  },
  booksBundles: {
    view: noView,
    script: nop
  },
  book: {
    view: async function() { 
      return `no view for book ${arguments[0]} details `
      console.log(`task called with ${arguments[0]}`)
    },
    script: nop
  },
  error:  {
    view: async (err) => await compiledTemplates.alert({title: 'An error ocurred', text: err, type: 'danger'}),
    script: nop
  }

}
