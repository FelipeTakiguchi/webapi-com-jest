const validaCpf = require("../../cpf");
const { ValidaCpf } = require("../../cpf")

describe('CPF', () => {
    it('deve validar o cpf 12884927905', () => {
        const res = validaCpf(12884927905);
        expect(res).toBe(true);
    });
    it('deve validar o cpf 14634497980', () => {
        const res = validaCpf(14634497980);
        expect(res).toBe(true);
    });
    it('deve validar o cpf 12345678900', () => {
        const res = validaCpf(12345678900);
        expect(res).toBe(false);
    });
    it('deve validar o cpf 11111111111', () => {
        const res = validaCpf(11111111111);
        expect(res).toBe(false);
    });
    it('deve validar o cpf 92285432943', () => {
        const res = validaCpf(92285432943);
        expect(res).toBe(false);
    });
})