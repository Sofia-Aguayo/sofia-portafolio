export type Proyecto = {
	titulo: string;
	periodo: string;
	contexto: string;
	resumen: string;
	detalles: string[];
	tags: string[];
	enlace?: {
		texto: string;
		href: string;
	};
};

export const proyectos: Proyecto[] = [
	{
		titulo: 'Star Tracker: identificación Lost-In-Space',
		periodo: '2025 — 2026',
		contexto: 'Tesis de título · SPEL',
		resumen:
			'Un satélite que despierta sin saber hacia dónde apunta tiene que deducirlo mirando una sola foto del cielo. Reformulé ese problema como una clasificación supervisada.',
		detalles: [
			'Preprocesamiento geométrico sobre el catálogo Bright Star: parches de 20°×20°, proyección gnomónica y espacio de triángulos del modelo OPMa.',
			'Cada región del cielo se resume en un vector de 1135 elementos que prioriza las configuraciones más distintivas.',
			'Un MLP liviano clasifica entre 1752 regiones, pensado para correr en hardware de un CubeSat.',
			'F1-score macro cercano al 34% sobre un conjunto naturalmente desbalanceado.'
		],
		tags: [
			'Python',
			'Redes neuronales',
			'NumPy',
			'Astronomía',
			'CubeSats'
		],
		enlace: {
			texto: 'Ver repositorio',
			href: 'https://github.com/Sofia-Aguayo/Nanosatellite-star-tracker'
		}
	},

	{
		titulo: 'Proyección de ventas con series temporales',
		periodo: '2025',
		contexto: 'Práctica profesional · Soclifar / Cofar',
		resumen:
			'Propuse y construí una herramienta que anticipa las ventas diarias por canal, para que el área comercial dejara de mirar solo hacia atrás.',
		detalles: [
			'Modelo SARIMA con estacionalidad semanal, justificada a partir del patrón real de ventas por día.',
			'Ventana móvil de entrenamiento de 120 días para reflejar el comportamiento actual del negocio.',
			'Pronóstico a 30 días con restricción de no negatividad y comparación entre valores reales y predichos.',
			'Documenté también los casos no modelables: canales con poca variabilidad o datos insuficientes.'
		],
		tags: [
			'Python',
			'statsmodels',
			'SARIMA',
			'BigQuery',
			'Excel'
		]
	},

	{
		titulo: 'Análisis climático de Santiago',
		periodo: '2025',
		contexto: 'Proyecto académico · Minería de Datos',
		resumen:
			'Comparación de variables climáticas de Santiago entre dos fuentes independientes, para ver cuánto se parecen los datos satelitales a los de estación.',
		detalles: [
			'Consulta y estructuración de datos de NOAA GSOD y NASA POWER mediante BigQuery.',
			'Procesamiento, visualización e interpretación con Pandas y Matplotlib.',
			'Proyecto en equipo, aprobado con nota 6.9.'
		],
		tags: [
			'Python',
			'Pandas',
			'Matplotlib',
			'BigQuery',
			'SQL'
		],
		enlace: {
			texto: 'Ver en GitHub',
			href: 'https://github.com/Sofia-Aguayo/analisis-climatico-santiago-python'
		}
	}
];

export type Divulgacion = {
	titulo: string;
	periodo: string;
	estado?: string;
	resumen: string;
	enlace?: {
		texto: string;
		href: string;
	};
};

export const divulgacion: Divulgacion[] = [
	{
		titulo: 'Ayudantía de Cálculo Integral',
		periodo: 'Actualmente',
		resumen:
			'Acompaño a estudiantes de primeros años con integrales, series y todo lo que suele asustar la primera vez. Me interesa que entiendan de dónde sale cada paso, no que memoricen la receta.'
	},

	{
		titulo: 'Divulgación científica',
		periodo: '2023 — 2024',
		estado: 'En pausa',
		resumen:
			'Una cuenta donde traducía astronomía y física a lenguaje cotidiano. Lleva un buen rato en pausa —la tesis se comió el tiempo—, pero el archivo sigue ahí y la idea es retomarla.',
		enlace: {
			texto: '@astroredd en Instagram',
			href: 'https://www.instagram.com/astroredd/'
		}
	},

	{
		titulo: 'Mentora — NASA International Space Apps Challenge',
		periodo: 'Octubre 2024',
		resumen:
			'Acompañé a equipos de estudiantes revisando y depurando notebooks en Python, dando retroalimentación técnica durante el hackathon.'
	}
];

export type Hito = {
	periodo: string;
	rol: string;
	lugar: string;
	descripcion: string;
};

export const experiencia: Hito[] = [
	{
		periodo: 'May. 2025 — 2026',
		rol: 'Ingeniera de Investigación y Desarrollo',
		lugar: 'Space and Planetary Exploration Laboratory (SPEL)',
		descripcion:
			'Desarrollo y optimización de software de identificación estelar para CubeSats usando redes neuronales. Diseño de pipelines en Python para limpiar y estructurar catálogos estelares, y gestión autónoma de un proyecto de I+D de un año.'
	},

	{
		periodo: 'May. — Ago. 2026',
		rol: 'Investigación en astronomía — emisores Lyman-α',
		lugar: 'Proyecto con la profesora Lucía Guaita',
		descripcion:
			'Búsqueda de emisores Lyman-α en cubos de datos espectroscópicos con LSDCat y QtClassify: generación de catálogos de detección, exploración de los parámetros del algoritmo y visualización del blob RO-1001. La pregunta de fondo era si existía una relación entre una sobredensidad de emisores y una galaxia submilimétrica en el campo.'
	},

	{
		periodo: 'Ene. — Mar. 2025',
		rol: 'Practicante de Análisis de Datos y Control de Gestión',
		lugar: 'Soclifar / Cofar',
		descripcion:
			'Reportería diaria conectada a BigQuery y Excel, estandarización de la base de datos de ventas y desarrollo de una herramienta propia de proyección con series temporales.'
	},

	{
		periodo: '2018 — 2026',
		rol: 'Ingeniería Física · Lic. en Física Aplicada · Lic. en Astronomía',
		lugar: 'Universidad Andrés Bello',
		descripcion:
			'Tres programas finalizados en la Facultad de Ciencias Exactas, con foco en física computacional, astronomía observacional y análisis de datos.'
	}
];

export type Formacion = {
	titulo: string;
	periodo: string;
	lugar: string;
};

export const formacion: Formacion[] = [
	{
		titulo: 'Introducción a la Ciencia de Datos',
		periodo: 'Sep. 2026',
		lugar: 'Santander Open Academy · contenido de IE University'
	},

	{
		titulo: 'Workshop de CIGALE',
		periodo: '2026',
		lugar: 'Observatorio Cerro Calán, Universidad de Chile'
	}
];