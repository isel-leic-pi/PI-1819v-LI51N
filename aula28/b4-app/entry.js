'use strict';

require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')


const routes = require('./app/routes')

; // This semicolon is required here. If omitted the JavaScrip interpreter interprets this the following code as a function call, 
// and that is not what we want. This is one of a few singular situations where 
// semicolon is needed even if we have each instruction in its own line.

(function () {  
  let mainContent = document.querySelector('.b4-main')
  let alerts = document.querySelector('.b4-alerts')
  window.addEventListener('hashchange', showView);
  showView();

  async function showView() {  
    let [view, ...params] = window.location.hash.split('/')
    view = view.substring(1)

    let viewTemplate = routes[view]
    if(viewTemplate) {
      try {
        mainContent.innerHTML = await viewTemplate.view.apply(null, params)
        await viewTemplate.script()
      } catch(err) {
        alerts.innerHTML = await routes.error.view(err)
        await routes.error.script()
      }
    } else {
      window.location.hash = '#welcome'
    }
  }
})()
