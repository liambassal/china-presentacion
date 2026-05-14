"use client";

import ScrollySection from "@/components/ScrollySection";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const sections = [
    {
      title: "1. Evolución Económica: La Fábrica del Mundo",
      points: [
        "Transformación del modelo: Transición histórica de manufactura de bajo coste a superpotencia tecnológica.",
        "Cambio de paradigma productivo: Inversión masiva estatal y privada en investigación y desarrollo (I+D).",
        "La innovación tecnológica no es solo negocio, sino el pilar central para el crecimiento y la supervivencia nacional a largo plazo."
      ],
      image: "/images/img_sec_1.png"
    },
    {
      title: "2. Guerra de Chips y el Cuello de Botella (Hardware)",
      points: [
        "Dependencia crítica: Los semiconductores son el motor del desarrollo de la IA moderna.",
        "El bloqueo estadounidense: Prohibición estratégica de exportar chips avanzados de IA hacia China.",
        "El rol de los gigantes globales: La dependencia tecnológica de empresas como TSMC (Taiwán) y ASML (Países Bajos).",
        "El cuello de botella: Dificultad china actual para manufacturar chips de última generación (por debajo de los 7nm) de forma masiva."
      ],
      image: "/images/img_sec_2.png"
    },
    {
      title: "3. Contexto Social: La Cultura Digital en China",
      points: [
        "Una sociedad hiperconectada: Más de 1.400 millones de ciudadanos interactuando constantemente en el entorno digital.",
        "El ecosistema de las 'Super-Apps': Plataformas como WeChat y Alipay centralizan finanzas, transporte, comunicación y vida social.",
        "Diferente noción de la privacidad: Una tolerancia distinta a la recolección de datos masiva frente a los estándares de Occidente.",
        "La 'Data Advantage': Este océano de datos sociales es el combustible inigualable para entrenar algoritmos de IA predictivos."
      ],
      image: "/images/img_sec_3.png"
    },
    {
      title: "4. Soberanía Tecnológica: La Meta hacia 2030",
      points: [
        "El plan maestro 'Made in China 2025' y los Planes Quinquenales estructuran la ambición de liderazgo tecnológico mundial.",
        "La gran meta: Lograr al menos un 80% de autosuficiencia en tecnologías críticas y componentes para finales de la década.",
        "Respuesta al bloqueo: Inyecciones de capital masivas a gigantes nacionales como Huawei y la fundición estatal SMIC.",
        "Desarrollo de ecosistemas propios de código abierto y hardware especializado para romper la dependencia occidental."
      ],
      image: "/images/img_sec_4.png"
    },
    {
      title: "5. Entender la China Actual",
      points: [
        "Fusión Estado-Empresa: Los gigantes tecnológicos chinos no operan en un vacío; sus objetivos deben alinearse con el desarrollo nacional.",
        "Prioridad a la estabilidad: El modelo confuciano y del Partido valora la cohesión y la estabilidad colectiva sobre la libertad individual irrestricta.",
        "La IA no es neutra ni libre: Su desarrollo y aplicación están estrictamente condicionados por la CAC (Administración del Ciberespacio).",
        "Obligación legal: Todos los algoritmos y modelos fundacionales deben promover los 'Valores Centrales Socialistas'."
      ],
      image: "/images/img_sec_5.png"
    },
    {
      title: "6. Preguntas Tabú (KIMI Censurada)",
      points: [
        "Experimentación práctica: Pruebas realizadas interrogando a KIMI, una de las IA chinas más populares.",
        "Interrogatorio sobre eventos históricos sensibles: Consultas directas sobre la Plaza de Tiananmén (1989) y el Gran Salto Adelante.",
        "Respuesta de la plataforma: Negativa rotunda del modelo a generar respuestas o cortes abruptos en el texto.",
        "Activación del 'Kill Switch': Evidencia de los mecanismos de desconexión automatizados cuando el usuario roza temáticas subversivas."
      ],
      image: "/images/img_sec_6.png"
    },
    {
      title: "7. QWEN3 en Local (Sin Restricciones ni Censura de Red)",
      points: [
        "Experimentación técnica: Ejecución del poderoso modelo Qwen3 en un entorno informático local, esquivando los filtros de internet chinos.",
        "El debate: Confrontación directa con la IA sobre las cifras reales y responsabilidades de las tragedias históricas de China.",
        "Las mentiras de la IA: El modelo minimiza los hechos sistemáticamente (ej. afirmando que en Tiananmén hubo 'celebraciones festivas').",
        "Conclusión alarmante: Aunque no hay censura de red externa, el modelo está profundamente sesgado y alterado desde sus propios pesos internos de entrenamiento."
      ],
      image: "/images/img_sec_7.jpg"
    },
    {
      title: "8. Conclusiones: Entrenamiento y Censura en IA",
      points: [
        "1. Filtrado de la Base de Datos: Antes del entrenamiento, el internet chino hiper-censurado sirve como fuente principal, purgando la 'verdad' subversiva desde la raíz.",
        "2. Alineamiento Forzoso (RLHF): Uso intenso del aprendizaje por refuerzo para penalizar severamente al modelo si se desvía de la narrativa oficial del Estado.",
        "3. Filtros de Salida en Tiempo Real: Capas de seguridad adicionales que bloquean y cortan la generación de texto en vivo si el contexto matemático de la respuesta infringe la ley."
      ],
      image: "/images/img_sec_8.png"
    },
    {
      title: "9. El Estado de Vigilancia",
      points: [
        "Despliegue masivo: La mayor red de videovigilancia de la historia humana, con cientos de millones de cámaras conectadas (proyectos Skynet y Sharp Eyes).",
        "Biometría en tiempo real: Algoritmos de reconocimiento facial y análisis de la marcha (forma de caminar) para rastrear ciudadanos sin detenerlos.",
        "Fusión de datos y Policía Predictiva: Cruce de la vigilancia física con el comportamiento digital (pagos, viajes, chats) para predecir 'anomalías'.",
        "El Sistema de Crédito Social: La herramienta definitiva que asigna puntuaciones ciudadanas, generando listas negras y una total autocensura preventiva."
      ],
      image: "/images/img_sec_9.png"
    },
    {
      title: "10. Repercusiones y Problemas de la Vigilancia",
      points: [
        "Falsos positivos a escala masiva: Un sistema con un 99% de precisión en una población de 1.400 millones de personas implica 14 millones de posibles errores.",
        "Castigos a inocentes: Personas sin antecedentes sufren bloqueos automatizados (imposibilidad de viajar o trabajar) por errores algorítmicos, a menudo sin posibilidad de apelar a un humano.",
        "Impacto psicológico: La sensación de estar constantemente monitoreado genera una cultura del miedo y una severa autocensura en la vida diaria.",
        "Uso asimétrico y discriminatorio: Despliegue desproporcionado de esta tecnología sobre minorías étnicas y disidentes políticos para mantener un control social asfixiante."
      ],
      image: "/images/img_sec_10.jpg"
    },
    {
      title: "11. Aspectos Positivos y Eficiencia Urbana",
      points: [
        "Reducción drástica del crimen urbano: Las tasas de robos, asaltos y crímenes violentos se han desplomado; las calles son extremadamente seguras a cualquier hora.",
        "Optimización de 'Ciudades Inteligentes': Sistemas como el 'City Brain' de Hangzhou gestionan el tráfico en tiempo real, reduciendo atascos y optimizando rutas de ambulancias.",
        "Comodidad y agilidad ciudadana: Uso de pagos faciales y abordaje de trenes sin billete físico, agilizando enormemente el día a día.",
        "Prevención de fraudes: Mejora en la trazabilidad de productos, reducción drástica de la corrupción de bajo nivel y modernización del ecosistema judicial."
      ],
      image: "/images/img_sec_11.png"
    }
  ];

  // Variantes para los hijos (los elementos que aparecen poco a poco)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="w-full flex flex-col items-center overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/Video Project.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FBFBF2] tracking-tight leading-tight max-w-5xl"
        >
          El Desarrollo de la <br /> <span className="text-[#8F250C]">IA en China</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl"
        >
          Economía, Tecnología, y Estado de Vigilancia
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 animate-bounce flex flex-col items-center"
        >
          <span className="text-sm tracking-widest text-gray-400 mb-2 uppercase">Descubrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="w-full">
        {sections.map((section, idx) => {
          const isDark = idx % 2 !== 0;
          return (
          <ScrollySection key={idx} index={idx} isDark={isDark}>
            {/* Componente izquierdo (Texto) */}
            <div className="flex-1 space-y-8 flex flex-col justify-center">
              
              <motion.h2 variants={itemVariants} className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-1000 ${isDark ? "text-[#FBFBF2]" : "text-[#100007]"}`}>
                {section.title}
              </motion.h2>
              
              <ul className="space-y-6 mt-8">
                {section.points.map((point, pIdx) => (
                  <motion.li key={pIdx} variants={itemVariants} className={`flex items-start text-lg md:text-xl leading-relaxed transition-colors duration-1000 ${isDark ? "text-gray-300" : "text-[#717568]"}`}>
                    <span className={`mr-4 font-bold mt-1 transition-colors duration-1000 ${isDark ? "text-[#D9381E]" : "text-[#8F250C]"}`}>—</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Componente derecho (Imagen) */}
            <motion.div variants={itemVariants} className="flex-1 w-full min-h-[400px] flex items-center justify-center relative mt-12 md:mt-0">
              {section.image ? (
                <div className="relative w-full h-[500px] lg:h-[600px] rounded-sm overflow-hidden group shadow-2xl">
                  <Image 
                    src={section.image} 
                    alt={section.title} 
                    fill 
                    className="object-contain transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className={`w-full h-[400px] border-2 border-dashed flex items-center justify-center bg-transparent rounded-sm p-8 text-center transition-colors duration-500 hover:bg-[#100007]/5 ${isDark ? "border-[#FBFBF2]/40 text-[#FBFBF2]" : "border-[#717568]/40 text-[#717568]"}`}>
                  <p className="tracking-widest uppercase text-sm font-semibold">
                    [ ESPACIO PARA IMAGEN ]
                  </p>
                </div>
              )}
            </motion.div>
          </ScrollySection>
        );
        })}
      </div>
      
    </main>
  );
}
