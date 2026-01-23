import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Header from '@/components/blocks/header/Header'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Mesmerize | Premium Floral & Gifting',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-serif text-brand-green mb-4">404</h1>
      <p className="text-xl text-brand-green/60 mb-8 font-light italic">
        The flowers you're looking for aren't in bloom here.
      </p>
      <a 
        href="/" 
        className="text-[10px] tracking-widest uppercase font-bold border border-primary/20 bg-brand-green text-brand-beige px-8 py-4 hover:bg-secondary transition-all"
      >
        Return to Storefront
      </a>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="mesmerize">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
