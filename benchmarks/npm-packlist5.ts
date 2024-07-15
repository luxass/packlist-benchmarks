import packlist from 'npm-packlist5'

export default async function bench(dir: string) {
  return packlist({
    path: dir,
  })
}
