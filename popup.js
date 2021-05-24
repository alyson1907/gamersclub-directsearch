function updateActivationBtn() {
  const btn = document.getElementById('activate-btn')
  getStorage(activatedKey, function (state = {}) {
    const prev = state[activatedKey] || false
    btn.innerText = prev ? 'Extensão ativada!' : 'Ativar extensão'
  })
}

function toggleExtensionActivation () {
  getStorage(activatedKey, function (state = {}) {
    const prev = state[activatedKey] || false
    setStorage(activatedKey, !prev, function () { })
    updateActivationBtn()
  })
}

document.addEventListener('DOMContentLoaded', function () {
  updateActivationBtn()
  const activateBtn = document.getElementById('activate-btn')
  activateBtn.addEventListener('click', toggleExtensionActivation)
})
