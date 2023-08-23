const { Soma, Sub, Mult, Div } = require("../../calc")

describe('Calculadora', () => {
    it('deve retornar o resultado da soma de 1+2', () => {
        const res = Soma(1, 2);
        expect(res).toBe(3);
        expect(res).toBeCloseTo(3,1);
    });
    it('Deve retornar o resultado da subtracao de 2-1', () => {
        const res = Sub(2,1);
        expect(res).toBe(1);
    });
    it('Deve retornar o resultado da multiplicacao de 3*2', () => {
        const res = Mult(3,2);
        expect(res).toBe(6);
    });
    it('Deve retornar o resultado da divisao de 3/2', () => {
        const res = Div(3,2);
        expect(res).toBeCloseTo(1.5);
    });
})