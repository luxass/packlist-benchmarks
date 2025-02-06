import Arborist from "@npmcli/arborist";
import packlist from "npm-packlist";
import packlist5 from "npm-packlist5";
import packlist6 from "npm-packlist6";
import packlist7 from "npm-packlist7";
import packlist8 from "npm-packlist8";
import packlist9 from "npm-packlist9";
import { bench } from "vitest";

declare const __testdir: string;

bench("packlist@latest", async () => {
  const arborist = new Arborist({ path: __testdir });
  const tree = await arborist.loadActual();
  await packlist(tree);
});

bench("packlist@9.0.1", async () => {
  const arborist = new Arborist({ path: __testdir });
  const tree = await arborist.loadActual();
  await packlist9(tree);
});

bench("packlist@8.0.2", async () => {
  const arborist = new Arborist({ path: __testdir });
  const tree = await arborist.loadActual();
  await packlist8(tree);
});

bench("packlist@7.0.4", async () => {
  const arborist = new Arborist({ path: __testdir });
  const tree = await arborist.loadActual();
  await packlist7(tree);
});

bench("packlist@6.0.1", async () => {
  await packlist6({ path: __testdir });
});

bench("packlist@5.1.3", async () => {
  await packlist5({ path: __testdir });
});
