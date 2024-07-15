import Arborist from '@npmcli/arborist'
import packlist from 'npm-packlist'

export default async function bench(dir: string) {
  const arborist = new Arborist({ path: dir })
  const tree = await arborist.loadActual()

  return packlist(tree)
}
