import { cpSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const standalone = join(root, ".next", "standalone");

const copies = [
  { src: join(root, "public"), dest: join(standalone, "public") },
  {
    src: join(root, ".next", "static"),
    dest: join(standalone, ".next", "static"),
  },
];

for (const { src, dest } of copies) {
  if (!existsSync(src)) continue;
  cpSync(src, dest, { recursive: true, force: true });
  console.log(`Copied ${src} -> ${dest}`);
}
