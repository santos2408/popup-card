const popup = document.querySelector('.popup-wrapper')
const popupGenerate = document.querySelector('.generate-button')

popupGenerate.addEventListener('click', () => {
   popup.style.top = '0'
})

popup.addEventListener('click', event => {
   const classNameOfClickedElement = event.target.classList[0]
   const classNames = ['popup-button', 'popup-close', 'popup-close-img', 'content']  
   const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

   if (shouldClosePopup) {
      popup.style.top = '-300%'
      popupGenerate.style.display = 'grid'
   }
})

