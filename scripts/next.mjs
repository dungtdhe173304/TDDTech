import { spawn } from "node:child_process";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const [mode = "dev", ...args] = process.argv.slice(2);
const child = spawn(
  process.execPath,
  [
    require.resolve("next/dist/bin/next"),
    mode,
    ...(["dev", "build"].includes(mode) ? ["--webpack"] : []),
    ...args,
  ],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_DIST_DIR: mode === "dev" ? ".next" : ".next-production",
    },
  },
);
child.on("exit", (code) => {
  process.exitCode = code || 0;
});
process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
