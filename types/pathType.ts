import { PATH } from "@/constants/path";

export type PathType = (typeof PATH)[keyof typeof PATH];
