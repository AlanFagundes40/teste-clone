describe("Teste da Calculadora", function () {
    it("somas válidas", function () {
        expect(soma(1, 2)).toBe(3);
        expect(soma(10, 5)).toBe(15);
    });

    it("somas inválidas", function () {
        expect(soma(1, 2)).not.toBe(4);
        expect(soma(10, 5)).not.toBe(16);
    });

    it("subtrações válidas", function () {
        expect(subtracao(5, 2)).toBe(3);
        expect(subtracao(10, 5)).toBe(5);
    });

    it("multiplicações válidas", function () {
        expect(multiplicacao(2, 3)).toBe(6);
        expect(multiplicacao(4, 5)).toBe(20);
    });

    it("divisões válidas", function () {
        expect(divisao(6, 2)).toBe(3);
        expect(divisao(10, 5)).toBe(2);
    });
});
