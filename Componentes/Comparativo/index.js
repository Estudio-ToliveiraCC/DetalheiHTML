import { AnimaComparativo } from './animaComparativo.js'


window.onload = () => {
    const animaComparativo = new AnimaComparativo
    document.addEventListener('scroll', animaComparativo.scrollVideo.bind(animaComparativo))

}