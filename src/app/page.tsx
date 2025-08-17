import Image from "next/image";
import { PropsWithChildren } from "react";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      <main
        id="main-content"
        className='flex flex-col items-center justify-center min-h-screen w-[800px] max-w-full mx-auto'
        role="main"
      >
        <div className='flex items-center'>
          <div className='flex-grow max-w-4xl mx-auto'>
            <header className='mb-8'>
              <h1 className='text-5xl font-bold text-gray-900 mb-4' tabIndex={0}>
                Seinen Cooperativa
              </h1>

              <p className='text-lg text-gray-600' role="doc-subtitle">
                Espacio para el desarollo
              </p>
            </header>
          </div>

          <span className='w-[100px] flex-shrink'></span>

          <aside className='flex-grow flex justify-center items-center' role="complementary" aria-label="Imagen representativa">
            <div className='relative'>
              <div className='fade-circle landing-image'>
                <Image
                  src="torre_de_babel.jpg"
                  alt="Torre de Babel - Representando la diversidad y colaboración en el desarrollo de software"
                  width={1200}
                  height={1200}
                  className='rounded-lg shadow-lg'
                  priority
                  tabIndex={0}
                />
              </div>
              <figcaption className='sr-only'>
                Torre de Babel simbolizando la colaboración y diversidad en el desarrollo de software
              </figcaption>
            </div>
          </aside>
        </div>

        <Section>
          <Paragraph>
            <strong>Seinen Cooperativa</strong> nace de la voluntad de proveer un espacio de fomento para el desarrollo de actividades que transformen esta realidad nuestra de forma positiva.
          </Paragraph>

          <Paragraph>
            En tiempos donde lo digital nos atraviesa de forma estructural,

            Seinen busca reconfigurarse constantemente como aquel lugar donde acudimos por herramientas para
            entender, generar ideas y alcanzar soluciones.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>
            Aristas
          </Subtitle>

          <Subtitle depth={2}>
            Ingenieria
          </Subtitle>

          <Paragraph>
            Diseño, construcción y mantenimiento de sistemas de información, aplicaciones, procesos y plataformas.
          </Paragraph>

          <Subtitle depth={2}>
            Comunicacional
          </Subtitle>

          <Paragraph>
            Estrategia comunicacional y copywriting como prácticas que no solo transmiten datos, sino que construyen sentido.
          </Paragraph>

          <Subtitle depth={2}>
            Artistica
          </Subtitle>

          <Paragraph>
            Como fuerza productiva que da movimiento, color y acento.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>
            Capital Humano
          </Subtitle>
        </Section>

        <footer className='text-sm text-gray-500' role="contentinfo">
          <p>&copy; 2025 Seinen Cooperativa. Todos los derechos reservados.</p>
        </footer>
      </main>
    </>
  );
}

const Section: React.FC<PropsWithChildren> = props => (
  <section className='mt-20 text-lg text-gray-600 w-full'>
    {props.children}
  </section>
)

const Paragraph: React.FC<PropsWithChildren> = props => (
  <p className='text-xl text-gray-600'>
    {props.children}
  </p>
)

interface SubtitleProps extends PropsWithChildren {
  depth?: number
}

const Subtitle: React.FC<SubtitleProps> = props => {
  const depth = props.depth || 1

  if (![1, 2].includes(depth)) {
    throw new Error('Depth must be 1 or 2')
  }

  return (
    <h2
      className={
        classNames(
          'font-bold text-gray-900',
          depth === 1 && 'mt-8 text-5xl mb-4',
          depth === 2 && 'mt-4 text-2xl mb-2',
        )
      }
      tabIndex={0}
    >
      {props.children}
    </h2>
  )
}