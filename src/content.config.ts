// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Define your collection(s)
//const docs = defineCollection({ loader: glob({ pattern: "**/*.md", base: "./src/pages/markdown" }) });
//const docs = defineCollection({ loader: glob({ pattern: "transcriptions/*.html", base: "./src/pages/" }) });
const docs = defineCollection({ 
    loader: file("./src/pages/transcriptions/transcriptions.json")
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { docs };