import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import AmbientBackground from '@/components/AmbientBackground';
import CustomCursor from '@/components/CustomCursor';
import PageTransition from '@/components/PageTransition';
import IntroAnimation from '@/components/IntroAnimation';
import { toTitleCase } from "@/app/lib/titleCase";


function transformText(node: any): any {
  if (typeof node === "string") {
    return toTitleCase(node);
  }

  if (Array.isArray(node)) {
    return node.map(transformText);
  }

  if (node?.props?.children) {
    return {
      ...node,
      props: {
        ...node.props,
        children: transformText(node.props.children),
      },
    };
  }

  return node;
}
export const metadata: Metadata = {
  title: 'Brunst Studios | The Brunstverse Of Creativity',
  description: 'A Luxury Creative Agency For Authors, Brands, Athletes, And Interiors.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=PT+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent/20">
        <IntroAnimation />
        <CustomCursor />
        <AmbientBackground />
        
        <PageTransition>
          <Navbar />
          <main className="relative min-h-screen">
  {transformText(children)}
</main>
        </PageTransition>
        <div className="fixed bottom-0 left-0 h-1 bg-accent/30 z-[60] transition-all duration-300" id="scroll-progress" />
      </body>
    </html>
  );
}
