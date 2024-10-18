import { pageBuilder } from './shared/pageBuilder'
import { seo } from './shared/seo'


export const homeQuery = `*[_type == 'home'][0]{
  ${seo},
  ${pageBuilder}
}`
