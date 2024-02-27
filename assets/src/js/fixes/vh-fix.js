const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('DOMContentLoaded', appHeight)
window.addEventListener('resize', appHeight)
