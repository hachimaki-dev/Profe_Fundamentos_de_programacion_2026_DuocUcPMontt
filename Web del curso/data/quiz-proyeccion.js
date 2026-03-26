// ═══════════════════════════════════════════════════════════════
//  🎮 Cuestionario de Proyección (Estilo Kahoot)
//  ─────────────────────────────────────────────────────────────
//  Diseñado para pantalla grande. Combinación de Python y Flujos.
// ═══════════════════════════════════════════════════════════════

const quizPresentation = [
  {
    topic: 'Fundamentos',
    question: '¿Para qué sirve la función <code>input()</code> en Python?',
    options: [
      'Para imprimir un texto en la consola',
      'Para pedirle al usuario que escriba algo por teclado',
      'Para convertir un texto a un número entero',
      'Para detener el programa inmediatamente'
    ],
    correct: 1,
    explanation: '¡Exacto! <code>input()</code> pausa el programa y espera que el usuario "ingrese" datos.'
  },
  {
    topic: 'Aritmética',
    question: '¿Cuál es el resultado de la siguiente expresión matemática en Python?',
    code: 'resultado = 10 % 3\nprint(resultado)',
    options: [
      '3',
      '3.33',
      '1',
      '0'
    ],
    correct: 2,
    explanation: 'El operador <code>%</code> (Módulo) calcula el RECADO o RESTO de la división. 10 dividido 3 es 9, sobra 1.'
  },
  {
    topic: 'Lógica',
    question: 'Evalúa la siguiente afirmación lógica en tu mente:',
    code: 'x = 5\nprint(x > 0 and x < 10)',
    options: [
      'False',
      'True',
      'Error',
      'x'
    ],
    correct: 1,
    explanation: '5 es mayor que cero (Verdadero) Y además es menor a 10 (Verdadero). True and True = True.'
  },
  {
    topic: 'Lógica',
    question: '¡Cuidado con los tipos de datos!',
    code: 'a = "10"\nb = 10\nprint(a == b)',
    options: [
      'True',
      'False',
      'Error',
      '1010'
    ],
    correct: 1,
    explanation: 'Una es Texto (String) y el otro es Número (Integer). En Python, <code>"10" != 10</code>.'
  },
  {
    topic: 'Condicionales',
    question: 'Lee el siguiente código. ¿Qué pasa si la temperatura es exactamente 20?',
    code: 'temp = 20\n\nif temp > 20:\n    print("Hace calor")\nelse:\n    print("Está agradable")',
    options: [
      'Hace calor',
      'Está agradable',
      'Imprime ambas',
      'El programa se cae'
    ],
    correct: 1,
    explanation: 'La condición dice ESTRICTAMENTE MAYOR A 20. Como 20 no es mayor que 20 (es igual), se va al Else.'
  },
  {
    topic: 'Condicionales',
    question: 'El orden de ejecución importa. ¿Qué imprimirá este gigante?',
    code: 'edad = 15\n\nif edad > 0:\n    print("Estás vivo")\nelif edad >= 18:\n    print("Eres adulto")\nelse:\n    print("No existes")',
    options: [
      'Estás vivo',
      'Eres adulto',
      'No existes',
      'Estás vivo y luego Eres adulto'
    ],
    correct: 0,
    explanation: 'Python evalúa de arriba a abajo. Como <code>15 > 0</code> es True, ya no mira el resto de los bloques `elif` o `else`.'
  },
  {
    topic: 'Diagramas de Flujo',
    question: '¿Qué número va a imprimir este diagrama si el usuario ingresa un 8?',
    diagram: `flowchart TD
    A([Inicio]) --> B[/"n = input()"/]
    B --> C{n % 2 == 0?}
    C -- Sí --> D["n = n / 2"]
    C -- No --> E["n = n * 2"]
    D --> F[/"Mostrar n"/]
    E --> F
    F --> G([Fin])`,
    options: [
      '16',
      '8',
      '4',
      '0'
    ],
    correct: 2,
    explanation: 'Ocho es par (<code>8 % 2 == 0</code>), toma el camino "Sí" y se divide por 2. Terminamos con 4.'
  },
  {
    topic: 'Diagramas de Flujo',
    question: 'Uniendo condiciones. ¿Qué mostrará el diagrama al final si tengo 30 años pero NO soy VIP?',
    diagram: `flowchart TD
    A([Inicio]) --> B[/"edad = 30"/]
    B --> C[/"vip = False"/]
    C --> D{edad >= 18?}
    D -- Sí --> E{vip == True?}
    D -- No --> F[/"Rechazado"/]
    E -- Sí --> G[/"Pasa al VIP"/]
    E -- No --> H[/"Pasa a Pista General"/]
    F --> I([Fin])
    G --> I
    H --> I`,
    options: [
      'Rechazado',
      'Pasa al VIP',
      'Pasa a Pista General',
      'Fin'
    ],
    correct: 2,
    explanation: '¿Edad >= 18? (30>=18 es Sí) -> ¿vip == True? (False==True es No) -> Pasa a Pista General.'
  },
  {
    topic: 'Ciclos While',
    question: '¿Qué es lo más CATASTRÓFICO que le falta a este código?',
    code: 'vidas = 3\n\nwhile vidas > 0:\n    print("Aún puedes jugar")\n\nprint("Game Over")',
    options: [
      'Falta un <code>if</code>',
      'Falta restarle a <code>vidas</code>, causará un CICLO INFINITO.',
      'Falta sumar <code>vidas = vidas + 1</code>, causará un CICLO INFINITO.',
      'Falta imprimir <code>vidas</code>'
    ],
    correct: 1,
    explanation: 'La variable de control <code>vidas</code> jamás cambia, por lo que <code>vidas > 0</code> será True PARA SIEMPRE (Pantalla Congelada / Ciclo Infinito).'
  },
  {
    topic: 'Ciclos While',
    question: '¿Cuántas veces verás la palabra "Miau" en la pantalla?',
    code: 'gatos = 1\n\nwhile gatos < 4:\n    print("Miau")\n    gatos = gatos + 1',
    options: [
      '4 veces',
      '3 veces',
      '1 vez',
      'Infinitas veces'
    ],
    correct: 1,
    explanation: '<code>gatos</code> vale 1 (Miau), 2 (Miau), 3 (Miau). Cuando vale 4, "4 < 4" es falso, se sale del ciclo. Total: 3 veces.'
  },
  {
    topic: 'Problema Integrado',
    question: '¿Cuál es el ÚNICO objetivo de poner un <code>input()</code> DENTRO de un <code>while</code> repetitivo?',
    options: [
      'Hacer que el código decore mejor el editor',
      'Asegurar que el usuario no pueda seguir usando nuestro software',
      'Validar datos: Obligar y hostigar al usuario a que ingrese algo corregido en caso de que escriba mal la primera vez',
      'Multiplicar los números por dos'
    ],
    correct: 2,
    explanation: '¡Oro puro profesional! Si el usuario te envía un dato podrido (-5 años de edad), lo atrapas en el while y no lo dejas salir hasta que ingrese un dato real.'
  }
];
