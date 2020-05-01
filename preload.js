window.addEventListener('load', function () {
  setTimeout(function () {
    var frames = document.querySelectorAll('iframe')

    Array.from(frames).forEach(f => f.contentDocument)
  }, 500)
})
