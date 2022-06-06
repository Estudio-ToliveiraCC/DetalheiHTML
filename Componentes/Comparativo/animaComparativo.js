export class AnimaComparativo{
    constructor() {
        this.posicaoTela = document.querySelector('#body')

        this.containerDetalhe1 = document.querySelector('#container-detalhe-1')
        this.containerDetalhe2 = document.querySelector('#container-detalhe-2')
        this.containerDetalhe3 = document.querySelector('#container-detalhe-3')
       
    }

    scrollVideo() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    }

    calculoScroll() {
        const posicaoSecao = this.posicaoTela.getBoundingClientRect()['y']

        const container1 = this.containerDetalhe1
        const container2 = this.containerDetalhe2
        const container3 = this.containerDetalhe3

        container1.style.top = ` ${-posicaoSecao / 6}px `
        container2.style.top = ` ${-posicaoSecao / 6}px `
        container3.style.top = ` ${-posicaoSecao / 6}px `
            
        console.log(posicaoSecao)
    }
}