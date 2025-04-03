"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Download, MoreHorizontal, Plus, Share } from "lucide-react";

interface InstallPromptProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function InstallPrompt({ open, onOpenChange }: InstallPromptProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // PWA가 이미 설치된 경우 감지
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
    // PWA 설치 프롬프트 감지
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("🟢 beforeinstallprompt 이벤트 발생!");
      // 기본 브라우저 프롬프트 방지
      e.preventDefault();
      // 이벤트 저장
      setDeferredPrompt(e);
    };

    // iOS 기기 감지
    const detectIOS = () => {
      const ua = navigator.userAgent;
      return (
        /iPad|iPhone|iPod/.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
      );
    };

    setIsIOS(detectIOS());

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");
    if (!hasVisited) {
      onOpenChange(true); // 처음 방문이면 자동으로 Sheet 열기
      localStorage.setItem("visited", "true"); // 방문 기록 저장
    }
  }, [onOpenChange]);

  // 설치 버튼 클릭 시 PWA 설치
  const handleInstallClick = () => {
    if (deferredPrompt) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (deferredPrompt as any).prompt();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (deferredPrompt as any).userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted PWA install");
        }
        setDeferredPrompt(null);
        onOpenChange(false);
      });
    }
  };

  // PWA가 이미 설치된 경우 버튼 숨김
  if (isStandalone) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="rounded-t-xl">
        <SheetHeader className="text-left">
          <SheetTitle className="text-xl">이집트 여행 도우미 앱 설치</SheetTitle>
          <SheetDescription>홈 화면에 추가하여 더 빠르게 접근하세요</SheetDescription>
        </SheetHeader>

        <div className="px-4 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-xl bg-[#d4af37] flex items-center justify-center">
              <Download className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="font-medium">이집트 여행 도우미</h3>
              <p className="text-sm text-gray-500">오프라인에서도 사용 가능한 앱</p>
            </div>
          </div>

          {isIOS ? (
            <div className="space-y-4">
              <h3 className="font-medium">iOS 기기에 설치하기</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-medium">
                    1
                  </div>
                  <p>
                    Safari 브라우저의 <Share className="inline h-4 w-4" /> 공유 버튼을 탭하세요
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-medium">
                    2
                  </div>
                  <p>
                    아래로 스크롤하여 <Plus className="inline h-4 w-4" />{" "}
                    <strong>홈 화면에 추가</strong>를 탭하세요
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-medium">
                    3
                  </div>
                  <p>
                    오른쪽 상단의 <strong>추가</strong>를 탭하세요
                  </p>
                </li>
              </ol>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-medium">Android 기기에 설치하기</h3>
              {!deferredPrompt && (
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-medium">
                      1
                    </div>
                    <p>
                      Chrome 브라우저의 <MoreHorizontal className="inline h-4 w-4" /> 메뉴를
                      탭하세요
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-sm font-medium">
                      2
                    </div>
                    <p>
                      <strong>앱 설치</strong> 또는 <strong>홈 화면에 추가</strong>를 탭하세요
                    </p>
                  </li>
                </ol>
              )}
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">앱 설치 시 장점</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                  <svg className="h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span>오프라인에서도 기본 기능 사용 가능</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                  <svg className="h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span>홈 화면에서 빠르게 접근</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-green-100 p-1 mt-0.5">
                  <svg className="h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                </div>
                <span>네이티브 앱과 유사한 사용자 경험</span>
              </li>
            </ul>
          </div>
        </div>

        <SheetFooter className="flex-row gap-2 sm:space-x-0">
          <Button variant="outline" className="flex-1" onClick={() => onOpenChange(false)}>
            나중에
          </Button>
          {!isIOS && deferredPrompt && (
            <Button className="flex-1" onClick={handleInstallClick}>
              <Download className="mr-2 h-4 w-4" />앱 설치하기
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
