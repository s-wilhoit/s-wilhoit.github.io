
// Typeform widget utility functions
export interface TypeformConfig {
  formId: string;
  width?: number;
  height?: number;
  buttonColor?: string;
  buttonText?: string;
  position?: 'left' | 'right';
}

export function showTypeformSidetab(config: TypeformConfig): void {
  // Check if script already exists
  if (document.getElementById('typeform-embed-script')) {
    return;
  }

  // Create script element
  const script = document.createElement('script');
  script.id = 'typeform-embed-script';
  script.src = 'https://embed.typeform.com/next/embed.js';
  
  // Create div element for sidetab
  const div = document.createElement('div');
  div.setAttribute('id', 'typeform-sidetab');
  div.setAttribute('data-tf-sidetab', config.formId);
  div.setAttribute('data-tf-width', (config.width || 320).toString());
  div.setAttribute('data-tf-height', (config.height || 400).toString());
  div.setAttribute('data-tf-button-color', config.buttonColor || '#002F7A');
  div.setAttribute('data-tf-button-text', config.buttonText || 'Feedback');
  div.setAttribute('data-tf-button-side', config.position || 'right');
  div.setAttribute('style', 'all:unset;');

  // Append div to script
  script.appendChild(div);
  
  // Add script to head
  document.getElementsByTagName('head')[0].appendChild(script);
}

export function hideTypeformSidetab(): void {
  const existingScript = document.getElementById('typeform-embed-script');
  if (existingScript) {
    existingScript.remove();
  }
}

export function showTypeformPopup(config: TypeformConfig): void {
  // Create popup div
  const div = document.createElement('div');
  div.setAttribute('data-tf-popup', config.formId);
  div.setAttribute('data-tf-opacity', '100');
  div.setAttribute('data-tf-size', '100');
  div.setAttribute('data-tf-iframe-props', 'title=Typeform');
  div.setAttribute('data-tf-transitive-search-params', 'true');
  div.setAttribute('data-tf-medium', 'snippet');
  
  document.body.appendChild(div);
  
  // Load script if not already loaded
  if (!document.getElementById('typeform-popup-script')) {
    const script = document.createElement('script');
    script.id = 'typeform-popup-script';
    script.src = 'https://embed.typeform.com/next/embed.js';
    document.head.appendChild(script);
  }
}

// Custom hook for React components
export function useTypeform() {
  const showSidetab = (config: TypeformConfig) => {
    showTypeformSidetab(config);
  };

  const hideSidetab = () => {
    hideTypeformSidetab();
  };

  const showPopup = (config: TypeformConfig) => {
    showTypeformPopup(config);
  };

  return {
    showSidetab,
    hideSidetab,
    showPopup
  };
}
