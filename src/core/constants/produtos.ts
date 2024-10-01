import Produto from '../produto/Produto';

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Notebook Gamer Nitro 5',
        descricao: 'O Acer Nitro 5 é um notebook gamer poderoso',
        marca: 'Acer',
        modelo: 'AN515-54-58CL',
        imagem: 'https://i.zst.com.br/thumbs/12/3a/14/-1121477433.jpg',
        nota: 4.5,
        videoReview: 'https://www.youtube.com/watch?v=8NQFr9De3lU',
        tags: ['Baixou'],
        precoBase: 6499.99,
        precoPromocional: 5999.99,
        menorPreco: 4850.9,
        maiorPreco: 6503.7,
        especificacoes: {
            destaque: 'NVIDIA Geoforce RTX 2060',
            Processador: 'Intel Core i5-9300H',
            Memória: '16GB DDR4',
            Armazenamento: '512GB SSD',
            'Placa de Video': 'NVIDIA Geoforce RTX 2060',
            Tela: '15.6 polegadas Full HD',
            Peso: '2.5 Kg',
        },
    },
]

export default produtos