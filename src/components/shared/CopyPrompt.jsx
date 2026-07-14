'use client';

import { useState } from 'react';
import { Button } from '@heroui/react';
import { Copy, Check } from 'lucide-react';

const CopyPromptButton = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 200);
  };

  return (
    <Button
      color={copied ? 'success' : 'primary'}
      variant="flat"
      className='border'
      startContent={copied ? <Check size={18} /> : <Copy size={18} />}
      onPress={handleCopy}
    >
      {copied ? 'Copied!' : 'Copy Prompt'}
    </Button>
  );
};

export default CopyPromptButton;