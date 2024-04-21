const isDev = process.env.NODE_ENV === 'development'

export async function asset(path: string) {
  if (isDev) {
    return path
  }

  const viteManifest = await import('../../dist/.vite/manifest.json')

  const key = path as keyof typeof viteManifest.default

  const hashedPath = viteManifest.default[key].file

  if (!hashedPath) {
    throw new Error(`Could not find hashed path for ${path}`)
  }

  return hashedPath
}
