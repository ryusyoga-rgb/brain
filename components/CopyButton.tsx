﻿"use client";

import { useState } from "react";

interface CopyButtonProps {
  value: string;
  label?: string;
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  return (
    <button className="copy-button" onClick={handleCopy} type="button">
      {copied ? "✓ Copied" : label ?? "Copy"}
    </button>
  );
}
