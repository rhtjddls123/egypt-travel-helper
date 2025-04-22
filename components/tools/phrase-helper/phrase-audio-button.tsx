"use client";

import { Button } from "@/components/ui/button";
import { VolumeIcon } from "lucide-react";

interface PhraseAudioButtonProps {
  text: string;
}

const PhraseAudioButton = ({ text }: PhraseAudioButtonProps) => {
  const handleClick = async () => {
    const res = await fetch(`/api/tts?text=${encodeURIComponent(text)}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    const audio = new Audio(url);
    audio.play();
  };

  return (
    <Button
      onClick={handleClick}
      className="cursor-pointer flex justify-center items-center"
      variant="ghost"
      size="icon"
      title="발음 듣기"
    >
      <VolumeIcon />
    </Button>
  );
};

export default PhraseAudioButton;
