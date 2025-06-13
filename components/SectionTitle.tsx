const SectionTitle = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => (
  <div className={`mb-12 text-center ${className}`}>
    <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);
export default SectionTitle;
