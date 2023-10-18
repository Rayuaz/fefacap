import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
    integrations: [
        storyblok({
            accessToken: env.STORYBLOK_TOKEN,
            components: {
                before_after_image: "storyblok/BeforeAfterImage",
                before_after_section: "storyblok/BeforeAfterSection",
                callout: "storyblok/Callout",
                feature: "storyblok/Feature",
                features_block: "storyblok/FeaturesBlock",
                footer: "storyblok/Footer",
                hero: "storyblok/Hero",
                image_section: "storyblok/ImageSection",
                menu_item: "storyblok/MenuItem",
                navbar: "storyblok/Navbar",
                page: "storyblok/Page",
                social_media: "storyblok/SocialMedia",
                two_column_text: "storyblok/TwoColumnText",
            },
            apiOptions: {
                region: "us",
            },
        }),
    ],
    vite: {
        resolve: {
            alias: {
                "@/": `${path.resolve(__dirname, "src")}/`,
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/styles/variables.scss";`,
                },
            },
        },
    },
});
