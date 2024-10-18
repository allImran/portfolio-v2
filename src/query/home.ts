import { pageBuilder } from './shared/pageBuilder'
import { seo } from './shared/seo'
import { posts } from './shared/post'

export const homeQuery = `*[_type == 'home'][0]{
  ${seo},
  ${pageBuilder},
  ${posts}
}`
