

export class Comentario {

    public nome: string;
    public srcFoto: string;
    public comentario: string;
    public rating: number;
    public horas: string;
    public data: string;

constructor(nome: string, srcFoto: string, comentario: string, rating: number, horas: string, data: string) {
    this.nome = nome;
    this.srcFoto = srcFoto;
    this.comentario = comentario;
    this.rating = rating;
    this.horas = horas;
    this.data = data;
}

}