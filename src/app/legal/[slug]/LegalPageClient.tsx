"use client";

interface Props {
  title: string;
  content: string;
}

export default function LegalPageClient({ title, content }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy min-h-[25vh] flex items-center justify-center pt-[60px] lg:pt-[70px]">
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div
            className="prose max-w-none prose-headings:font-display prose-headings:text-navy prose-h2:text-2xl prose-h3:text-xl prose-p:text-charcoal prose-li:text-charcoal prose-a:text-gold"
            dangerouslySetInnerHTML={{
              __html: content
                .replace(/## (.*)/g, '<h2>$1</h2>')
                .replace(/### (.*)/g, '<h3>$1</h3>')
                .replace(/- (.*)/g, '<li>$1</li>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^/, '<p>')
                .replace(/$/, '</p>'),
            }}
          />
        </div>
      </section>
    </>
  );
}
