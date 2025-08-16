const maioridade = function (idade){
    if(idade <= 0){
        return "Idade Ivalida";
    }

    if(idade >= 18){
        return "Maior de Idade";
    }else{
        return "Menor de Idade";
    }
}    