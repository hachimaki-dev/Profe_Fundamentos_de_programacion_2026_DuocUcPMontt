// ═══════════════════════════════════════════════════════════════
//  📦 Taller: Micro-retos encadenados (Más de 35 ejercicios)
//  ─────────────────────────────────────────────────────────────
//  Niveles 1 al 6 según metodología de idea.md
// ═══════════════════════════════════════════════════════════════

const lvl1Data = [
  {
    type: 'match',
    title: 'Operadores de Comparación',
    instruction: 'Une el símbolo con su verdadero significado en Python.',
    pairs: [
      { left: '<code>==</code>', right: 'Evalúa si dos cosas son exactamente iguales', id: 'a' },
      { left: '<code>!=</code>', right: 'Evalúa si dos cosas son diferentes', id: 'b' },
      { left: '<code>=</code>', right: 'Asigna un valor a una variable (NO compara)', id: 'c' },
      { left: '<code>>=</code>', right: 'Mayor o igual a', id: 'd' },
    ]
  },
  {
    type: 'tf',
    title: 'Igualdad versus Asignación',
    statement: 'En Python, escribir <code>edad = 18</code> pregunta a la computadora si la edad es 18.',
    correct: false,
    explanation: 'Falso. <code>=</code> se usa para ASIGNAR (guardar) el valor 18. Para preguntar/comparar se usaría <code>==</code>.',
  },
  {
    type: 'tf',
    title: 'Comparador estricto vs inclusivo',
    statement: 'La expresión <code>10 > 10</code> da como resultado <code>False</code>.',
    correct: true,
    explanation: 'Verdadero. 10 no es mayor que 10. Si quisiéramos que fuera True, usaríamos <code>>=</code> (mayor o igual).',
  },
  {
    type: 'choice',
    title: 'Completar lo que falta',
    instruction: 'Debe imprimir True solo si la persona tiene 18 años o MÁS.',
    code: 'edad = 18\nprint(edad ___ 18)',
    question: '¿Qué operador falta en el espacio ___?',
    options: ['<code>==</code>', '<code>></code>', '<code>>=</code>', '<code><=</code>'],
    correct: 2,
    explanation: 'El operador mayor o igual <code>>=</code> incluye el caso de tener exactamente 18.',
  },
  {
    type: 'trace',
    title: 'Descubrir el error de sintaxis',
    instruction: 'Este código intenta saber si un nombre es "Ana", pero tiene un error sutil.',
    code: 'nombre = "Ana"\nprint(nombre = "Ana")',
    question: '¿Por qué fallará este código?',
    options: [
      'Porque Ana no tiene comillas', 
      'Porque se usó un solo = dentro del print, lo cual es asignación en lugar de comparación', 
      'Porque print no puede imprimir texto', 
      'El código no fallará, imprimirá True'
    ],
    correct: 1,
    explanation: 'El error más común de los novatos: usar <code>=</code> en lugar de <code>==</code> para comparar adentro de un condicional o print.',
  },
  {
    type: 'trace',
    title: 'Diferente de',
    code: 'a = 5\nb = "5"\nprint(a != b)',
    question: '¿Qué imprimirá el código y por qué?',
    options: [
      '<code>False</code> porque los dos son cinco', 
      '<code>True</code> porque el número 5 es diferente del texto "5"', 
      '<code>Error</code> de tipos', 
      'Muestra 5'
    ],
    correct: 1,
    explanation: 'Los tipos importan mucho. El entero 5 no es lo mismo que el string "5". Así que sí son diferentes (True).',
  },
  {
    type: 'write',
    title: 'Tu turno: Crear código base de comparación',
    prompt: '📝 <strong>El Desafío:</strong><br><br>Escribe un programa corto donde declares una variable `puntos` con el número 150.<br>Luego, usando `print`, muestra en pantalla si `puntos` es mayor a 100.<br><br>👉 <em>Piénsalo y escríbelo en tu cuaderno o IDE.</em>',
    explanationCode: 'puntos = 150\nprint(puntos > 100)',
    explanation: 'Al ejecutar este código, la salida será True. Estás logrando que la computadora haga afirmaciones lógicas.',
  }
];

