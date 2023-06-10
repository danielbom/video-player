import { execa } from 'execa'
import fs from 'fs'

// https://dev.to/the_one/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg#:~:text=Deploy%20to%20Github%20Pages%20like%20a%20pro%20with,%E2%9C%A8%F0%9F%8E%89%20And...%20that%27s%20it%21%20%F0%9F%8E%89%E2%9C%A8%20...%20Mais%20itens
// https://vitejs.dev/guide/static-deploy.html
;(async () => {
  try {
    // await execa('git', ['checkout', '--orphan', 'gh-pages'])
    console.log('Building...')
    await execa('npm', ['run', 'build'], { stdout: 'inherit' })
    const folderName = 'dist'
    if (!fs.existsSync(folderName)) throw new Error(`No '${folderName}' folder found!`)
    await execa('git', ['--work-tree', folderName, 'add', '--all'])
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages'])
    console.log('Pushing to gh-pages...')
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
    fs.rmSync(folderName, { recursive: true })
    await execa('git', ['checkout', '-f', 'main'])
    await execa('git', ['branch', '-D', 'gh-pages'])
    console.log('Successfully deployed')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
