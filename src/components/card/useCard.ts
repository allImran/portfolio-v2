import { type Post } from '@sanity/types'
import { computed } from 'vue'
import { urlForImage } from '@/lib/urlForImage'
import { getFormattedDate } from '@/lib/utils';

export const useCard = ({item}: {item: Post}) => {
  const postImage = computed(() => {
    return item.image && urlForImage(item.image)
  })

  const postUpdatedAt = computed(() => {
    return getFormattedDate(item._updatedAt)
  })

  return {
    postImage,
    postUpdatedAt
  }
}