import Image from "next/image";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../ui/dialog";
import { Info } from "lucide-react";

const GlyphConverterInfoModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          <Info className="h-4 w-4" />
          가이드
        </Button>
      </DialogTrigger>
      <DialogContent className="w-4/5">
        <DialogHeader>
          <DialogTitle>이집트 상형문자 가이드</DialogTitle>
          <DialogDescription>
            이 가이드는 Sam House의 상형문자 표를 기준으로 작성되었습니다.
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full h-80">
          <Image src={"/samHouse.png"} alt="상형문자 표" fill className="object-contain" />
        </div>

        <div className="flex flex-col text-sm text-gray-600">
          <p>
            이 가이드는 영문 알파벳과 특수 조합(CH, SH, TH, KH)에 해당하는 이집트 상형문자를
            보여줍니다.
          </p>
          <p>상형문자 변환기에서 이 기호들을 사용하여 이름이나 단어를 변환할 수 있습니다.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GlyphConverterInfoModal;