const lvl2Data = [
  {
    type: 'match',
    title: 'Bloques de decisión',
    pairs: [
      { left: '<code>if</code>', right: 'El punto de entrada. "Si pasa esto..."', id: 'a' },
      { left: '<code>elif</code>', right: 'El plan B. "Sino, probemos con esto..."', id: 'b' },
      { left: '<code>else</code>', right: 'La última opción. "Si nada de lo anterior funcionó, haz esto."', id: 'c' },
      { left: '<code>Indentación</code>', right: 'Los 4 espacios obligatorios que dicen a quién pertenece el código', id: 'd' }
    ]
  },
  {
    type: 'choice',
    title: 'Completar lo que falta',
    instruction: 'Queremos avisar si reprueba.',
    code: 'nota = 3.5\nif nota >= 4.0:\n    print("Aprobado")\n___:\n    print("Reprobado")',
    question: '¿Qué palabra reservada va en el espacio ___?',
    options: ['<code>elif nota < 4.0</code>', '<code>else</code>', '<code>if False</code>', '<code>sino</code>'],
    correct: 1,
    explanation: 'Como reprobar es el caso contrario a aprobar, simplemente el bloque `else` captura cualquier otro resultado (nota < 4.0).',
  },
  {
    type: 'trace',
    title: 'Decisiones Múltiples',
    code: 'edad = 14\n\nif edad >= 18:\n    print("Adulto")\nelif edad >= 13:\n    print("Adolescente")\nelse:\n    print("Niño")',
    question: '¿Qué se imprime en consola?',
    options: ['<code>Adulto</code>', '<code>Adolescente</code>', '<code>Niño</code>', 'Las tres opciones'],
    correct: 1,
    explanation: '14 >= 18 es False. 14 >= 13 es True, así que entra en "Adolescente" y salta el resto.',
  },
  {
    type: 'trace',
    title: 'Descubrir el error lógico: El orden importa',
    instruction: 'Analiza qué condición capturará Python primero.',
    code: 'num = 50\n\nif num > 0:\n    print("Es mayor a cero")\nelif num > 20:\n    print("Es grande")\nelse:\n    print("Es negativo")',
    question: '¿Por qué NUNCA se imprimirá "Es grande", aunque num sea 50?',
    options: [
      'Porque num = 50 es falso', 
      'Porque 50 no es mayor que 20', 
      'Porque la primera condición (num > 0) es verdadera, así que Python ejecuta ese bloque y salta todo el resto', 
      'Porque falta un print'
    ],
    correct: 2,
    explanation: 'El orden de las condiciones es CRUCIAL. Si vas de lo más general a lo más específico, el caso general siempre gana. Debería ser al revés: primero num > 20.',
  },
  {
    type: 'write',
    title: 'Tu turno: Clasificar clima',
    prompt: '📝 <strong>El Desafío:</strong><br><br>Escribe un programa que declare una variable `clima = "Lluvia"`.<br>- Si el clima es "Lluvia", imprimir "Lleva paraguas" ☂️<br>- Si el clima es "Sol", imprimir "Lleva lentes" 🕶️<br>- `else` (para cualquier otro), imprimir "Día normal" ☁️',
    explanationCode: 'clima = "Lluvia"\n\nif clima == "Lluvia":\n    print("Lleva paraguas ☂️")\nelif clima == "Sol":\n    print("Lleva lentes 🕶️")\nelse:\n    print("Día normal ☁️")',
    explanation: 'Has aplicado IF, ELIF y ELSE correctamente. Observa cómo usamos dobles iguales (==) para comparar textos.',
  },
  {
    type: 'write',
    title: 'Tu turno: Verificación de Login',
    prompt: '📝 <strong>El Desafío:</strong><br><br>Crea dos variables: `user = "admin"` y `clave = "1234"`.<br>Si `user` es "admin" y además `clave` es "1234", muestra "Bienvenido".<br>Si no, muestra "Acceso Denegado".',
    explanationCode: 'user = "admin"\nclave = "1234"\n\nif user == "admin" and clave == "1234":\n    print("Bienvenido")\nelse:\n    print("Acceso Denegado")',
    explanation: 'El operador lógico `and` permite conectar dos comprobaciones lógicas. Solo si ambas son True, se ejecuta el IF.',
  }
];

