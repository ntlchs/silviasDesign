import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: `Silvia's Design`,
    description: "Suas sobrancelhas lindas como você",
    site: "https://silviasdesign.netlify.app",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>pt-br</language>`,
  });
