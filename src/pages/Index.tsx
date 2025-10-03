import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const products = [
    {
      id: 1,
      title: 'Ремесленный хлеб',
      description: 'Хлеб на закваске с хрустящей корочкой',
      image: '/img/093ef125-6a5e-4794-b0e6-a1a683bac16c.jpg',
      price: '250₽'
    },
    {
      id: 2,
      title: 'Французские круассаны',
      description: 'Воздушные слоёные круассаны со сливочным маслом',
      image: '/img/5e9c7af7-0826-436a-b80c-169ba861f29f.jpg',
      price: '180₽'
    },
    {
      id: 3,
      title: 'Ржаной хлеб',
      description: 'Традиционный ржаной хлеб на закваске',
      image: '/img/093ef125-6a5e-4794-b0e6-a1a683bac16c.jpg',
      price: '220₽'
    }
  ];

  const recipes = [
    {
      id: 1,
      title: 'Домашний белый хлеб',
      time: '3 часа',
      difficulty: 'Средний',
      image: '/img/fab75216-933a-476d-9c08-95f10a405edd.jpg',
      ingredients: ['500г муки', '300мл воды', '10г соли', '7г дрожжей', '20г сахара'],
      steps: [
        'Смешайте муку, соль и сахар в большой миске',
        'Растворите дрожжи в тёплой воде',
        'Замесите тесто и оставьте на 1.5 часа',
        'Сформируйте буханку и выпекайте при 200°C 30-35 минут'
      ]
    },
    {
      id: 2,
      title: 'Круассаны',
      time: '5 часов',
      difficulty: 'Сложный',
      image: '/img/5e9c7af7-0826-436a-b80c-169ba861f29f.jpg',
      ingredients: ['500г муки', '250г сливочного масла', '250мл молока', '50г сахара', '10г дрожжей', '10г соли'],
      steps: [
        'Замесите тесто и охладите 30 минут',
        'Раскатайте тесто и выложите масло',
        'Сделайте 3 одинарных сложения с охлаждением',
        'Нарежьте треугольники и сверните',
        'Выпекайте при 190°C 15-20 минут'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wheat" size={32} className="text-primary" />
            <h1 className="text-2xl font-display font-bold text-foreground">ВАЛЧЕКА КЛЕКУПРОДИА</h1>
          </div>
          <div className="flex gap-4">
            <Button
              variant={activeSection === 'products' ? 'default' : 'outline'}
              onClick={() => setActiveSection('products')}
              className="rounded-full"
            >
              Продукция
            </Button>
            <Button
              variant={activeSection === 'recipes' ? 'default' : 'outline'}
              onClick={() => setActiveSection('recipes')}
              className="rounded-full"
            >
              Рецепты
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'hero' && (
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 opacity-60"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="flex justify-center gap-6 mb-8">
                <Icon name="Wheat" size={48} className="text-primary animate-scale-in" />
                <Icon name="Croissant" size={48} className="text-primary animate-scale-in" style={{ animationDelay: '0.1s' }} />
                <Icon name="ChefHat" size={48} className="text-primary animate-scale-in" style={{ animationDelay: '0.2s' }} />
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Свежая выпечка<br />каждый день
              </h2>
              <p className="text-xl text-muted-foreground mb-8 font-body">
                Традиционные рецепты, натуральные ингредиенты и любовь к ремеслу
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setActiveSection('products')}
                  className="rounded-full text-lg px-8 shadow-lg hover:shadow-xl transition-all"
                >
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Наша продукция
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setActiveSection('recipes')}
                  className="rounded-full text-lg px-8 border-2 hover:bg-secondary"
                >
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Рецепты
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'products' && (
        <section className="py-16 px-4 animate-fade-in">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-foreground mb-4">Наша продукция</h2>
              <p className="text-lg text-muted-foreground font-body">Свежая выпечка из печи каждое утро</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in border-2">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">{product.title}</CardTitle>
                    <CardDescription className="font-body text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <span className="text-2xl font-display font-bold text-primary">{product.price}</span>
                    <Button className="rounded-full">
                      <Icon name="ShoppingCart" size={18} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'recipes' && (
        <section className="py-16 px-4 animate-fade-in">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-foreground mb-4">Наши рецепты</h2>
              <p className="text-lg text-muted-foreground font-body">Проверенные рецепты от наших пекарей</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {recipes.map((recipe) => (
                <Card key={recipe.id} className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300 animate-scale-in">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-display text-2xl">{recipe.title}</CardTitle>
                    <div className="flex gap-4 text-sm text-muted-foreground font-body">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{recipe.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="ChefHat" size={16} />
                        <span>{recipe.difficulty}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-display font-semibold mb-2 flex items-center gap-2">
                        <Icon name="List" size={18} className="text-primary" />
                        Ингредиенты:
                      </h4>
                      <ul className="space-y-1 font-body text-sm">
                        {recipe.ingredients.map((ingredient, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold mb-2 flex items-center gap-2">
                        <Icon name="BookOpen" size={18} className="text-primary" />
                        Приготовление:
                      </h4>
                      <ol className="space-y-2 font-body text-sm">
                        {recipe.steps.map((step, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                              {idx + 1}
                            </span>
                            <span className="pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-secondary/30 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <Icon name="Wheat" size={24} className="text-primary" />
            <Icon name="Croissant" size={24} className="text-primary" />
            <Icon name="ChefHat" size={24} className="text-primary" />
          </div>
          <p className="text-muted-foreground font-body">© 2024 Валчека Клекупродиа. Выпечка с любовью</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
