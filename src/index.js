window.addEventListener('DOMContentLoaded', () => {

  function scrollTrigger(selector, options = {}) {
    let elements = document.querySelectorAll(selector)

    if (elements.length > 0) {

      elements.forEach(element => {
        element.classList.add('scroll')
        addObserver(element, options)
      })

      elements.forEach(element => addObserver(element, options))
    }
  }

  function addObserver(element, options) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    }, options)
    observer.observe(element)
  }

  scrollTrigger('.section', { rootMargin: '-300px' })
  scrollTrigger('.section__title', { rootMargin: '-300px' })
  scrollTrigger('.section__text', { rootMargin: '-300px' })
  scrollTrigger('.section__block', { rootMargin: '-300px' })
  scrollTrigger('.missions__item', { rootMargin: '-300px' })
  scrollTrigger('.works__item', { rootMargin: '-300px' })
  scrollTrigger('.metrics__demography', { rootMargin: '-300px' })
  scrollTrigger('.metrics__region', { rootMargin: '-300px' })
  scrollTrigger('.metrics__browser', { rootMargin: '-300px' })
  scrollTrigger('.metrics__other', { rootMargin: '-300px' })
  scrollTrigger('.competitive', { rootMargin: '-300px' })
  scrollTrigger('.poll', { rootMargin: '-300px' })
  scrollTrigger('.uxtest-summary', { rootMargin: '-300px' })

});