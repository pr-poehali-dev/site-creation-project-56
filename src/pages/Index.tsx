import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const portfolioImages = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/projects/bbe1afd7-5769-4c6d-83ae-a0c0e0b23dd0/files/0b76621d-22f7-40c6-98ad-cc100c3a7dd6.jpg',
    title: 'Горный пейзаж',
    category: 'Природа'
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/projects/bbe1afd7-5769-4c6d-83ae-a0c0e0b23dd0/files/f28f0d12-5b56-4b86-bf05-ccd0b2baa4ce.jpg',
    title: 'Городская архитектура',
    category: 'Архитектура'
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/projects/bbe1afd7-5769-4c6d-83ae-a0c0e0b23dd0/files/12f62618-0189-468a-9fdc-ee7572245def.jpg',
    title: 'Детали природы',
    category: 'Макро'
  },
  {
    id: 4,
    url: 'https://cdn.poehali.dev/projects/bbe1afd7-5769-4c6d-83ae-a0c0e0b23dd0/files/0b76621d-22f7-40c6-98ad-cc100c3a7dd6.jpg',
    title: 'Минимализм',
    category: 'Природа'
  },
  {
    id: 5,
    url: 'https://cdn.poehali.dev/projects/bbe1afd7-5769-4c6d-83ae-a0c0e0b23dd0/files/f28f0d12-5b56-4b86-bf05-ccd0b2baa4ce.jpg',
    title: 'Геометрия',
    category: 'Архитектура'
  },
  {
    id: 6,
    url: 'https://cdn.poehali.dev/projects/bbe1afd7-5769-4c6d-83ae-a0c0e0b23dd0/files/12f62618-0189-468a-9fdc-ee7572245def.jpg',
    title: 'Текстуры',
    category: 'Макро'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Портфолио</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'about', label: 'Обо мне' },
                { id: 'contact', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-black ${
                    activeSection === item.id ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-fade-in-up">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Захватывая<br />моменты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mb-12">
              Профессиональная фотография, где каждый кадр рассказывает свою историю
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-8"
              onClick={() => scrollToSection('portfolio')}
            >
              Смотреть работы
            </Button>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in">Портфолио</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <Card 
                    className="group cursor-pointer overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end p-6">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="font-semibold">{image.title}</p>
                          <p className="text-sm text-gray-200">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Я — профессиональный фотограф с более чем 10-летним опытом работы. 
                Моя специализация — создание минималистичных, но эмоционально насыщенных снимков.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Работаю с архитектурой, природой и макросъёмкой. Каждый проект для меня — 
                это возможность рассказать уникальную историю через призму объектива.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-up">
              <img 
                src="https://cdn.poehali.dev/projects/bbe1afd7-5769-4c6d-83ae-a0c0e0b23dd0/files/0b76621d-22f7-40c6-98ad-cc100c3a7dd6.jpg"
                alt="О фотографе"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-black text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Свяжитесь со мной</h2>
          <p className="text-gray-400 mb-12 animate-fade-in">
            Готов обсудить ваш проект и воплотить ваши идеи в жизнь
          </p>
          <form className="space-y-6 animate-fade-in-up">
            <div>
              <Input 
                placeholder="Ваше имя" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white"
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Расскажите о вашем проекте" 
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white resize-none"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-white text-black hover:bg-gray-100 rounded-full"
            >
              Отправить сообщение
            </Button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 bg-black text-white border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2024 Портфолио фотографа. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
