

# 🧠 Enfoque clave (esto cambia la clase completa)

Antes de hablar de ejercicios, hay una idea central:

> **El estudiante no falla en programar… falla en pensar en pasos lógicos pequeños.**

Por eso la clase debe:

1. **Separar lógica de código**
2. **Forzar decisiones simples y explícitas**
3. **Repetir patrones hasta automatizarlos**

---

# 🧩 Metodología recomendada: “Micro-retos encadenados”

Olvídate de ejercicios largos tipo cachipún al inicio. En su lugar:

### 🔹 Estructura de cada ejercicio (muy importante)

Cada ejercicio debe tener 4 fases:

1. **Lectura guiada**
2. **Predicción (sin código)**
3. **Codificación corta (máx 5–10 líneas)**
4. **Variación inmediata**

Esto crea *aprendizaje activo + refuerzo inmediato*.

---

# 🧪 Tipos de ejercicios (progresión realista)

Te propongo una secuencia didáctica en niveles:

---

## 🟢 Nivel 1: Comparaciones puras (SIN while)

Objetivo: dominar operadores

Ejercicios tipo:

* “Imprime si un número es mayor que 10”
* “Imprime si dos números son iguales”
* “Imprime si un número NO es 5”

👉 Aquí el foco NO es programar, es entender:

* `==` vs `=`
* `!=`
* `>` vs `>=`

💡 Técnica clave:
Haz que primero respondan en papel:

```plaintext
¿Esto es verdadero o falso?
5 > 3 → ?
5 == 3 → ?
```

---

## 🟡 Nivel 2: Decisiones con múltiples caminos

Objetivo: estructura mental del `if / elif / else`

Ejercicios tipo:

* Clasificar edad:

  * menor de edad
  * adulto
  * adulto mayor

* Clasificar nota:

  * < 4 → reprobado
  * ≥ 4 → aprobado

💡 Aquí introduces:

* orden de condiciones
* casos borde (muy importante)

---

## 🟠 Nivel 3: Introducir `while` SIN lógica compleja

Objetivo: entender repetición, no decisiones complejas

Ejercicios tipo:

* Contar del 1 al 10
* Mostrar números pares hasta 20
* Sumar números del 1 al N

💡 Aquí el mantra es:

> “while = repetir hasta que deje de cumplirse una condición”

Haz que verbalicen:

> “Esto se repite mientras…”

---

## 🔴 Nivel 4: while + if (pero controlado)

Aquí recién mezclas ambos.

Ejercicios tipo:

* Mostrar números del 1 al 20, pero:

  * si es par → imprimir “par”
  * si no → “impar”

* Contar cuántos números son mayores a 10 en una secuencia

💡 Este es el punto crítico:
Aquí se rompe la cabeza si no dominan lo anterior.

---

## 🔥 Nivel 5: Input + validación (antes de cachipún)

Ejercicios tipo:

* Pedir un número hasta que sea positivo
* Pedir contraseña hasta que sea correcta
* Validar que un número esté entre 1 y 10

Ejemplo clave:

```python
numero = int(input("Ingresa un número positivo: "))

while numero <= 0:
    numero = int(input("Error. Ingresa un número positivo: "))
```

💡 Aquí entrenas:

* condiciones de salida
* validación real (esto es oro profesional)

---

## 💀 Nivel 6: Problemas integrados (recién aquí cachipún)

Ahora sí puedes volver al cachipún, pero como **proyecto final**, no como ejercicio base.

---

# 🧠 Estrategias pedagógicas clave

## 1. “Desarmar antes de programar”

Oblígalos a escribir:

```plaintext
¿Qué tengo que hacer?
1. Pedir número
2. Revisar si es mayor que 10
3. Mostrar resultado
```

Si no hacen esto → no pueden codear.

---

## 2. “Haz visible la lógica”

Pídeles que digan en voz alta:

> “Si pasa esto… entonces hago esto”

Eso entrena pensamiento condicional real.

---

## 3. “Errores intencionales” (muy potente)

Dales código incorrecto:

```python
if numero = 5:
```

Y que lo arreglen.

Esto acelera brutalmente el aprendizaje.

---

## 4. “Variaciones mínimas”

Nunca cambies todo el ejercicio.
Solo cambia UNA cosa:

* de `>` a `>=`
* de positivo a negativo
* de 10 a 100

Esto fortalece patrones.

---

## 5. “Tiempo autónomo real”

Estructura sugerida de clase (90 min):

* 10 min → explicación corta
* 60 min → ejercicios encadenados
* 20 min → revisión colectiva

Pero clave:

> tú NO resuelves todo, ellos luchan con el problema

---

# 🧠 Insight importante (nivel docente)

Tus estudiantes no están fallando en programación…

Están fallando en:

* lógica proposicional
* lectura de condiciones
* abstracción

Por eso:

> cachipún = demasiado complejo como primer integrador

Tiene:

* múltiples condiciones
* estado del juego
* interacción
* validación

Es cognitivamente pesado.

---

# 🚀 Propuesta concreta para tu próxima clase

Lleva una guía con:

* 5 ejercicios nivel 1
* 5 ejercicios nivel 2
* 5 ejercicios nivel 3
* 5 ejercicios nivel 4

👉 Todos cortos (5–10 líneas máximo)

Y termina con:

> “mini desafío: validación de input”

NO cachipún aún.
