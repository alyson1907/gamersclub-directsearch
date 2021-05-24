chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!changeInfo.status?.toLowerCase().includes('loading')) return
  const matches = [/^http(s)?:\/\/steamcommunity.com\/id\//g, /^http(s)?:\/\/steamcommunity.com\/profiles\//g]
  const shouldRedirect = matches.some(pattern => pattern.test(tab.url))
  shouldRedirect && chrome.tabs.update(tabId, { url: `https://gamersclub.com.br/buscar?busca=${tab.url}` })
})
