import { bench } from "vitest";
import packlist from "npm-packlist";
import packlist7 from "npm-packlist7";
import packlist6 from "npm-packlist6";
import packlist5 from "npm-packlist5";
import Arborist from "@npmcli/arborist";

declare const __testdir: string;

// eslint-disable-next-line test/consistent-test-it
bench("packlist@latest", async () => {
  const arborist = new Arborist({ path: __testdir });
  const tree = await arborist.loadActual();
  await packlist(tree);
});

// eslint-disable-next-line test/consistent-test-it
bench("packlist@7.0.4", async () => {
  const arborist = new Arborist({ path: __testdir });
  const tree = await arborist.loadActual();
  await packlist7(tree);
});

// eslint-disable-next-line test/consistent-test-it
bench("packlist@6.0.1", async () => {
  await packlist6({ path: __testdir });
});

// eslint-disable-next-line test/consistent-test-it
bench("packlist@5.1.3", async () => {
  await packlist5({ path: __testdir });
});
