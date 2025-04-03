import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "이집트 여행 도우미",
    short_name: "이집트 도우미",
    description: "이집트 여행을 위한 다양한 도구를 제공하는 앱",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f0e3",
    theme_color: "#d4af37",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

