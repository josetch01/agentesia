import React, { useState, useEffect, createContext, useContext } from "react";
import "./animations.css";
import logo from "./assets/AGENTESI.png";
import videotestimonio1 from "./assets/testimonios/1.mp4";
import videotestimonio2 from "./assets/testimonios/2.mp4";
import videotestimonio3 from "./assets/testimonios/3.mp4";
// Theme Context
const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);
import {
  Bot,
  BarChart,
  Star,
  CheckCircle,
  Zap,
  Target,
  Users,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Sparkles,
  Verified,
  Brain,
  Cpu,
  Shield,
  Moon,
  Sun,
  User,
  Sparkle,
  Activity
} from "lucide-react";

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [isDark, setIsDark] = useState(true);
  const [typingText, setTypingText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
 
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Typing animation texts
  const typingTexts = [
    "Everything for your business",
    "Request custom feature",
  ];

  // Chart metrics state
  const [chartMetrics, setChartMetrics] = useState({
    revenue: { value: 6, trend: 1 },
    productivity: { value: -4, trend: -1 },
    sales: { value: -2, trend: -1 },
    costs: { value: 3, trend: 1 },
  });

  // Typing animation effect
  useEffect(() => {
    const currentText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && typingText === currentText) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typingText === "") {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
      } else if (isDeleting) {
        // Continue deleting
        setTypingText(currentText.substring(0, typingText.length - 1));
      } else {
        // Continue typing
        setTypingText(currentText.substring(0, typingText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, currentTextIndex, typingTexts]);

  // Chart metrics animation effect - Sequential updates
  useEffect(() => {
    let currentMetricIndex = 0;
    const metrics = ["revenue", "productivity", "sales", "costs"];

    const interval = setInterval(() => {
      const currentMetric = metrics[currentMetricIndex];

      setChartMetrics((prev) => ({
        ...prev,
        [currentMetric]: {
          value: Math.max(-10, Math.min(15, Math.random() * 25 - 10)),
          trend: Math.random() > 0.5 ? 1 : -1,
        },
      }));

      currentMetricIndex = (currentMetricIndex + 1) % metrics.length;
    }, 1500); // Change every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const brands = [
    { name: "TechCorp", logo: "🚀" },
    { name: "InnovateLab", logo: "💡" },
    { name: "DataFlow", logo: "📊" },
    { name: "AINext", logo: "🤖" },
    { name: "CloudSync", logo: "☁️" },
    { name: "SmartSys", logo: "⚡" },
    { name: "TechCorp", logo: "🚀" },
    { name: "InnovateLab", logo: "💡" },
    { name: "DataFlow", logo: "📊" },
    { name: "AINext", logo: "🤖" },
    { name: "CloudSync", logo: "☁️" },
    { name: "SmartSys", logo: "⚡" },
  ];

  const methodology = [
    {
      step: "01",
      title: "Análisis Inicial",
      description:
        "Evaluamos tus necesidades específicas y objetivos de negocio",
      icon: <Target className="w-8 h-8" />,
    },
    {
      step: "02",
      title: "Diseño Personalizado",
      description: "Creamos un agente de IA adaptado a tu industria y procesos",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      step: "03",
      title: "Implementación",
      description: "Integramos la solución de forma segura y eficiente",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      step: "04",
      title: "Optimización",
      description: "Monitoreamos y mejoramos continuamente el rendimiento",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  const videoTestimonials = [
    {
      name: "Camila Segovia",
      role: "Freelancer",
      content:
        "Camila estaba trabajando como freelancer y vio la IA antes de todos",
      videoSrc: videotestimonio1,
      thumbnail:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
      avatar: "👩‍💼",
    },
    {
      name: "Francisco Haces",
      role: "Emprendedor",
      content:
        "Fran pasó de trabajar de coach fitness a ganar 20,000 us por mes en un año",
      videoSrc: videotestimonio2,
      thumbnail:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      avatar: "👨‍💼",
    },
    {
      name: "Carlos Mendoza",
      role: "CEO, TechStart",
      content:
        "Carlos transformó su startup con IA y multiplicó sus ingresos por 5",
      videoSrc: videotestimonio3,
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      avatar: "👨‍🚀",
    },
    {
      name: "Ana Martínez",
      role: "Directora Marketing",
      content:
        "Ana revolucionó su departamento de marketing con automatización IA",
      videoSrc: "/src/assets/video4.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      avatar: "👩‍🚀",
    },
    {
      name: "Roberto Silva",
      role: "Fundador Startup",
      content:
        "Roberto escaló su startup de cero a millones usando agentes de IA",
      videoSrc: "/src/assets/video5.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
      avatar: "👨‍💻",
    },
    {
      name: "Laura García",
      role: "Consultora",
      content: "Laura multiplicó sus ingresos como consultora implementando IA",
      videoSrc: "/src/assets/video6.mp4",
      thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
      avatar: "👩‍💻",
    },
  ];
 
 

 
  // Calculate total pages (responsive: 1 on mobile, 3 on desktop)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [isMobile]);

  // No necesitamos estado para el carrusel infinito ya que será puramente CSS





  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        {/* Logo Section */}
        <div className="pt-20 pb-4">
          <div className="flex flex-col items-center relative">
            <div className="flex items-center justify-center mb-3">
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt="Agentes de IA - Soluciones de Inteligencia Artificial"
                  className="h-16 sm:h-16 md:h-30 lg:h-32 w-auto object-contain transition-all duration-300 hover:scale-105 rounded-lg"
                />
              </div>
            </div>

            {/* Availability Status */}
            <div className="flex flex-col items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-full mb-2">
              <div className="flex  row gap-2 justify-start items-center">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full glow-pulse">
                  {" "}
                </div>
                <span className="text-sm font-normal">
                  Creado por Joyson Llapo
                </span>{" "}
                <Verified className="w-5 h-5 text-blue-500" />
              </div>
             
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-5 pb-8 relative overflow-hidden flex items-center transition-colors duration-300">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
            <div className="flex flex-col items-center text-center  ">
              {/* Content Section */}
              <div
                id="hero-content"
                className={`w-full transition-all duration-1000 ${
                  isVisible["hero-content"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h1
                  className={`text-4xl lg:text-4xl font-bold mb-6 leading-tight text-center w-full transition-colors duration-300 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  La Solución #1 <br/>para Negocios de{" "}
                  <span className="bg-cyan-500 bg-clip-text text-transparent md:inline block">
                    Alto Crecimiento
                  </span>
                </h1>
                <p
                  className={`text-lg mb-8 md:w-[60%] w-full text-center transition-colors duration-300 m-auto ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Usar IA no es suficiente. Los negocios que dominan el
                  crecimiento diseñan agentes que actúan, venden y escalan en
                  tiempo real.
                </p>
              </div>

              {/* Video Section */}
              <div
                id="hero-video"
                className={`w-full max-w-3xl transition-all duration-1000 delay-300 ${
                  isVisible["hero-video"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } ${!isDark ? "floating-animation" : ""}`}
              >
                <div className="relative group">
                  {/* Glow effect behind video */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-3xl transform rotate-1 group-hover:scale-105 transition-transform duration-500"></div>

                  {/* Video container */}
                  <div
                    className={`relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 group-hover:shadow-3xl ${
                      isDark
                        ? "bg-gradient-to-br from-gray-800 to-gray-900 shadow-cyan-500/10"
                        : "bg-gradient-to-br from-white to-gray-50 shadow-blue-500/20"
                    }`}
                  >
                    {/* Modern border effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 p-[2px]">
                      <div
                        className={`w-full h-full rounded-3xl ${
                          isDark ? "bg-gray-800" : "bg-white"
                        }`}
                      ></div>
                    </div>

                    {/* Video iframe */}
                    <div className="relative p-4">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-inner">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/Xh1Jv33RIKw?si=U6Use_KmirCvmfNj&rel=0&modestbranding=1&showinfo=0"
                          title="Agentes de IA - Demo en vivo"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          className="rounded-2xl"
                        ></iframe>
                      </div>

                      {/* Video info overlay */}
                      <div className="absolute top-6 left-6 right-6">
                        <div
                          className={`backdrop-blur-md rounded-xl p-3 transition-colors duration-300 ${
                            isDark
                              ? "bg-black/20 border border-white/10"
                              : "bg-white/20 border border-black/10"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                            <span
                              className={`text-sm font-medium ${
                                isDark ? "text-white" : "text-gray-800"
                              }`}
                            >
                              Agentes de IA en Acción - Demo en Vivo
                            </span>
                            <div className="flex items-center space-x-1 ml-auto">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span
                                className={`text-xs ${
                                  isDark ? "text-gray-300" : "text-gray-600"
                                }`}
                              >
                                HD
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Single Button */}
              <div
                className={`transition-all mt-8 duration-1000 delay-500 ${
                  isVisible["hero-content"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group text-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all duration-300"></div>
                  <span className="relative z-10 tracking-wide">
                    Acepto crecer contigo
                  </span>
                  <ArrowRight className="ml-3 w-6 h-6 relative z-10 transform transition-transform duration-300 " />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 transition-colors duration-300">
          <div className="md:max-w-3xl max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              id="brands"
              className={`text-center mb-12 transition-all duration-1000 ${
                isVisible["brands"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p
                className={`text-2xl font-medium transition-colors duration-300 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Empresas que confían en nosotros
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Fade gradients on sides */}
              <div
                className={`absolute left-0 top-0 w-40 h-full z-10 pointer-events-none ${
                  isDark
                    ? "bg-gradient-to-r from-gray-900 to-transparent"
                    : "bg-gradient-to-r from-white to-transparent"
                }`}
              ></div>
              <div
                className={`absolute right-0 top-0 w-40 h-full z-10 pointer-events-none ${
                  isDark
                    ? "bg-gradient-to-l from-gray-900 to-transparent"
                    : "bg-gradient-to-l from-white to-transparent"
                }`}
              ></div>

              {/* Scrolling brands */}
              <div className="flex  animate-scroll  ">
                {/* First set of brands */}
                {brands.map((brand, index) => (
                  <div
                    key={`first-${brand.name}`}
                    className={`flex-shrink-0 flex items-center justify-center mx-8 transition-all duration-300 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-xl md:text-2xl">{brand.logo}</div>
                      <span className="text-xl md:text-2xl font-medium whitespace-nowrap">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {brands.map((brand, index) => (
                  <div
                    key={`second-${brand.name}`}
                    className={`flex-shrink-0 flex items-center justify-center mx-8 transition-all duration-300 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-xl md:text-2xl">{brand.logo}</div>
                      <span className="text-xl md:text-2xl font-medium whitespace-nowrap">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section
          id="metodologia"
          className="py-12 lg:py-20 transition-colors duration-300"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
  id="methodology-header"
  className={`mb-16 transition-all duration-1000 ${
    isVisible["methodology-header"]
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
    {/* Título a la izquierda */}
    <h2
      className={`text-2xl lg:text-4xl font-bold transition-colors duration-300 ${
        isDark ? "text-white" : "text-gray-900"
      }`}
    >
      Nuestra metodología
    </h2>

    {/* Texto a la derecha */}
    <p
      className={`text-base lg:text-md max-w-sm transition-colors duration-300 ${
        isDark ? "text-gray-400" : "text-gray-600"
      }`}
    >
      De la idea a la automatización <br/> Seguimos un camino claro y comprobado
    </p>
  </div>
</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Step 01 - Evaluate */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible["methodology-header"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`rounded-3xl p-6 lg:p-8   transition-all duration-300  shadow-xl h-auto lg:h-[500px] flex flex-col ${
                    isDark
                      ? "bg-gray-800 border-gray-700  shadow-cyan-500/10"
                      : "bg-gray-50 border-gray-200  shadow-blue-500/20"
                  }`}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[1px] z-10 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-light"></div>
  </div>
                  <div className="mb-6">
                <span
  className="text-sm font-medium py-1 rounded-full bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent"
>
  {"{ Step 01 }"}
</span>
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Evaluate
                  </h3>
                  <p
                    className={`text-lg mb-6 transition-colors duration-300 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Identificamos dónde agreger Agentes de IA que puede aportar mayor valor a tu negocio.
                  </p>

                  {/* Dynamic Metrics Indicators - Two Rows Aligned */}
 <div className="mb-6">
  <div className="flex justify-center flex-wrap gap-4 lg:gap-1">
    {[
      { label: "Ingresos", value: chartMetrics.revenue.value },
      { label: "Productividad", value: chartMetrics.productivity.value },
      { label: "Ventas", value: chartMetrics.sales.value },
      { label: "Costos", value: chartMetrics.costs.value },
    ].map((metric, index) => (
      <div
        key={index}
        className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
          isDark
            ? "bg-gray-700 text-white"
            : "bg-white border border-gray-200 text-gray-800"
        }`}
      >
        <span>{metric.label}</span>

        {/* Línea separadora */}
        <span
          className={`h-4 border-l mx-1 ${
            isDark ? "border-gray-500" : "border-gray-300"
          }`}
        ></span>

        {/* Valor con animación de aparición desde abajo */}
        <span
  key={`${metric.label}-${metric.value}`} // reinicia animación en cada cambio
  className={`font-bold ${
    metric.value >= 0 ? "text-green-500" : "text-red-500"
  } fade-up`}
>
  {metric.value >= 0 ? "+" : ""}
  {Math.round(metric.value)}%
</span>
      </div>
    ))}
  </div>
</div>

    {/* Gráfico de barras */}
    <div className="flex-1 flex items-end justify-between space-x-1">
      {[
        { label: "Ingresos", value: chartMetrics.revenue.value },
        { label: "Productividad", value: chartMetrics.productivity.value },
        { label: "Ventas", value: chartMetrics.sales.value },
        { label: "Costos", value: chartMetrics.costs.value },
      ].map((metric, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div
            className={`w-full  transition-all duration-500 ${
              metric.value >= 0
                ? "bg-gradient-to-t from-green-400 to-green-600"
                : "bg-gradient-to-t from-red-400 to-red-600"
            }`}
            style={{
              height: `${Math.max(20, Math.abs(metric.value) * 4 + 20)}px`,
            }}
          ></div>
          <div className="mt-2 text-center">
            <div
              className={`font-bold text-sm ${
                metric.value >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {metric.value >= 0 ? "+" : ""}
              {Math.round(metric.value)}%
            </div>
            <div
              className={`text-xs ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {metric.label}
            </div>
          </div>
        </div>
      ))}
    </div>
                </div>
              </div>

              {/* Step 02 - Develop */}
              <div
                className={`transition-all duration-1000 delay-200 ${
                  isVisible["methodology-header"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`rounded-3xl p-6 lg:p-8   transition-all duration-300  shadow-xl h-auto lg:h-[500px] flex flex-col ${
                    isDark
                      ? "bg-gray-800 border-gray-700  shadow-cyan-500/10"
                      : "bg-gray-50 border-gray-200  shadow-blue-500/20"
                  }`}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[1px] z-10 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-light"></div>
  </div>
                     <div className="mb-6">
                   <span
  className="text-sm font-medium py-1 rounded-full bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent"
>
  {"{ Step 02 }"}
</span>
                  </div>
                   <h3
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Develop
                  </h3>
                  <p
                    className={`text-lg mb-8 transition-colors duration-300 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Desarrollamos Agentes de IA personalizados que se integran perfectamente en tu flujo de trabajo.
                  </p>

                  {/* Two-Row Carousel and Animated Input */}
                  <div className="flex-1 flex flex-col">
                    {/* Two-Row Horizontal Scrolling Carousel */}
                    <div className="mb-8 overflow-hidden space-y-3 fade-mask">
                      {/* First Row */}
                      <div className="animate-scroll-horizontal flex space-x-3 ">
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border  ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Sparkles className="w-4 h-4 text-white" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Análisis predictivo
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 text-yellow-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Generación de contenido
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-purple-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Email automatización
                            </span>
                          </div>
                        </div>
                        {/* Duplicates for seamless loop */}
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Análisis predictivo
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 text-yellow-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Generación de contenido
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-purple-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Email automatización
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Second Row - Reverse Direction */}
                      <div className="animate-scroll-horizontal-reverse flex space-x-3">
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 text-yellow-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Automatización de flujos
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <BarChart className="w-4 h-4 text-pink-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Modelos de análisis
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                           <Bot className="w-4 h-4 text-green-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Chatbots de IA
                            </span>
                          </div>
                        </div>
                        {/* Duplicates for seamless loop */}
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Automatización de flujos
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <BarChart className="w-4 h-4 text-pink-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Modelos de análisis
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Bot className="w-4 h-4 text-green-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Chatbots de IA
                            </span>
                          </div>
                        </div>
                      </div>
                             {/* tree Row - Reverse Direction */}
                      <div className="animate-scroll-horizontal-tree flex space-x-3">
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-purple-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Automatización de emails
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Activity className="w-4 h-4 text-yellow-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Modelos de análisis de datos
                            </span>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <BarChart className="w-4 h-4 text-pink-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Analisis Predictivo
                            </span>
                          </div>
                        </div>
                        {/* Duplicates for seamless loop */}
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Automatización de flujos
                            </span>
                          </div>
                        </div>
            
                        <div
                          className={`flex-shrink-0 px-4 py-2 rounded-full border ${
                            isDark
                              ? "bg-gray-700 border-gray-600"
                              : "bg-gray-600 border-gray-500"
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                           <Bot className="w-4 h-4 text-green-400" />
                            <span
                              className={`text-xs whitespace-nowrap ${
                                isDark ? "text-gray-300" : "text-gray-200"
                              }`}
                            >
                              Chatbots de IA
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Animated Typing Input Field */}
                    <div className="mt-auto">
                      <div
                        className={`flex items-center space-x-3 p-4 rounded-lg ${
                          isDark ? "bg-gray-700" : "bg-gray-600"
                        }`}
                      >
                        <span
                          className={`text-sm flex-1 ${
                            isDark ? "text-gray-300" : "text-gray-200"
                          }`}
                        >
                          {typingText}
                          <span
                            className={`inline-block w-0.5 h-4 ml-1 animate-pulse ${
                              isDark ? "bg-gray-300" : "bg-gray-200"
                            }`}
                          ></span>
                        </span>
                        <ArrowRight
                          className={`w-5 h-5 ${
                            isDark ? "text-gray-400" : "text-gray-300"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 03 - Growth */}
              <div
                className={`transition-all duration-1000 delay-400 ${
                  isVisible["methodology-header"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className={`rounded-3xl p-6 lg:p-8   transition-all duration-300  shadow-xl h-auto lg:h-[500px] flex flex-col ${
                    isDark
                      ? "bg-gray-800 border-gray-700  shadow-cyan-500/10"
                      : "bg-gray-50 border-gray-200  shadow-blue-500/20"
                  }`}
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[1px] z-10 pointer-events-none">
    <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-light"></div>
  </div>
                     <div className="mb-6">
                   <span
  className="text-sm font-medium py-1 rounded-full bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent"
>
  {"{ Step 03 }"}
</span>
                   </div>
                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Growth
                  </h3>
                  <p
                    className={`text-lg mb-8 transition-colors duration-300 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Escalamos y optimizamos tus Agentes de IA para maximizar el impacto a largo plazo.
                  </p>

                  {/* Vertical Carousel */}
                  <div className="flex-1 relative overflow-hidden">
                    <div className="animate-scroll-vertical space-y-4">
                      {/* Revenue Metric */}
                      <div
                        className={`p-4 rounded-lg border ${
                          isDark
                            ? "bg-gray-700 border-gray-600"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-blue-500 rounded"></div>
                            </div>
                            <span
                              className={`font-medium ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Ingresos
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-green-500 font-bold">
                              23.4%
                            </div>
                            <div
                              className={`text-xs ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              Desde la semana pasada
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sales Metric */}
                      <div
                        className={`p-4 rounded-lg border ${
                          isDark
                            ? "bg-gray-700 border-gray-600"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-green-500 rounded"></div>
                            </div>
                            <span
                              className={`font-medium ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Ventas
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-green-500 font-bold">
                              14.7%
                            </div>
                            <div
                              className={`text-xs ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              Desde la semana pasada
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Productivity Metric */}
                      <div
                        className={`p-4 rounded-lg border ${
                          isDark
                            ? "bg-gray-700 border-gray-600"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-purple-500 rounded"></div>
                            </div>
                            <span
                              className={`font-medium ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Productividad
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-green-500 font-bold">
                              78.3%
                            </div>
                            <div
                              className={`text-xs ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              Desde la semana pasada
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Costs Metric */}
                      <div
                        className={`p-4 rounded-lg border ${
                          isDark
                            ? "bg-gray-700 border-gray-600"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-orange-500 rounded"></div>
                            </div>
                            <span
                              className={`font-medium ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Costos
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-red-500 font-bold">3.3%</div>
                            <div
                              className={`text-xs ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              Reducción semanal
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duplicate for seamless loop */}
                      <div
                        className={`p-4 rounded-lg border ${
                          isDark
                            ? "bg-gray-700 border-gray-600"
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-blue-500 rounded"></div>
                            </div>
                            <span
                              className={`font-medium ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Ingresos
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-green-500 font-bold">
                              23.4%
                            </div>
                            <div
                              className={`text-xs ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              Desde la semana pasada
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Carousel Section */}
        <section
          id="testimonios"
          className={`py-20 transition-colors duration-300 ${
            isDark ? "bg-gray-900" : "bg-gray-50"
          }`}
        >
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div
              id="testimonials-header"
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible["testimonials-header"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2
                className={`text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Lo que dicen nuestros clientes
              </h2>
              <p
                className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Historias reales de personas que transformaron su vida aprendiendo a usar IA en serio.
              </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="relative">
              {/* Fade gradients on sides */}
              <div
                className={`absolute left-0 top-0 w-32 h-full z-20 pointer-events-none ${
                  isDark
                    ? "bg-gradient-to-r from-gray-900 to-transparent"
                    : "bg-gradient-to-r from-gray-50 to-transparent"
                }`}
              ></div>
              <div
                className={`absolute right-0 top-0 w-32 h-full z-20 pointer-events-none ${
                  isDark
                    ? "bg-gradient-to-l from-gray-900 to-transparent"
                    : "bg-gradient-to-l from-gray-50 to-transparent"
                }`}
              ></div>

              {/* Main testimonial display */}
              <div
                id="testimonials-carousel"
                className={`transition-all duration-1000 ${
                  isVisible["testimonials-carousel"]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="relative overflow-hidden">
                  {/* Testimonial Cards Container - Infinite Scroll */}
                  <div className="flex animate-testimonials-scroll gap-8">
                    {/* First set of testimonials */}
                    {videoTestimonials.map((testimonial, index) => (
                      <div
                        key={`first-${index}`}
                        className="w-80 flex-shrink-0"
                      >
                        <div
                          className={`rounded-3xl p-6 transition-all duration-300 ${
                            isDark
                              ? "bg-gray-800 border border-gray-700 shadow-2xl shadow-cyan-500/10"
                              : "bg-white border border-gray-200 shadow-2xl shadow-blue-500/10"
                          }`}
                        >
                          {/* Testimonial Text */}
                          <div className="mb-6">
                            <div className="relative">
                              <div className="absolute -top-2 -left-2 text-4xl text-cyan-400 opacity-30">
                                "
                              </div>
                              <blockquote
                                className={`text-lg leading-relaxed font-medium relative z-10 transition-colors duration-300 ${
                                  isDark ? "text-gray-200" : "text-gray-700"
                                }`}
                              >
                                {testimonial.content}
                              </blockquote>
                            </div>
                          </div>

                          {/* Video */}
                          <div className="mb-6">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                              <video
                                src={testimonial.videoSrc}
                                poster={testimonial.thumbnail}
                                controls
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                preload="metadata"
                              >
                                Tu navegador no soporta el elemento de video.
                              </video>
                            </div>
                          </div>

                          {/* User Info */}
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xl shadow-lg">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h3
                                className={`text-lg font-bold transition-colors duration-300 ${
                                  isDark ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {testimonial.name}
                              </h3>
                              <p
                                className={`text-sm font-medium transition-colors duration-300 ${
                                  isDark ? "text-cyan-400" : "text-blue-600"
                                }`}
                              >
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Duplicate set for seamless infinite loop */}
                    {videoTestimonials.map((testimonial, index) => (
                      <div
                        key={`second-${index}`}
                        className="w-80 flex-shrink-0"
                      >
                        <div
                          className={`rounded-3xl p-6 transition-all duration-300 ${
                            isDark
                              ? "bg-gray-800 border border-gray-700 shadow-2xl shadow-cyan-500/10"
                              : "bg-white border border-gray-200 shadow-2xl shadow-blue-500/10"
                          }`}
                        >
                          {/* Testimonial Text */}
                          <div className="mb-6">
                            <div className="relative">
                              <div className="absolute -top-2 -left-2 text-4xl text-cyan-400 opacity-30">
                                "
                              </div>
                              <blockquote
                                className={`text-lg leading-relaxed font-medium relative z-10 transition-colors duration-300 ${
                                  isDark ? "text-gray-200" : "text-gray-700"
                                }`}
                              >
                                {testimonial.content}
                              </blockquote>
                            </div>
                          </div>

                          {/* Video */}
                          <div className="mb-6">
                            <div className="relative rounded-2xl overflow-hidden shadow-lg">
                              <video
                                src={testimonial.videoSrc}
                                poster={testimonial.thumbnail}
                                controls
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                preload="metadata"
                              >
                                Tu navegador no soporta el elemento de video.
                              </video>
                            </div>
                          </div>

                          {/* User Info */}
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-xl shadow-lg">
                              {testimonial.avatar}
                            </div>
                            <div>
                              <h3
                                className={`text-lg font-bold transition-colors duration-300 ${
                                  isDark ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {testimonial.name}
                              </h3>
                              <p
                                className={`text-sm font-medium transition-colors duration-300 ${
                                  isDark ? "text-cyan-400" : "text-blue-600"
                                }`}
                              >
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-cyan-900 transition-colors duration-300  relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div
              id="final-cta"
              className="transition-all duration-1000 opacity-100 translate-y-0"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                ¿Qué estás esperando?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                El momento es ahora. Súmate con nosotros y descubre la libertad
                dee crear, escalar y liderar con IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Acepto crecer contigo</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer
          className={`py-16 transition-colors duration-300 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300 ${
                isDark ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <p
                className={`text-sm transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                © 2025 All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <p
                  className={`text-sm transition-colors duration-300 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Agentes de IA por Joyson Llapo con ❤️
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
