"use client";

import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

interface IntallButtonProps {
  onOpenChange: (open: boolean) => void;
}

const InstallButton = ({ onOpenChange }: IntallButtonProps) => {
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // 앱이 이미 설치되었는지 확인
    const isAppInstalled = window.matchMedia("(display-mode: standalone)").matches;

    if (!isAppInstalled) {
      setShowInstallBanner(true);
    }
  }, []);

  return (
    <>
      {showInstallBanner && (
        <Button
          className="fixed bottom-20 right-4 rounded-full shadow-lg bg-gold-primary"
          size="icon"
          onClick={() => onOpenChange(true)}
        >
          <Download className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default InstallButton;
