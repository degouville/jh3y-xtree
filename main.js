import './style.styl'

document.onclick = () => {
  const { innerHTML } = document.body
  document.body.innerHTML = ''
  requestAnimationFrame(() => document.body.innerHTML = innerHTML)
}