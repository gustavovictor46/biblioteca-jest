import {
    cadastrarLivro,
    livroExiste,
    livroDisponivel,
    listarLivros,
    contarLivros,
    obterInformacoes,
    calcularTaxaAtraso
} from './biblioteca.js';


// Livros
describe('Investigação do sistema de biblioteca', () => {

    it('Deve listar todos os livros cadastrados', () => {
        const livros = listarLivros();
        expect(livros).toHaveLength(5);
    });

    it('Deve encontrar um título de um livro cadastrado', () => {
        const livros = listarLivros();
        const titulo = livros.map((l) => l.titulo);
        expect(titulo).toContain('Percy Jackson e o Ladrão de Raios');
    });

     it('Deve identificar se um livro existe na biblioteca', () => {
         expect(livroExiste('É Assim que Acaba')).toBeTruthy();
     });

    it('Deve identificar corretamente que um livro inexistente não existe', () => {
        expect(livroExiste('Senhor dos Anéis')).toBeFalsy();
    });


    // Disponibilidade
    it('Deve identificar um livro disponível', () => {
        expect(livroDisponivel('A Culpa é das Estrelas')).toBe(true);
    });

    it('Deve identificar um livro emprestado como indisponível', () => {
        expect(livroDisponivel('One Piece, Vol. 1')).toBe(false);
    });

    it('Deve identificar um livro inexistente como indisponível', () => {
        expect(livroDisponivel('Cem Anos de Solidão')).toBeFalsy();
    });

    // Quantidade
    it('Deve informar corretamente a quantidade de livros', () => {
        expect(contarLivros()).toBe(5);
    });

    it('Deve retornar a quantidade exata da lista', () => {
        const infos = obterInformacoes();

        expect(infos).toEqual({
            nome: 'Biblioteca Codeverse',
            totalLivros: contarLivros(),
            cidade: 'London',
            provincia: 'ON',
        });

    });




})
