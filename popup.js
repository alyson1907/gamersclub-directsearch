function toggleExtensionActivation () {
  getStorage(activatedKey, function (value) {
    const state = value || false
    console.log(state)
    setStorage(activatedKey, !state[activatedKey], function () { })
  })
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('activate-btn').addEventListener('click', toggleExtensionActivation)
})
