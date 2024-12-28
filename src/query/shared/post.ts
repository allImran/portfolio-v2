export const posts =`
posts[]->{
    title,
    slug,
    image,
    detail,
    externalLink,
    authors[]->{
        name,
        image,
        slug,
    },
    _updatedAt
}`
