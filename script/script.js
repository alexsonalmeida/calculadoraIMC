const dados = window.document.querySelector('#form')

dados.addEventListener('submit', function (e) {
    e.preventDefault();
    const peso = e.target.querySelector('#pes')
    const altura = e.target.querySelector('#alt')
    res.style.display = 'none'

    if (!peso.value && !altura.value) {
        peso.style.border = 'solid 0.125rem red'
        altura.style.border = 'solid 0.125rem red'
    } else if (!peso.value) {
        altura.style.border = 'solid 0.1rem black'
        peso.style.border = 'solid 0.125rem red'
    } else if (!altura.value) {
        peso.style.border = 'solid 0.1rem black'
        altura.style.border = 'solid 0.125rem red'
    } else {
        peso.style.border = 'solid 0.1rem black'
        altura.style.border = 'solid 0.1rem black'

        const p = Number(peso.value)
        const a = Number(altura.value)
        const res = document.querySelector('#res')
        res.style.display = 'block'

        if (isNaN(p) && isNaN(a)) {
            res.innerHTML = '<p>Altura e peso inválidos</p>'
        } else if (isNaN(p)) {
            res.innerHTML = '<p>Peso inválido</p>'
        } else if(isNaN(a)) {
            res.innerHTML = '<p>Altura inválida</p>'
        } else {
            const result = (calcularIMC(p, a)).toFixed(2)
            res.innerHTML = `<p>O seu imc é: ${result}</p>`
        }
    }
})

function calcularIMC(p, a) {
    return p / a ** 2    
}
