import Icon from "@/components/Icon";

export default function Visual({
  icon,
  label,
  className = "",
}: {
  icon: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest flex items-center justify-center ${className}`}
    >
      <div className="absolute -right-8 -top-8 w-40 h-40 bg-primary-container/25 rounded-full blur-3xl" />
      <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-primary-container/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:24px_24px]" />
      <Icon
        name={icon}
        strokeWidth={1.5}
        className="relative z-10 text-primary-container/80 w-12 h-12 md:w-16 md:h-16"
      />
    </div>
  );
}
