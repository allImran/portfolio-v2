import { pageBuilder } from './shared/pageBuilder'
import { seo } from './shared/seo'


export const blogQuery = `*[_type == 'home'][0]{
  ${seo},
  ${pageBuilder}
}`
