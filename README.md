# LUMEN - Micrositio Comercial Pitch

Este micrositio contiene el pitch deck de inversión para LUMEN.

## Estructura

```
MicroSitio/
├── app/
│   └── comercialpitch/
│       └── page.tsx          # Página principal con login + slides
│
├── components/
│   └── pitch/
│       ├── SlideIntro.tsx    # Slide 1: LUMEN + Equipo
│       ├── SlideProblema.tsx # Slide 2: 6 estadísticas de caos
│       ├── SlideMercado.tsx  # Slide 3: $12.94B + Land & Expand
│       ├── SlideSolucion.tsx # Slide 4: Antes/Después + Workflow
│       ├── SlideTraccion.tsx # Slide 5: 6 métricas de avance
│       ├── SlideEconomics.tsx# Slide 6: Matemática simple
│       ├── SlideAsk.tsx      # Slide 7: $4M + retornos
│       └── SlideCierre.tsx   # Slide 8: Urgencia + contacto
│
└── README.md
```

## Credenciales de Acceso

| Campo | Valor |
|-------|-------|
| Usuario | `Admin` |
| Contraseña | `Lumen2026` |

## Instalación

Estos archivos deben copiarse al proyecto Next.js principal:

1. Copiar `app/comercialpitch/` a `src/app/comercialpitch/`
2. Copiar `components/pitch/` a `src/components/pitch/`

## Ruta de Acceso

Una vez integrado en el proyecto Next.js:

```
http://[dominio]/comercialpitch
```

## Dependencias

El micrositio utiliza:
- Next.js 16+
- React 19+
- Framer Motion
- Tailwind CSS
- Material Symbols (iconos)

## Navegación

- **Flechas del teclado:** ← → para navegar
- **Barra espaciadora:** Siguiente slide
- **Click en indicadores:** Ir a slide específico
- **Botón logout:** Cerrar sesión (esquina inferior derecha)

## Slides

1. **INTRO** - Logo LUMEN + Equipo fundador (CEO, CTO, Chief Medical)
2. **PROBLEMA** - 6 estadísticas del caos en clínicas estéticas
3. **MERCADO** - $12.94B LATAM + estrategia Land & Expand
4. **SOLUCIÓN** - Antes/Después + Workflow 4 fases
5. **TRACCIÓN** - 68 pantallas, 36 especialistas, $1.6M invertidos
6. **ECONOMICS** - Matemática simple del negocio + Dr. Botero
7. **ASK** - $4M USD + 35% anual + dividendos + exit
8. **CIERRE** - Urgencia + Hablemos

---

**LUMEN** - El software que la cirugía plástica de LATAM estaba esperando.
