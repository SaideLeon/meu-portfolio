import React, { useState } from 'react';
import banner from '../assets/banner.svg';
import imagemJpg from '../assets/imagem.jpg';
import {Github, Mail, Phone, User, Code, BookOpen, Briefcase, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('sobre');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const sections = {
    sobre: 'Sobre',
    experiencia: 'Experiência',
    habilidades: 'Habilidades',
    educacao: 'Educação',
    projetos: 'Projetos'
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400">
      {/* Banner Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6">
              <img
                src={imagemJpg}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white mx-auto shadow-xl"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">Saíde Omar</h1>
            <p className="text-xl text-white mb-6">Desenvolvedor Full-Stack</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:saideomarsaid@gmail.com" className="flex items-center gap-2 text-white hover:text-cyan-200">
                <Mail size={20} />
                <span>saideomarsaid@gmail.com</span>
              </a>
              <a href="tel:863304793" className="flex items-center gap-2 text-white hover:text-cyan-200">
                <Phone size={20} />
                <span>863304793</span>
              </a>
              <a
                href="https://github.com/SaideLeon" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-white hover:text-cyan-200"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Mobile Menu Button */}
        <div className="md:hidden mb-6">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} mb-8`}>
          <div className="md:relative fixed inset-0 z-40 md:z-auto">
            <div className="md:relative fixed inset-0 bg-purple-900/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
              <ul className="flex md:flex-row flex-col items-center justify-center h-full gap-4">
                {Object.entries(sections).map(([key, value]) => (
                  <li key={key} className="w-full md:w-auto px-4">
                    <button
                      onClick={() => handleSectionClick(key)}
                      className={`w-full px-4 py-2 rounded-lg transition-all ${
                        activeSection === key
                          ? 'bg-white text-purple-600 shadow-lg'
                          : 'text-white hover:bg-white/20'
                      }`}
                    >
                      {value}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Rest of the content remains the same */}
        {/* Main Content */}
        <main className="backdrop-blur-sm bg-white/10 rounded-xl p-6 text-white shadow-xl">
          {/* ... (rest of the sections remain unchanged) ... */}
          {activeSection === 'sobre' && (
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Perfil Profissional</h2>
              </div>
              <p className="leading-relaxed">
                Profissional com sólida experiência em desenvolvimento de soluções tecnológicas, 
                com foco em front-end, back-end e integração de inteligência artificial. 
                Possuo forte capacidade para gerenciar negócios, desenvolver plataformas 
                interativas e implementar soluções orientadas ao usuário.
              </p>
            </section>
          )}

          {activeSection === 'habilidades' && (
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Habilidades Técnicas</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold mb-3">Frontend</h3>
                  <ul className="space-y-2">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML5 / CSS3</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold mb-3">Backend</h3>
                  <ul className="space-y-2">
                    <li>Django</li>
                    <li>Python</li>
                    <li>NodeJS</li>
                  </ul>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold mb-3">Ferramentas</h3>
                  <ul className="space-y-2">
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>VSCode</li>
                    <li>Npm</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'experiencia' && (
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Experiência Profissional</h2>
              </div>
              <div className="space-y-8">
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Desenvolvedor Full-Stack</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Desenvolvimento de aplicações front-end usando React, Tailwind CSS e JavaScript</li>
                    <li>Implementação de back-end com Django e Python</li>
                    <li>Integração de APIs REST para manipulação e fornecimento de dados</li>
                    <li>Integração de soluções de IA nos sistemas de comunicação empresarial</li>
                  </ul>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">Gerente de Negócios e Vendas</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Gerenciamento de estratégias de vendas e relacionamento com clientes</li>
                    <li>Desenvolvimento de processos de automação para otimização das operações</li>
                    <li>Criação de plataformas digitais personalizadas</li>
                  </ul>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'educacao' && (
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Formação Acadêmica</h2>
              </div>
              <div className="space-y-6">
                                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold">Curso de Programação</h3>
                  <p>Danki Code</p>
                  <p className="text-sm">Período: 2022 - 2024</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold">12ª Classe</h3>
                  <p>Escola Secundária Geral de Quelimane</p>
                  <p className="text-sm">2022</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold">10ª Classe</h3>
                  <p>Escola Secundária Geral de Quelimane</p>
                  <p className="text-sm">2020</p>
                </div>
                <div className="backdrop-blur-sm bg-white/5 p-4 rounded-lg">
                  <h3 className="font-bold">7ª Classe</h3>
                  <p>Escola Primária Completa de Milato 2º</p>
                  <p className="text-sm">2016</p>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'projetos' && (
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Projetos</h2>
              </div>
              <div className="backdrop-blur-sm bg-white/5 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 w-full">Plataforma de Comunicação Empresarial Automatizada</h3>
                <p className="mb-4">
                  Plataforma interativa desenvolvida com React e NodeJS para integração 
                  de Inteligência Artificial em WhatsApp para atendimento ao cliente automatizado, permitindo comunicação empresarial eficiente com o cliente.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">NodeJS</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">REST APIs</span>
                </div>
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={20} />
            <span>Português (Nativo) | Inglês (Básico)</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;