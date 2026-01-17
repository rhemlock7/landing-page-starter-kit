import { Button } from "../ui/button";

interface CTASectionProps {
  primaryLabel: string;
  secondaryLabel: string;
  subtitle?: string;
  primaryVariant?: "default" | "outline";
  secondaryVariant?: "default" | "outline";
  buttonClassName?: string;
  className?: string;
}

export default function CTASection({
  primaryLabel,
  secondaryLabel,
  subtitle,
  primaryVariant = "default",
  secondaryVariant = "outline",
  buttonClassName = "min-w-52",
  className = "",
}: CTASectionProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button
          variant={primaryVariant}
          size="lg"
          className={`${buttonClassName} tracking-widest`}
        >
          {primaryLabel}
        </Button>
        <Button
          variant={secondaryVariant}
          size="lg"
          className={`${buttonClassName} tracking-widest`}
        >
          {secondaryLabel}
        </Button>
      </div>
      {subtitle && (
        <p className="text-muted-foreground/60 text-xs tracking-widest uppercase mt-8">
          {subtitle}
        </p>
      )}
    </div>
  );
}
