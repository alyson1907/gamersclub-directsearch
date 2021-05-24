const activatedKey = 'GCDS_activated'

function getStorage (key, onFinish) {
  return chrome.storage.sync.get(key, onFinish)
}

function setStorage (key, value, onFinish) {
  return chrome.storage.sync.set({ [key]: value }, onFinish)
}
