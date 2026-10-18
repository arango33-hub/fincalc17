[README.md](https://github.com/user-attachments/files/33635712/README.md)
# FinCalc 17

**Español** · [English](#english)

## Español

FinCalc 17 es un **proyecto de prueba** para crear una calculadora financiera con más prestaciones que las calculadoras financieras que conozco hoy. Está inspirada en la lógica de uso de la **HP 17BII**: menús con teclas de función bajo la pantalla y la regla de "número + tecla guarda el valor, tecla sola lo calcula". Tiene diseño propio y funciones nuevas.

### Qué tiene

- **Valor del dinero en el tiempo (VDT):** N, %IA, VA, PAGO, VF, pagos por año, modo inicial o final, y tabla de amortización completa.
- **Flujos de caja:** VPN, VFN, TIR, TIRM, VP, VF, relación beneficio/costo y diagrama gráfico de los flujos.
- **Equivalencia de tasas:** efectivas, periódicas, nominales, vencidas y anticipadas (EA, MV, MA, TV, NAMV, NATA, etc.), con año base de 365 o 360 días y periodos de N días.
- **Conversión de interés** periódica y continua, y cálculos comerciales: cambio porcentual, porcentaje del total y márgenes.
- **100 memorias** (R00 a R99) con nombre, fecha y bloqueo.
- **Edición de operaciones:** la operación completa se ve en pantalla y se puede tocar para corregir cualquier número u operador.
- **Cinta de operaciones** para revisar y reabrir cálculos anteriores.
- **Precisión extendida** de 34 dígitos, o 12 dígitos para cuadrar contra una calculadora física.
- Orden de operaciones HP (izquierda a derecha) o matemático.

### Cómo usarla

Abra la página publicada del repositorio en el navegador e instálela como aplicación:

- **Android:** en Chrome, toque **⋮ → Instalar aplicación** (o **Agregar a pantalla principal → Instalar**).
- **iPhone:** en Safari, toque el botón **Compartir** (el cuadro con la flecha hacia arriba, en la barra de abajo), luego **Agregar a pantalla de inicio** y **Agregar**. Si no aparece la opción, deslice la lista hacia abajo o toque **Editar acciones** para activarla.
- **iPad:** en Safari, toque el botón **Compartir** (arriba a la derecha, junto a la barra de direcciones), luego **Agregar a pantalla de inicio** y **Agregar**.
- **Windows:** en Edge o Chrome, use el ícono de instalar en la barra de direcciones, o el menú **⋯ → Aplicaciones → Instalar esta página como aplicación**.

En iPhone y iPad se recomienda Safari; con iOS 16.4 o posterior también funciona desde Chrome, con el mismo botón **Compartir**. En Apple, la aplicación instalada guarda sus datos aparte de Safari, así que abra siempre FinCalc 17 desde su ícono.

Una vez instalada funciona **sin conexión**. Todos los cálculos y datos se quedan en el dispositivo; nada se envía a ningún servidor. Cuando hay una versión nueva, la aplicación lo avisa y se actualiza con un toque, sin perder las memorias.

### Estado

Proyecto personal en desarrollo, construido con ayuda de Claude (Anthropic). Algunos menús, como BONO, DEPRC, SUMA, HORA y RESOL, todavía no están disponibles. Los resultados deben verificarse antes de usarse en decisiones importantes.

### Créditos y aviso

- Cálculos de precisión con [decimal.js](https://github.com/MikeMcl/decimal.js) (licencia MIT).
- HP y HP 17BII son marcas de HP Inc. Este proyecto no está afiliado, patrocinado ni aprobado por HP Inc.; solo toma inspiración de la lógica de uso de esa calculadora.

---

## English

FinCalc 17 is a **test project** to build a financial calculator with more capabilities than the financial calculators I know today. It is inspired by the way the **HP 17BII** works: menus driven by function keys under the display, and the rule "number + key stores the value, key alone solves it." It has its own design and new features.

### Features

- **Time value of money (TVM):** N, %I/YR, PV, PMT, FV, payments per year, begin or end mode, and a full amortization schedule.
- **Cash flows:** NPV, NFV, IRR, MIRR, PV, FV, benefit/cost ratio, and a cash-flow diagram.
- **Rate equivalence:** effective, periodic and nominal rates, in arrears or in advance (Colombian notation: EA, MV, MA, TV, NAMV, NATA, etc.), with a 365- or 360-day year and N-day periods.
- **Interest conversion** (periodic and continuous) and business math: percent change, percent of total, and markups.
- **100 memories** (R00 to R99) with names, dates and locking.
- **Expression editing:** the whole calculation is shown on screen, and any number or operator can be tapped to fix it.
- **Calculation tape** to review and reopen earlier calculations.
- **Extended precision** of 34 digits, or 12 digits to match a physical calculator.
- HP order of operations (left to right) or standard math order.

### How to use it

Open this repository's published page in a browser and install it as an app:

- **Android:** in Chrome, tap **⋮ → Install app** (or **Add to Home screen → Install**).
- **iPhone:** in Safari, tap the **Share** button (the square with an upward arrow, in the bottom bar), then **Add to Home Screen** and **Add**. If the option is missing, scroll down the list or tap **Edit Actions** to turn it on.
- **iPad:** in Safari, tap the **Share** button (top right, next to the address bar), then **Add to Home Screen** and **Add**.
- **Windows:** in Edge or Chrome, use the install icon in the address bar, or the menu **⋯ → Apps → Install this site as an app**.

Safari is recommended on iPhone and iPad; on iOS 16.4 or later it also works from Chrome, using the same **Share** button. On Apple devices the installed app keeps its data separate from Safari, so always open FinCalc 17 from its icon.

Once installed it works **offline**. All calculations and data stay on the device; nothing is sent to any server. When a new version is available, the app shows a notice and updates with one tap, keeping your memories.

### Status

Personal project under development, built with the help of Claude (Anthropic). Some menus, such as BOND, DEPRC, SUM, TIME and SOLVE, are not available yet. Results should be checked before using them for important decisions.

### Credits and notice

- High-precision math by [decimal.js](https://github.com/MikeMcl/decimal.js) (MIT license).
- HP and HP 17BII are trademarks of HP Inc. This project is not affiliated with, sponsored by or endorsed by HP Inc.; it only takes inspiration from how that calculator is used.
