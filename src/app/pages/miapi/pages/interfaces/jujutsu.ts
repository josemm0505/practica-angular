
export interface listaJujutsu {
    jujutsu: Jujutsu[];
}

export interface Jujutsu {
    _id:         string;
    nombre:      string;
    kanji:       string;
    hiragana:    string;
    romaji:      string;
    especie:     string;
    genero:      string;
    edad:        string;
    afiliacion:  string;
    ocupacion:   string;
    grado:       string;
    descripcion: string;
    imagen:      string;
}