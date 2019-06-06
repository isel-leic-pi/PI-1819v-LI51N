module.exports = async function(template) {
  const alerts = document.querySelector('.b4-alerts')

  alerts.innerHTML = await template({title: 'Success!', text: 'Bootstrap is working', type: 'success'})
} 