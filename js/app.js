const listaImoveis = [
    {
        id: 1,
        titulo: "Apartamento Luxuoso",
        descricao: "Apartamento com 3 quartos, 2 banheiros, sala ampla e cozinha moderna.",
        valor: 500000,
        area: 120,
        quartos: 3,
        tipo: "Apartamento",
        localizacao: "Centro",
        mapa: 'link',
        vendaAluguel: "Venda",
        finalidade: "Residencial",
        fotos: [
            "foto1.jpg", // foto principal
            "foto2.jpg",
            "foto3.jpg"
        ]
    },
    {
        id: 2,
        titulo: "Casa de Campo",
        descricao: "Casa espaçosa com 4 quartos, 3 banheiros, piscina e jardim.",
        valor: 750000,
        area: 300,
        quartos: 4,
        tipo: "Casa",
        localizacao: "Zona Rural",
        mapa: 'link',
        vendaAluguel: "Venda",
        finalidade: "Residencial",
        fotos: [
            "foto1.jpg",
            "foto2.jpg",
            "foto3.jpg"
        ]
    },
    {
        id: 3,
        titulo: "Sala Comercial",
        descricao: "Sala comercial no centro da cidade, ideal para escritórios.",
        valor: 2000,
        area: 50,
        quartos: 0,
        tipo: "Comercial",
        localizacao: "Centro",
        mapa: 'link',
        vendaAluguel: "Aluguel",
        finalidade: "Comercial",
        fotos: [
            "foto1.jpg",
            "foto2.jpg"
        ]
    }
];

console.log(imoveis);