const lvl3Data = [
  {
    type: 'match',
    title: 'Anatomía del ciclo While',
    pairs: [
      { left: '<code>while</code>', right: 'Palabra en inglés para "Mientras". Repite mientras sea True', id: 'a' },
      { left: 'Variable Acumuladora / Contador', right: 'Debe actualizarse dentro del ciclo', id: 'b' },
      { left: 'Condición', right: 'La regla que dicta cuándo el ciclo debe detenerse', id: 'c' },
      { left: 'Ciclo infinito', right: 'El error de la pantalla congelada cuando olvidaste cambiar el contador', id: 'd' }
    ]
  },
  {
    type: 'tf',
    title: 'Actualizar variables',
    statement: 'En un bucle <code>while</code>, si quiero avanzar una variable "x", simplemente la declaro una vez afuera y uso <code>print(x)</code> adentro, se actualizará sola.',
    correct: false,
    explanation: 'Falso. Ninguna variable se actualiza "sola". Debes escribir literalmente <code>x = x + 1</code> (o similar) dentro de la indentación del while.',
  },
  {
    type: 'trace',
    title: 'Cuenta regresiva',
    code: 'c = 3\nwhile c > 0:\n    print(c)\n    c = c - 1\nprint("Fin")',
    question: '¿Qué imprimirá esto, en orden?',
    options: ['<code>1, 2, 3, Fin</code>', '<code>3, 2, 1, Fin</code>', '<code>3, 2, 1, 0, Fin</code>', 'Ciclo infinito'],
    correct: 1,
    explanation: 'Imprime 3, 2, 1. Cuando c llega a 0, la condición 0 > 0 es False, rompe el ciclo e imprime "Fin".',
  },
  {
    type: 'trace',
    title: 'Descubrir el error: Ciclo Infinito',
    code: 'x = 1\nwhile x < 3:\n    print("Hola")\nprint("Adiós")',
    question: '¿Qué pasará con este código?',
    options: ['Imprime Hola dos veces y luego Adiós', 'Imprime Hola tres veces', 'Es un ciclo infinito', 'Error de sintaxis'],
    correct: 2,
    explanation: 'El valor de x arranca en 1 y nunca cambia. Siempre será 1 < 3 (True), así que se quedará imprimiendo "Hola" para siempre.',
  },
  {
    type: 'write',
    title: 'Tu turno: Contar de 1 a 5',
    prompt: '📝 <strong>El Desafío:</strong><br><br>Escribe un ciclo while que empiece una variable `contador` en 1 y logre imprimir los números 1, 2, 3, 4, 5 en la consola.',
    explanationCode: 'contador = 1\nwhile contador <= 5:\n    print(contador)\n    contador = contador + 1',
    explanation: 'El paso fundamental fue el `contador = contador + 1`. Sin esa línea al final, estarías atrapado en un ciclo infinito.',
  },
  {
    type: 'write',
    title: 'Tu turno: La tabla del 2',
    prompt: '📝 <strong>El Desafío:</strong><br><br>Crea una variable `mult` en 1. Haz un while que se repita mientras `mult` sea menor o igual a 10.<br>En cada vuelta, imprime `mult * 2`. No olvides avanzar/aumentar la variable `mult`.',
    explanationCode: 'mult = 1\nwhile mult <= 10:\n    print(mult * 2)\n    mult = mult + 1',
    explanation: '¡Excelente! Estructuraste tu primer ciclo con una operación matemática dinámica. Así funcionan los programas automatizados.',
  }
];

