import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Heart, Shield, Stethoscope, Search, Syringe, MapPin, Scissors } from "lucide-react"
import Image from "next/image"


export default function VeterinarianWebsite() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 lg:z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
          <Image 
                src="/logo-vet.png"
                alt="logo"
                width={100}
                height={100}
                className="w-18 h-18 rounded-full object-cover" 
              />
            <span className="font-typewriter text-2xl font-bold">the Pet Office</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/5511985473316" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="hidden md:flex">
                <Phone className="h-4 w-4 mr-2" />
                (11) 98547-3316
              </Button>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Cuidando dos bichinhos desde 2020
          </Badge>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
            Paixão em cuidar dos animais
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Na the Pet Office, oferecemos atendimento veterinário domiciliar especializado em clínica médica e neurologia de pequenos animais, com foco em conforto, segurança e individualização do cuidado. Realizamos consultas clínicas, avaliações neurológicas, aplicações de vacinas, medicações, coleta de exames laboratoriais e procedimentos simples diretamente na sua casa — ideal para pets com dificuldade de locomoção, quadros crônicos ou que simplesmente ficam mais tranquilos no ambiente familiar. Nosso compromisso é oferecer um cuidado completo, ético e com acolhimento, com foco em diagnóstico preciso e bem-estar animal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/5511985473316" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-5 w-5 mr-2"/>
                Agende sua consulta
              </Button>
            </a>
            <a href="tel:+5511985473316">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Emergências
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">
            Nossos Serviços
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos alguns serviços para manter a saúde e a felicidade do seu animalzinho em dia!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Search className="h-12 w-12 text-orange-600 mb-4"/>
                  <CardTitle>Consulta com Neurologista</CardTitle>
                  <CardDescription>
                  Atendimento especializado em Neurologia Veterinária para cães e gatos. Avaliamos alterações neurológicas como convulsões, alterações de marcha, tremores, mudanças comportamentais e muito mais — com cuidado, empatia e atenção individualizada.
                    </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Stethoscope className="h-12 w-12 text-green-600 mb-4"/>
                  <CardTitle>Avaliação</CardTitle>
                  <CardDescription>
                  Realizamos avaliações clínicas completas para monitorar a saúde do seu pet. Nossos checkups ajudam a detectar doenças precocemente e garantir mais qualidade de vida ao seu companheiro.
                    </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Syringe className="h-12 w-12 text-purple-600 mb-4"/>
                  <CardTitle>Vacinação</CardTitle>
                  <CardDescription>
                  Aplicamos todas as vacinas essenciais e orientamos sobre o calendário vacinal ideal para o seu pet, garantindo proteção contra doenças graves e contagiosas.
                    </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-600 mb-4"/>
                  <CardTitle>Emergências</CardTitle>
                  <CardDescription>
                    Estamos disponíveis nos horários para situações críticas e emergências.
                    </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Scissors className="h-12 w-12 text-pink-600 mb-4"/>
                  <CardTitle>Medicação e Tratamentos</CardTitle>
                  <CardDescription>
                  Administração segura e cuidadosa de medicamentos injetáveis ou via oral, com orientação personalizada para cada caso.
                    </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-12 w-12 text-red-600 mb-4"/>
                  <CardTitle>Coleta de Exames</CardTitle>
                  <CardDescription>
                    Coletamos exames laboratoriais (sangue, urina, fezes, entre outros) diretamente no conforto da sua casa, com todo cuidado necessário para garantir diagnósticos precisos.
                    </CardDescription>
                </CardHeader>
              </Card>
          </div>
        </div>
      </section>

    {/* About Section */}
    <section className="py-20 px-4 bg-muted/50">
      <div className="mx-auto max-w-4xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 gap-8 items-center">
          <div className="">
            <h3 className="text-3xl font-bold mb-6">Conheça a Dr. Vivian Chagas</h3>
            <p className="text-muted-foreground mb-6">
            Sou médica veterinária formada pela Universidade de Santo Amaro (UNISA) em 2019, com duas pós-graduações: Clínica Médica e Cirúrgica de Pequenos Animais - UNISA e Neurologia e Neurocirurgia de Pequenos Animais - Faculdade Qualittas. Atuo com dedicação na área de clínica médica, neurologia, intensivismo e suporte ao diagnóstico, com experiência em UTI, internação semi-intensiva, manejo de pacientes neurológicos, politratados e crônicos. Acredito em uma medicina veterinária acessível, respeitosa e cuidadosa com os tutores e seus animais — levando estrutura, conhecimento e empatia até a porta da sua casa.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Graduação em Veterinária</Badge>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Pós em Clínica Médica e Cirúrgica de Pequenos Animais</Badge>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Pós em Neurologia e Neurocirurgia de Pequenos Animais</Badge>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 lg:p-23 text-center" >
            <Image 
              src="/1.PNG"
              alt="Dr. Vivian Chagas"
              width={192}
              height={192}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" 
            />
            <h4 className="text-xl font-semibold mb-2">Dr. Vivian Chagas, Neuro</h4>
            <p className="text-muted-foreground">Neuroveterinária e Proprietária da the Pet Office</p>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Section*/}
    <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Agende sua consulta!</h3>
            <p className="text-muted-foreground">Estamos aqui para ajudar na saúde e felicidade dos seus bichinhos!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Informações de contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600"/>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-muted-foreground">(11) 98547-3316</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground">
                      São Paulo
                      <br />
                      Estamos atendendo apenas na região da cidade de São Paulo
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold">Horários</p>
                    <p className="text-muted-foreground">
                      Seg-Sex: 9:00 - 18:00
                      <br />
                      Sab: 9:00 - 16:00
                      <br />
                      Dom: Apenas emergências
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Agende sua consulta</CardTitle>
                <CardDescription>Pronto para dar o tratamento que seu pet merece? Fale conosco hoje mesmo!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-rows-2 gap-5 space-y-4">
                  <a href="tel:+5511985473316">
                    <Button className="w-full" size="lg">
                      <Phone className="h-5 w-5 mr-2"/>
                      Ligue agora: (11) 98547-3316
                    </Button>
                  </a>

                  <a href="https://wa.me/5511985473316" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full" size="lg">
                      Agendar consulta online
                    </Button>
                  </a>
                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      Para emergências, ligue imediatamente no{" "}
                      <span className="font-semibold text-red-600">(11) 98547-3316</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="border-t py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-0">
            <Image 
                src="/logo-vet.png"
                alt="logo"
                width={100}
                height={100}
                className="w-15 h-15 rounded-full object-cover" 
              />
            <span className="font-typewriter text-lg font-bold">the Pet Office</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
          © 2025 the Pet Office. Todos os direitos reservados.
          <br />
          Veterinária licenciada pelo CRMV-SP
          </p>
        </div>
      </div>
    </footer>

    </div>
  )
}