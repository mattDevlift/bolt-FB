import React from 'react';
import { Button } from '@components/ui/Button/Button';

interface SideBySideProps {
  title: string;
  accentText?: string;
  description?: string;
  paragraph?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  hideButton: boolean;
  subtitle?: string;
}

export const SideBySide: React.FC<SideBySideProps> = ({
  title,
  accentText,
  description,
  paragraph,
  buttonText,
  onButtonClick,
  imageSrc,
  imageAlt,
  hideButton,
  subtitle,
}) => {
  // Split the title and accentText into words
  const [firstWord, secondWord] = title.split(' ');
  const [accentFirstWord, accentSecondWord] = accentText?.split(' ') || [];

  // Split paragraph into three sections if it exists
  const paragraphs = paragraph?.split('\n\n').filter(Boolean) || [];

  return (
    <section className="max-w-[1440px] mx-auto px-12 py-24">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Content Side */}
        <div className="flex-1">
          {subtitle && (
            <h3 className="text-[20px] font-semibold uppercase mb-2 text-left text-primary">
              {subtitle}
            </h3>
          )}
          <h2 className="text-h2 mb-6">
            <span className="text-secondary">{firstWord}</span>{' '}
            <span className="text-primary">{secondWord}</span>
            <br />
            {accentText && (
              <>
                <span className="text-secondary">{accentFirstWord}</span>{' '}
                <span className="text-primary">{accentSecondWord}</span>
              </>
            )}
          </h2>
          {description && (
            <p className="text-base text-text-secondary mb-4 max-w-xl">
              {description}
            </p>
          )}
          {!hideButton && buttonText && (
            <Button 
              variant="secondary" 
              size="large"
              className="px-8 bg-secondary text-primary hover:bg-secondary/90"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>

        {/* Right Side - Either Image or Paragraphs */}
        <div className="flex-1">
          {imageSrc ? (
            <div className="relative aspect-[4/3] w-full">
              <img 
                src={imageSrc}
                alt={imageAlt || ''}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ) : paragraph ? (
            <div className="space-y-6">
              {paragraphs.map((p, index) => (
                <p key={index} className="text-base text-text-secondary">
                  {p.trim()}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};