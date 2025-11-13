import React, { useState, useEffect } from 'react';
import { Heart, Shield, Lock, Zap, Users, CheckCircle, ChevronRight, Github, Twitter, ExternalLink, Menu, X } from 'lucide-react';

export default function DonationsLandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const cardBgClass = darkMode ? 'bg-gray-800' : 'bg-white';
  const sectionBgAltClass = darkMode ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">DonaTrazable</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problema" className={`${textSecondaryClass} hover:${textClass} transition`}>Problema</a>
              <a href="#solucion" className={`${textSecondaryClass} hover:${textClass} transition`}>Solución</a>
              <a href="#como-funciona" className={`${textSecondaryClass} hover:${textClass} transition`}>Cómo funciona</a>
              <a href="#tecnologia" className={`${textSecondaryClass} hover:${textClass} transition`}>Tecnología</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-700 transition"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition">
                Ver Demo
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              <a href="#problema" className="block py-2">Problema</a>
              <a href="#solucion" className="block py-2">Solución</a>
              <a href="#como-funciona" className="block py-2">Cómo funciona</a>
              <a href="#tecnologia" className="block py-2">Tecnología</a>
              <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full font-semibold">
                Ver Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-400">Construido sobre StarkNet</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Donaciones <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">trazables</span>, transparentes y seguras
            </h1>
            
            <p className={`text-xl md:text-2xl ${textSecondaryClass} mb-10 leading-relaxed`}>
              Una dApp en StarkNet que garantiza que cada donativo se use correctamente, protegiendo la privacidad de los beneficiarios
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition flex items-center justify-center space-x-2">
                <span>Ver Demo</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className={`${cardBgClass} px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                Cómo funciona
              </button>
            </div>

            <div className="mt-16 relative">
              <div className={`${cardBgClass} rounded-2xl p-8 shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="flex items-center justify-center space-x-8 text-center flex-wrap gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold">100%</div>
                      <div className={`text-sm ${textSecondaryClass}`}>Trazable</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold">0</div>
                      <div className={`text-sm ${textSecondaryClass}`}>Fraudes</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold">Total</div>
                      <div className={`text-sm ${textSecondaryClass}`}>Privacidad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section id="problema" className={`py-20 px-4 ${sectionBgAltClass}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                La confianza en los donativos <span className="text-red-400">se ha perdido</span>
              </h2>
              <p className={`text-lg ${textSecondaryClass} mb-6 leading-relaxed`}>
                En México, muchas personas desconfían de las campañas de donación por la falta de transparencia y el mal uso de los fondos en emergencias como huracanes, sismos e incendios.
              </p>
              <div className={`${cardBgClass} border-l-4 border-red-400 p-6 rounded-r-lg`}>
                <p className="text-xl font-semibold italic">
                  "Las donaciones llegan, pero la confianza falta."
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-400 text-xl">✗</span>
                  </div>
                  <div>
                    <p className={textSecondaryClass}>Fondos desviados o mal utilizados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-400 text-xl">✗</span>
                  </div>
                  <div>
                    <p className={textSecondaryClass}>Falta de transparencia en el uso de recursos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-red-400 text-xl">✗</span>
                  </div>
                  <div>
                    <p className={textSecondaryClass}>Imposibilidad de verificar el impacto real</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className={`${cardBgClass} rounded-2xl p-8 shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <span className="font-medium">Donativo registrado</span>
                    <span className="text-red-400">❓</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-px h-12 bg-gradient-to-b from-red-500/50 to-transparent"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <span className="font-medium">¿A dónde fue?</span>
                    <span className="text-red-400">❓</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-px h-12 bg-gradient-to-b from-red-500/50 to-transparent"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                    <span className="font-medium">¿Quién lo recibió?</span>
                    <span className="text-red-400">❓</span>
                  </div>
                  <div className="text-center mt-6 text-red-400 font-semibold">
                    Sin trazabilidad = Sin confianza
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solución Section */}
      <section id="solucion" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Una dApp que <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">devuelve la confianza</span>
            </h2>
            <p className={`text-xl ${textSecondaryClass} max-w-3xl mx-auto`}>
              Nuestra aplicación descentralizada sobre StarkNet permite donaciones verificables, privadas y trazables. Cada peso donado se registra en la blockchain, solo puede usarse por beneficiarios aprobados, y es auditable por cualquiera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Transparencia Total",
                description: "Cada transacción queda registrada on-chain y puede ser auditada por cualquiera",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Uso Controlado",
                description: "Los fondos solo se usan en productos esenciales autorizados",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Privacidad",
                description: "Beneficiarios anónimos gracias a la tecnología ZK-STARKs",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Costos Bajos",
                description: "Ideal para microdonaciones gracias a StarkNet Layer 2",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, idx) => (
              <div key={idx} className={`${cardBgClass} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 duration-300`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className={textSecondaryClass}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona Section */}
      <section id="como-funciona" className={`py-20 px-4 ${sectionBgAltClass}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flujo de <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">donaciones trazables</span>
            </h2>
            <p className={`text-xl ${textSecondaryClass} max-w-3xl mx-auto`}>
              La transparencia se logra combinando contratos inteligentes y pruebas de conocimiento cero (ZK-STARKs)
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {[
                {
                  step: "1",
                  title: "Donante",
                  description: "Conecta wallet y dona USDC/ETH a la campaña elegida",
                  icon: "💝"
                },
                {
                  step: "2",
                  title: "ONG",
                  description: "Valida beneficiarios y genera prueba ZK-STARK de elegibilidad",
                  icon: "🏛️"
                },
                {
                  step: "3",
                  title: "Smart Contract",
                  description: "Verifica la prueba y emite VoucherNFT programable",
                  icon: "📜"
                },
                {
                  step: "4",
                  title: "Beneficiario",
                  description: "Usa el voucher en comercios aliados para productos esenciales",
                  icon: "👤"
                },
                {
                  step: "5",
                  title: "Comercio",
                  description: "Canjea el voucher y recibe el pago on-chain verificado",
                  icon: "🏪"
                }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`${cardBgClass} rounded-2xl p-6 shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition duration-300`}>
                    <div className="text-4xl mb-4 text-center">{step.icon}</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">{step.title}</h3>
                    <p className={`text-sm ${textSecondaryClass} text-center`}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tecnología Section */}
      <section id="tecnologia" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tecnología que <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">garantiza confianza</span>
            </h2>
            <p className={`text-xl ${textSecondaryClass}`}>
              Construido sobre StarkNet, la Layer 2 más avanzada de Ethereum
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "StarkNet",
                description: "Escalabilidad y bajos costos gracias a su arquitectura ZK-Rollup de última generación",
                features: ["Transacciones instantáneas", "Costos mínimos", "Seguridad de Ethereum"]
              },
              {
                title: "ZK-STARKs",
                description: "Permiten verificar la elegibilidad sin revelar datos sensibles de los beneficiarios",
                features: ["Privacidad total", "Verificación matemática", "Sin configuración confiable"]
              },
              {
                title: "Smart Contracts (Cairo)",
                description: "Controlan automáticamente los fondos, vouchers y restricciones de uso",
                features: ["Código auditable", "Ejecución automática", "Sin intermediarios"]
              },
              {
                title: "VoucherNFTs",
                description: "Tokens programables y trazables diseñados específicamente para ayuda humanitaria",
                features: ["No transferibles", "Uso limitado", "Totalmente trazables"]
              }
            ].map((tech, idx) => (
              <div key={idx} className={`${cardBgClass} rounded-2xl p-8 shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-2xl transition`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{tech.title}</h3>
                </div>
                <p className={`${textSecondaryClass} mb-6`}>{tech.description}</p>
                <div className="space-y-2">
                  {tech.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`${cardBgClass} rounded-2xl p-8 shadow-2xl text-center border ${darkMode ? 'border-purple-500/20' : 'border-purple-200'} bg-gradient-to-br ${darkMode ? 'from-purple-900/20 to-blue-900/20' : 'from-purple-50 to-blue-50'}`}>
            <p className="text-2xl font-bold mb-2">
              "Cada transacción es verificable, privada y auditable"
            </p>
            <p className={textSecondaryClass}>La combinación perfecta de transparencia y privacidad</p>
          </div>
        </div>
      </section>

      {/* Impacto Section */}
      <section className={`py-20 px-4 ${sectionBgAltClass}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Impacto</span> social y beneficios reales
            </h2>
            <p className={`text-xl ${textSecondaryClass} max-w-3xl mx-auto`}>
              Esta dApp redefine cómo se confía en las donaciones en México, garantizando transparencia y respeto a la privacidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { number: "+500", label: "Donantes activos", color: "purple" },
              { number: "0", label: "Casos de fraude", color: "green" },
              { number: "100%", label: "Trazabilidad", color: "blue" },
              { number: "$50K", label: "Donados en total", color: "pink" }
            ].map((stat, idx) => (
              <div key={idx} className={`${cardBgClass} rounded-2xl p-8 shadow-xl text-center border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition`}>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                <div className={textSecondaryClass}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🤝",
                title: "Recupera la confianza",
                description: "Restaura la fe en la ayuda humanitaria mediante transparencia verificable"
              },
              {
                icon: "🛡️",
                title: "Evita el desvío de fondos",
                description: "Los contratos inteligentes garantizan el uso correcto de cada donativo"
              },
              {
                icon: "🔒",
                title: "Protege la identidad",
                description: "ZK-STARKs mantienen anónimos a los beneficiarios mientras se verifica su elegibilidad"
              },
              {
                icon: "🌍",
                title: "Microdonaciones globales",
                description: "Facilita contribuciones desde cualquier parte del mundo con costos mínimos"
              }
            ].map((benefit, idx) => (
              <div key={idx} className={`${cardBgClass} rounded-2xl p-6 shadow-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-2xl transition`}>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className={textSecondaryClass}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Creado por <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">The Semicolon Killers</span>
          </h2>
          <p className={`text-xl ${textSecondaryClass} max-w-3xl mx-auto mb-12`}>
            Equipo multidisciplinario de desarrolladores y diseñadores apasionados por la transparencia, la innovación y la tecnología blockchain
          </p>

          <div className={`${cardBgClass} rounded-2xl p-12 shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} max-w-4xl mx-auto`}>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {[1, 2, 3, 4].map((member) => (
                <div key={member} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">
                    {member}
                  </div>
                  <div className="font-semibold">Miembro {member}</div>
                  <div className={`text-sm ${textSecondaryClass}`}>Rol</div>
                </div>
              ))}
            </div>
            <p className="text-xl font-semibold italic">
              "Construyendo confianza, una transacción a la vez."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={`py-20 px-4 ${sectionBgAltClass}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para revolucionar las donaciones?
          </h2>
          <p className={`text-xl ${textSecondaryClass} mb-10`}>
            Únete al futuro de la transparencia en ayuda humanitaria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition flex items-center justify-center space-x-2">
              <span>Probar Demo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className={`${cardBgClass} px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition border ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-center space-x-2`}>
              <span>Conoce StarkNet</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-950' : 'bg-gray-900'} text-white py-16 px-4 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"></div>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-2xl">DonaTrazable</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transformando la ayuda humanitaria a través de blockchain. Transparencia, privacidad y confianza en cada donativo.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://starknet.io" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Documentación</a></li>
                <li><a href="#" className="hover:text-white transition">Whitepaper</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Comunidad</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Discord</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 The Semicolon Killers. Todos los derechos reservados.
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Construido con</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-gray-400 text-sm">sobre</span>
                <span className="font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">StarkNet</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}