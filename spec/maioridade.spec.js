describe("Teste de validação de maior de idade", function() {
    it ("Validação de maioridade", function() {
        expect(maioridade(18)).toBe("Maior de Idade");
    });
    
});    

describe("Teste de validação de menor de idade", function() {
    it ("Validação de menoridade", function() {
        expect(maioridade(13)).toBe("Menor de Idade");
    });
});
        