function calcular() {
    let adultos = parseInt(document.getElementById('adult').value)
    let crianca = parseInt(document.getElementById('child').value)
    let tempo = parseInt(document.getElementById('hour').value)

    if (tempo >= 6) {
        carnePessoa = 650
        cervejaPessoa = 2000
        bebidaPessoa = 1500
    } else {
        carnePessoa = 400
        cervejaPessoa = 1200
        bebidaPessoa = 1000
    }

    adCarnes = adultos * carnePessoa
    crCarnes = crianca * (carnePessoa / 2)
    adCerveja = adultos * cervejaPessoa
    adBebida = adultos * bebidaPessoa
    crBebida = crianca * (bebidaPessoa / 2)

    let carne = document.getElementById('carne')
    let cerveja = document.getElementById('cerveja')
    let bebida = document.getElementById('bebida')

    carne.innerHTML = (adCarnes + crCarnes) / 1000 + 'kg de carne'
    cerveja.innerHTML = adCerveja / 1000 + 'L de cerveja'
    bebida.innerHTML = (adBebida + crBebida) / 1000 + 'L de refri/água'

}
