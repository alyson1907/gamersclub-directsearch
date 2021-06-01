function updateActivationBtn() {
  getStorage(activatedKey, function (state = {}) {
    const prev = state[activatedKey] || false
    const btn = document.getElementById('power-button')
    btn.className = prev ? 'on' : 'off'
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
  const activateBtn = document.getElementById('power-button')
  activateBtn.addEventListener('click', toggleExtensionActivation)
})
