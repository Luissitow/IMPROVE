import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/landing/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IMPROVE — Personalización Automotriz Premium en Toluca" },
      {
        name: "description",
        content:
          "Estudio premium en Toluca especializado en full wrap, PPF, detailing y recubrimiento cerámico. Protección y personalización para vehículos.",
      },
      { property: "og:title", content: "IMPROVE — Personalización Automotriz Premium" },
      {
        property: "og:description",
        content:
          "Full wrap, PPF, cerámico y detailing para vehículos. Toluca, Estado de México.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
