type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionTitle({ eyebrow, title, description, align = 'left' }: SectionTitleProps) {
  return (
    <div className={`mb-11 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      <p className={`section-description ${align === 'center' ? 'mx-auto' : ''}`}>{description}</p>
    </div>
  );
}
