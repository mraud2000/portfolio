import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
      meta: [
        { charSet: "utf-8" },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          name: "google-site-verification",
          content: "T2KbKWC79yU-LX356c_iUY6hpucYdWb9a9goeyhg5bs",
        },

        // Titre principal
        {
          title: "Audry Munezero | Portfolio Développeur Full Stack",
        },

        // Description SEO
        {
          name: "description",
          content:
            "Portfolio officiel de Audry Munezero, développeur Full Stack et Software Engineer. Découvrez ses projets, compétences et expériences.",
        },

        // Mots-clés pour Google
        {
          name: "keywords",
          content:
            "Audry, Munezero, Audry Munezero, portfolio Audry, portfolio Munezero, CV Audry, CV Munezero, développeur full stack, software engineer",
        },

        {
          name: "author",
          content: "Audry Munezero",
        },

        {
          name: "robots",
          content: "index, follow",
        },

        // Open Graph
        {
          property: "og:title",
          content: "Audry Munezero | Portfolio Développeur Full Stack",
        },

        {
          property: "og:description",
          content:
            "Portfolio premium d'Audry Munezero, développeur Full Stack.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:url",
          content: "https://cv.muneaudry.workers.dev",
        },

        // Twitter/X
        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content: "Audry Munezero | Portfolio",
        },

        {
          name: "twitter:description",
          content:
            "Portfolio officiel d'Audry Munezero, développeur Full Stack.",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },

        {
          rel: "canonical",
          href: "https://portfolio.muneaudry.workers.dev/",
        },
      ],
    }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
