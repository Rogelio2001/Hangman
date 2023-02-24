var ENGLISH_WORDS = [
  "ser",  "estar",  "tener",  "hacer",  "decir",  "ir",  "venir",  "dar",  "poder",  "saber",  "querer",  "ver",  "haber",  "dejar",  "poner",  "sentir",  "parecer",  "llevar",  "encontrar",  "mirar",  "comenzar",  "terminar",  "volver",  "necesitar",  "creer",  "conocer",  "contar",  "buscar",  "decidir",  "esperar",  "escuchar",  "trabajar",  "aprender",  "ensenar",  "salir",  "entrar",  "cambiar",  "jugar",  "prestar",  "sacar",  "abrir",  "cerrar",  "sentar",  "levantar",  "caer",  "correr",  "nadar",  "caminar",  "gustar",  "disgustar",  "bonito",  "feo",  "bueno",  "malo",  "grande",  "pequeno",  "alto",  "bajo",  "largo",  "corto",  "nuevo",  "viejo",  "facil",  "dificil",  "rapido",  "lento",  "claro",  "oscuro",  "caliente",  "frio",  "duro",  "blando",  "seco",  "humedo",  "fuerte",  "debil",  "rico",  "pobre",  "sano",  "enfermo",  "limpio",  "sucio",  "bonito",  "feo",  "delgado",  "gordo",  "alegre",  "triste",  "emocionado",  "aburrido",  "cansado",  "listo",  "tonto",  "interesante",  "aburrido",  "famoso",  "ancho",  "estrecho",  "profundo",  "superficial",  "valioso",  "barato",  "amable",  "desagradable",  "amoroso",  "odioso",  "brillante",  "opaco"
];

function randomWord () {
  return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export { randomWord };
