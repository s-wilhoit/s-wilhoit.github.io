
import React from 'react';
import { useTypeform, TypeformConfig } from '@/lib/typeform';
import { Button } from '@/components/ui/button';

interface TypeformButtonProps {
  config: TypeformConfig;
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export default function TypeformButton({ 
  config, 
  children, 
  variant = 'default', 
  size = 'default',
  className 
}: TypeformButtonProps) {
  const { showPopup } = useTypeform();

  const handleClick = () => {
    showPopup(config);
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
