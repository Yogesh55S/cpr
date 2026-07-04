interface MapEmbedProps {
  src: string;
  title: string;
}

export default function MapEmbed({ src, title }: MapEmbedProps) {
  return (
    <div className="relative rounded-card overflow-hidden bg-cream aspect-video">
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
