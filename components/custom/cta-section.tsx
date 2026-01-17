import Link from "next/link";
import { Button } from "../ui/button";

interface LinkProps {
  label: string,
  url: string,
  targetBlank?: boolean,
}
interface CTASectionProps {
  primary: LinkProps;
  secondary: LinkProps;
  subtitle?: string;
  primaryVariant?: "default" | "outline";
  secondaryVariant?: "default" | "outline";
  buttonClassName?: string;
  className?: string;
}

export default function CTASection({
  primary,
  secondary,
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
          asChild
        >
          <Link
            href={primary.url}
            target={primary.targetBlank ? "_blank" : undefined}
            rel={primary.targetBlank ? "noopener noreferrer" : undefined}
          >
            {primary.label}
          </Link>
        </Button>
        <Button
          variant={secondaryVariant}
          size="lg"
          className={`${buttonClassName} tracking-widest`}
          asChild
        >
          <Link
            href={secondary.url}
            target={secondary.targetBlank ? "_blank" : undefined}
            rel={secondary.targetBlank ? "noopener noreferrer" : undefined}
          >
            {secondary.label}
          </Link>
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