const lvl4Data = [
  {
    type: 'choice',
    title: 'Completar lo que falta (While + If)',
    instruction: 'Queremos imprimir la palabra "Wow" SOLO si el número en el que vamos es 4.',
    code: 'i = 1\nwhile i <= 5:\n    if i == 4:\n        _______\n    i = i + 1',
    question: '¿Qué va en el hueco _______?',
    options: ['<code>print(Wow)</code>', '<code>Wow = True</code>', '<code>print("Wow")</code>', '<code>if "Wow":</code>'],
    correct: 2,
    explanation: 'Un print simple del texto (string) en el caso específico del 4.',
  },
  {
    type: 'trace',
    title: 'Filtro de números',
    code: 'c = 1\nwhile c <= 4:\n    if c % 2 == 0:\n        print("Par")\n    else:\n        print("Impar")\n    c = c + 1',
    question: '¿Cuántas veces se imprimirá la palabra "Par"?',
    options: ['1 vez', '2 veces', '3 veces', '4 veces'],
    correct: 1,
    explanation: 'Los valores de c son 1 (Impar), 2 (Par), 3 (Impar), 4 (Par). "Par" se imprimirá 2 veces en total.',
  },
  {
    type: 'trace',
    title: 'El acumulador condicionado',
    instruction: 'Suma variable total.',
    code: 'i = 1\ntotal = 0\nwhile i <= 5:\n    if i > 3:\n        total = total + i\n    i = i + 1\nprint(total)',
    question: '¿Cuál es el valor final de total?',
    options: ['<code>0</code>', '<code>4</code>', '<code>9</code>', '<code>15</code>'],
    correct: 2,
    explanation: 'Solo suma a "total" cuando i > 3. Así que suma cuando i=4 y cuando i=5. Total = 4 + 5 = 9.',
  },
  {
    type: 'trace',
    title: 'Descubrir el error: Contador bloqueado',
    code: 'n = 1\nwhile n < 5:\n    if n == 3:\n        print("Llegamos al 3")\n    else:\n        n = n + 1',
    question: 'Analiza la ejecución mentalmente. ¿Qué ocurre?',
    options: [
      'Imprime "Llegamos al 3" y termina', 
      'Imprime "Llegamos al 3" infinidad de veces (Ciclo infinito)', 
      'Cuenta bien del 1 al 4, saltando el 3', 
      'Error de sintaxis'
    ],
    correct: 1,
    explanation: 'Cuando n se convierte en 3, entra al IF, imprime, pero se ignora el ELSE, por lo que ¡nunca más se suma 1 a n! `n` se queda en 3 para siempre.',
  },
  {
    type: 'write',
    title: 'Tu turno: Filtrar Pares',
    prompt: '📝 <strong>El Desafío:</strong><br><br>Crea un `while` que cuente números del 1 al 10.<br>ADENTRO del while, usa un `if` para imprimir el número SOLO SI es par (es decir, `num % 2 == 0`).',
    explanationCode: 'num = 1\nwhile num <= 10:\n    if num % 2 == 0:\n        print(num)\n    num = num + 1',
    explanation: '¡Muy bien! Asegúrate de que el aumento del contador `num = num + 1` esté AFUERA del if, para que siempre avance sea o no sea par.',
  },
  {
    type: 'write',
    title: 'Tu turno: Buzón de Saludos',
    prompt: '📝 <strong>El Desafío:</strong><br><br>Variable `c = 1`.<br>Mientras `c <= 3`: <br>  - Imprimir "Hola"<br>  - Si además `c` es exactamente 3, imprimir "Este es el último".<br> - Aumentar `c`.',
    explanationCode: 'c = 1\nwhile c <= 3:\n    print("Hola")\n    if c == 3:\n        print("Este es el último")\n    c = c + 1',
    explanation: 'Lograste inyectar un paso de ejecución lógica condicional mientras mantienes una repetición estandarizada.',
  }
];

