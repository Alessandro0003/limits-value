import { isOutSide, isOutSideOrEqual } from './limits-value'
import { describe, expect, it } from 'vitest'

describe('Is Out Side to Valor', () => {
  it('deve retornar true se o valor estiver fora do intervalo', () => {
    // Valor menor que min (fora do intervalo inferior)
    expect(isOutSide(9, 10, null)).toBe(true)

    // Valor dentro do intervalo
    expect(isOutSide(15, 10, null)).toBe(false)

    // Valor maior que max (fora do intervalo superior)
    expect(isOutSide(15, null, 10)).toBe(true)

    // Valor dentro do intervalo
    expect(isOutSide(5, null, 10)).toBe(false)

    // Valor igual ao min (dentro do intervalo)
    expect(isOutSide(10, 10, 20)).toBe(false)

    // Valor menor que o min (fora do intervalo inferior)
    expect(isOutSide(9, 10, 10)).toBe(true)

    // Valor dentro do intervalo
    expect(isOutSide(9, 5, 10)).toBe(false)

    // Valor igual ao max (dentro do intervalo)
    expect(isOutSide(20, 10, 20)).toBe(false)

    // Valor igual a min e max (dentro do intervalo)
    expect(isOutSide(15, 15, 15)).toBe(false)
  })

  it('deve retornar false se não houver limites definidos', () => {
    // Sem limites definidos (qualquer valor deve retornar false)
    expect(isOutSide(5, null, null)).toBe(false)
    expect(isOutSide(15, null, null)).toBe(false)
  })
})

describe('Is Out Side Or Equal To Value', () => {
  it('deve retornar true se o valor estiver fora ou igual ao intervalo', () => {
    // Valor menor que min (fora do intervalo inferior)
    expect(isOutSideOrEqual(5, 10, null)).toBe(true)

    // Valor dentro do intervalo
    expect(isOutSideOrEqual(15, 10, null)).toBe(false)

    // Valor maior que max (fora do intervalo superior)
    expect(isOutSideOrEqual(15, null, 10)).toBe(true)

    // Valor dentro do intervalo
    expect(isOutSideOrEqual(5, null, 10)).toBe(false)

    // Valor igual ao min (dentro do intervalo)
    expect(isOutSideOrEqual(10, 10, 20)).toBe(true)

    // Valor igual a min e max (dentro do intervalo)
    expect(isOutSideOrEqual(15, 15, 15)).toBe(true)
  })

  it('deve retornar false se não houver limites definidos', () => {
    // Sem limites definidos (qualquer valor deve retornar false)
    expect(isOutSideOrEqual(5, null, null)).toBe(false)
    expect(isOutSideOrEqual(15, null, null)).toBe(false)
  })
})
