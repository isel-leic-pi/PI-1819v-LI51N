module.exports = async function(template) {
  const alerts = document.querySelector('.b4-alerts')

  alerts.innerHtml = await template()


} 