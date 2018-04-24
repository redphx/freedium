let paywallNode = document.querySelector('.js-paywall')

if (paywallNode) {
  let url = window.location.origin + window.location.pathname

  fetch(url)
      .then(response => response.text())
      .then(body => {
          let parser = new DOMParser();
          let htmlDoc = parser.parseFromString(body, 'text/html')
          let newMain = htmlDoc.querySelector('main')

          let main = document.querySelector('main')
          main.parentNode.replaceChild(newMain, main)

          paywallNode.parentNode.removeChild(paywallNode)
      })
}
