type Livro = {
    titulo: String,
    autor: String,
    ano: number
}

function livrosPorAutor(livros: Livro[], autor: string) {
    return livros.filter(livro => livro.autor === autor);
}

console.log(
    livrosPorAutor([
        { titulo: "Capitães de Areia", autor: "Jorge Amado", ano: 1937 },
        { titulo: "Senhora", autor: "José de Alencar", ano: 1875 },
        { titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890 },
        { titulo: "Iracema", autor: "José de Alencar", ano: 1865 },
    ], 
    "José de Alencar"
    )
);