const lvl5Data = [
  {
    type: 'match',
    title: 'Las piezas de la validación',
    pairs: [
      { left: '<code>input()</code> inicial', right: 'Preguntar el valor la primera vez, ANTES de iniciar el ciclo', id: 'a' },
      { left: '<code>while (condición de error)</code>', right: 'Atrapar al usuario si ingresa algo equivocado', id: 'b' },
      { left: '<code>input()</code> dentro del ciclo', right: 'Volver a preguntar a la fuerza hasta que responda bien', id: 'c' },
      { left: 'Bloque fuera del ciclo', right: 'Código que solo se ejecuta cuando tenemos los datos buenos', id: 'd' }
    ]
  },
  {
    type: 'choice',
    title: 'El porqué de la validación',
    question: '¿Por qué la instrucción input debe estar ANTES del while y también DENTRO del while?',
    options: [
      'Para gastar más líneas de código.',
      'Porque antes del while se pide el primer intento, y adentro se usa para corregir errores.',
      'Solo se necesita adentro. Ponerlo antes es un error.',
      'Porque Python exige declarar variables dos veces.'
    ],
    correct: 1,
    explanation: 'Necesitamos el primer valor para evaluar el while. Si falla esa evaluación, entramos al while para un nuevo intento.',
  },
  {
    type: 'trace',
    title: 'Validación de entrada',
    instruction: 'Simula que el usuario ingresa -5, luego 0, y por último 3.',
    code: 'n = int(input("Ingresa positivo: "))\nwhile n <= 0:\n    print("Error")\n    n = int(input("Ingresa positivo: "))\nprint("Bien hecho")',
    inputHint: 'Entradas: "-5", luego "0", luego "3"',
    question: '¿Qué se muestra en consola (además de los textos del input)?',
    options: ['Error, Bien hecho', 'Error, Error, Bien hecho', 'Bien hecho', 'Ciclo infinito'],
    correct: 1,
    explanation: 'n=-5 falla la condición y da "Error". n=0 falla y da "Error". n=3 es válido, la condición del while es False, sale del ciclo e imprime "Bien hecho".',
  },
  {
    type: 'write',
    title: 'Tu turno: Exigir mayoría de edad',
    prompt: '📝 <strong>El Desafío:</strong><br><br>1. Pide la edad al usuario con `int(input("Edad: "))`.<br>2. Crea un ciclo que atrape al usuario **ZONA ROJA (edad < 18)**.<br>3. Dentro del ciclo imprime "Debes ser mayor" y vuélvele a pedir la edad.<br>4. Al salir del ciclo imprime "Bienvenido al portal".',
    explanationCode: 'edad = int(input("Edad: "))\nwhile edad < 18:\n    print("Debes ser mayor")\n    edad = int(input("Edad: "))\nprint("Bienvenido al portal")',
    explanation: 'El patrón (Pedir -> MIENTRAS Esté Mal -> Avisar -> Volver a Pedir) es la base de las aplicaciones reales y plataformas web comerciales.',
  },
  {
    type: 'write',
    title: 'Tu turno: Contraseña Segura',
    prompt: '📝 <strong>El Desafío:</strong><br><br>Variable secreta real: `"secreto123"`.<br>1. Pide al usuario: `pwd = input("Pass: ")`.<br>2. Mientras la `pwd` **NO SEA IGUAL** al secreto, muestra "Rechazado" y vuelve a pedirla.<br>3. Al terminar, imprime "Hackeo completado 🐱‍💻".',
    explanationCode: 'pwd = input("Pass: ")\nwhile pwd != "secreto123":\n    print("Rechazado")\n    pwd = input("Pass: ")\nprint("Hackeo completado 🐱‍💻")',
    explanation: '¡Uf! ¡Te manejas brutal en validaciones lógicas! Ya no eres un simple programador usando `print`, ahora obligas decisiones en tiempo real usando `!=`.',
  }
];

