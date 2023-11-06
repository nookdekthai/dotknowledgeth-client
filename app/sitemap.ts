import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.dotknowledgeth.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dotknowledgeth.com/courses',
      lastModified: new Date(),
    },
    {
      url: 'https://www.dotknowledgeth.com/about',
      lastModified: new Date(),
    },
  ]
}