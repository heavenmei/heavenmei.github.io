'use client';

import { useState } from 'react';

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <button disabled={isCopied} onClick={copy} className="px-1 py-0 text-sm">
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
};