const lvl6Data = [
  {
    type: 'flow',
    title: 'Cachipún: Lógica de Flujo',
    diagram: `flowchart TD
    A([Inicio]) --> B[/"Input J1: j1"/]
    B --> C[/"Input J2: j2"/]
    C --> D{j1 == j2?}
    D -- Sí --> E[/"Mostrar: 'Empate'"/]
    D -- No --> F{j1=='Piedra' and j2=='Tijera'?}
    F -- Sí --> G[/"Mostrar: 'Gana J1'"/]
    F -- No --> H[/"Mostrar: 'Ganan otros o Gana J2'"/]
    E --> I([Fin])
    G --> I
    H --> I`,
    inputHint: 'j1 → "Tijera", j2 → "Tijera"',
    question: 'Según el diagrama, para el caso de empate, ¿cuál es la ruta recorrida?',
    options: ['Inicio -> Inputs -> Primera Condición (No) -> Fin', 'Inicio -> Inputs -> Primera Condición (Sí) -> Empate -> Fin', 'Inicio -> Inputs -> Segunda Condición -> Fin', 'Error'],
    correct: 1,
    explanation: 'En los diagramas de flujo integrados, si la condición j1==j2 es "Sí", se recorre inmediatamente a "Empate" y de ahí directo al "Fin".',
  },
  {
    type: 'trace',
    title: 'Cachipún: Código final',
    code: 'j1 = "Piedra"\nj2 = "Papel"\n\nif j1 == j2:\n    print("Empate")\nelif (j1=="Piedra" and j2=="Tijera") or \\\n     (j1=="Papel" and j2=="Piedra") or \\\n     (j1=="Tijera" and j2=="Papel"):\n    print("Gana J1")\nelse:\n    print("Gana J2")',
    inputHint: 'Variables ya inicializadas: j1="Piedra", j2="Papel"',
    question: '¿Quién gana?',
    options: ['Gana J1', 'Gana J2', 'Empate', 'Ninguno'],
    correct: 1,
    explanation: 'J1 es Piedra, J2 es Papel. El bloque elif agrupa las 3 únicas formas en las que el jugador 1 gana. Como ninguna coincide, cae sin necesidad de más comprobaciones al Else: Gana J2.',
  },
  {
    type: 'tf',
    title: 'La ventaja del ELSE puro',
    statement: 'En el problema del Cachipún, si ya revisamos empates en el <code>if</code>, y las victorias del J1 en el <code>elif</code>, es TOTALMENTE NECESARIO escribir otro <code>elif</code> larguísimo para calcular si el J2 gana.',
    correct: false,
    explanation: 'Falso. Ese es el poder de la lógica encadenada. Si no fue empate, y no ganó J1... por puro proceso lógico de descarte, SOLO queda que J2 haya ganado. Así que basta poner un <code>else:</code>.',
  },
  {
    type: 'trace',
    title: 'Cajero Automático (Simulación Mental)',
    code: 'saldo = 1000\nretiro = 300\n\nif retiro <= saldo:\n    saldo = saldo - retiro\n    print("Exitoso")\nelse:\n    print("Fondos Insuficientes")\n\nprint(saldo)',
    question: '¿Cuál es el valor final impreso en la variable saldo?',
    options: ['<code>0</code>', '<code>300</code>', '<code>700</code>', '<code>1000</code>'],
    correct: 2,
    explanation: '300 <= 1000 es True. Saldo es 1000 - 300 = 700.',
  },
  {
    type: 'write',
    title: 'Proyecto: Cajero Básico (sin validación repetición)',
    prompt: '📝 <strong>El Desafío Final 1:</strong><br><br>Variable `monto = 50000`.<br>Pídele al usuario: `compra = int(input("Costo a pagar: "))`.<br>Pídele al usuario: `edad = int(input("Tu edad: "))`.<br><br>Reglas lógicas integradas:<br>1. Si la `edad` es menor a 18, NO LE VENDAMOS. Imprimir "Eres menor".<br>2. Si es 18 o mayor, entramos a otro IF (ANIDADO):<br>   - Si `compra <= monto`: imprimir "Compra lista" e imprimir lo que SOBRÓ del `monto`.<br>   - Sino: imprimir "No te alcanza el dinero".',
    explanationCode: 'monto = 50000\ncompra = int(input("Costo a pagar: "))\nedad = int(input("Tu edad: "))\n\nif edad < 18:\n    print("Eres menor")\nelse:\n    if compra <= monto:\n        print("Compra lista")\n        sobra = monto - compra\n        print(sobra)\n    else:\n        print("No te alcanza el dinero")',
    explanation: 'Has logrado implementar condicionales anidados (un if/else adentro de un else). Esto modela decisiones progresivas: primero revisas el permiso, luego revisas el dinero. ¡Gran trabajo arquitectónico!',
  },
  {
    type: 'write',
    title: 'Proyecto: Adivina el Número (Game Loop Clásico)',
    prompt: '📝 <strong>El Desafío Final 2:</strong><br><br>Vas a crear tu primer juego interactivo repetitivo. El "juego base de videojuegos".<br>La variable `secreto = 7`.<br>Pide: `intento = int(input("Adivina del 1 al 10: "))`<br><br>Mientras `intento` NO sea el `secreto`:<br>  - Imprime "Fallaste."<br>  - Agrega una pista Lógica: `if intento < secreto: print("Es más grande") else: print("Es más pequeño")`<br>  - ¡OBLIGATORIO! -> Vuelve a pedir la variable `intento` al usuario dentro del while.<br><br>Al salir de ese infierno de mentiras (es decir, cuando sean iguales), fuera del while imprime "¡GANASTE!"',
    explanationCode: 'secreto = 7\nintento = int(input("Adivina del 1 al 10: "))\n\nwhile intento != secreto:\n    print("Fallaste.")\n    if intento < secreto:\n        print("Es más grande")\n    else:\n        print("Es más pequeño")\n    \n    # El Game Loop no sobrevive si no actualizas la instrucción!\n    intento = int(input("Adivina del 1 al 10: "))\n\nprint("¡GANASTE!")',
    explanation: '¡Felicitaciones! Has dominado el Game Loop clásico. Tienes una comprobación principal (`while`), ramificaciones secundarias para dar feedback (`if / else`), y actualización de estado de juego (`input`). Estás 100% list@.',
  }
];
