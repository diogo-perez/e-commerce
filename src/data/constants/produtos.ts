import Produto from '@/data/model/Produto'

const produtos: Produto[] = [
    {
        id: 1,
        nome: 'Smartphone XYZ',
        descricao: 'Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera tripla.',
        preco: 1999.9,
        imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNtYXJ0cGhvbmV8ZW58MHx8fHwxNjA2NTQ2NjUx&ixlib=rb-1.2.1&q=80&w=400',
        desconto: 299,
        categoria: 'Eletrônicos'
    },
    {
        id: 2,
        nome: 'Notebook ABC',
        descricao: 'Notebook com processador Intel i7, 16GB de RAM e 512GB SSD.',
        preco: 4999.9,
        imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxhcHRvcHxlbnwwfHx8fDE2MDY1NDY2NTE&ixlib=rb-1.2.1&q=80&w=400',
        desconto: 999,
        categoria: 'Computadores'
    },
    {
        id: 3,
        nome: 'Fone de Ouvido Bluetooth',
        descricao: 'Fone de ouvido Bluetooth com cancelamento de ruído e bateria de longa duração.',
        preco: 299.9,
        imagem: 'https://images.unsplash.com/photo-1618414074972-723c8314d3db?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desconto: 50,
        categoria: 'Acessórios'
    },
    {
        id: 4,
        nome: 'Smartwatch DEF',
        descricao: 'Smartwatch com monitoramento de atividades físicas e notificações de smartphone.',
        preco: 799.9,
        imagem: 'https://images.unsplash.com/photo-1523395243481-163f8f6155ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desconto: 99,
        categoria: 'Wearables'
    },
    {
        id: 5,
        nome: 'Câmera Digital GHI',
        descricao: 'Câmera digital com 20MP, zoom óptico de 10x e gravação de vídeo em 4K.',
        preco: 2499.9,
        imagem: 'https://images.unsplash.com/photo-1590292339438-5fc3be7fca9d?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desconto: 200,
        categoria: 'Fotografia'
    },
    {
        id: 6,
        nome: 'Impressora 3D XYZ',
        descricao: 'Impressora 3D com alta resolução e suporte para múltiplos materiais.',
        preco: 2999.9,
        imagem: 'https://images.kabum.com.br/produtos/fotos/157632/impressora-3d-creality-ender-3-v2-printer-movimentacao-cartesiana-superficie-de-video-velocidade-maxima-de-100mm-s-9899010260_1620417021_gg.jpg',
        desconto: 500,
        categoria: 'Impressoras'
    },
    {
        id: 7,
        nome: 'Liquidificador HighPower',
        descricao: 'Liquidificador com potência de 1500W e múltiplas funções.',
        preco: 349.9,
        imagem: 'https://jcsbrasil.vteximg.com.br/arquivos/ids/184046-1000-1000/BLST4128-02.jpg?v=637599704283800000',
        desconto: 50,
        categoria: 'Eletrodomésticos'
    },
    {
        id: 8,
        nome: 'Tênis de Corrida ABC',
        descricao: 'Tênis de corrida com tecnologia de amortecimento e design ergonômico.',
        preco: 499.9,
        imagem: 'https://cdn.awsli.com.br/600x450/1575/1575512/produto/105899702/08364116fd.jpg',
        desconto: 75,
        categoria: 'Roupas e Calçados'
    },
]

export default produtos
