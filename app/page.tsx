import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Clock, Heart, Shield, Stethoscope, Search, Syringe, MapPin } from "lucide-react"
import Image from "next/image"


export default function VeterinarianWebsite() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">The Pet Office</h1>
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
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text">
            Paixão em cuidar dos animais
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Na The Pet Office, nós trabalhamos com muita compreensão acerca do tratamento do seu pet, com muito carinho e muito amor. A saúde e a felicidade dele é a nossa maior prioridade!
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

          <div className="grid md:grid-cols-2 lg:grid-cols.3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Search className="h-12 w-12 text-blue-600 mb-4"/>
                  <CardTitle>Consulta com Neurologista</CardTitle>
                  <CardDescription>
                    Atendemos como especialista Neurológico para cuidar ainda mais do seu bichinho.
                    </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Stethoscope className="h-12 w-12 text-blue-600 mb-4"/>
                  <CardTitle>Avaliação</CardTitle>
                  <CardDescription>
                    Avaliamos o bem estar do seu pet através de checkups para prevenir doenças e manter a saúde.
                    </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Syringe className="h-12 w-12 text-blue-600 mb-4"/>
                  <CardTitle>Vacinação</CardTitle>
                  <CardDescription>
                    Fazemos todas as vacinas necessárias para prevenir doenças.
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
          </div>
        </div>
      </section>

    {/* About Section */}
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Conheça a Dr. Vivian Garcia Chagas</h3>
            <p className="text-muted-foreground mb-6">
              Com mais de 7 anos de experiência como médica veterinária, Dr. Vivian é dedicada a prover a mais alta qualidade de cuidados para seu amados Pets. Ela é graduada pela Unisa e atualmente é especialista Neurológica com foco em cirurgias de coluna.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Unisa - Universidade de Santo Amaro - Graduação em Veterinária</Badge>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">7+ anos de experiência</Badge>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Especlista Neurológica</Badge>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 text-center">
            <Image 
              src="/1.PNG"
              alt="Dr. Vivian Chagas"
              width={192}
              height={192}
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" 
            />
            <h4 className="text-xl font-sembold mb-2">Dr. Vivian Chagas, Neuro</h4>
            <p className="text-muted-foreground">Neuroveterinária e Proprietária da The Pet Office</p>
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
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-blue-600"/>
            <span className="font-semibold">The Pet Office</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
          © 2025 The Pet Office. Todos os direitos reservados.
          <br />
          Veterinária licenciada pelo CRMV-SP
          </p>
        </div>
      </div>
    </footer>

    </div>
  )
}