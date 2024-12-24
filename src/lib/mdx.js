import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

// Path to our posts directory
const postsDirectory = path.join(process.cwd(), 'posts')

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function getAllPosts(fields = []) {
  // Get all file names under /posts
  const filenames = fs.readdirSync(postsDirectory)
  const posts = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      // Remove ".mdx" from filename to get slug
      const slug = filename.replace(/\.mdx$/, '')
      
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      
      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents)
      
      // Calculate reading time
      const stats = readingTime(content)
      
      const post = {
        slug,
        readingTime: Math.ceil(stats.minutes),
      }

      // Ensure only the minimal needed data is exposed
      fields.forEach(field => {
        if (field === 'content') {
          post[field] = content
        }
        if (field === 'date') {
          post[field] = formatDate(data[field])
        }
        if (data[field]) {
          post[field] = data[field]
        }
      })

      return post
    })
    // Sort posts by date in descending order
    .sort((post1, post2) => new Date(post2.date) - new Date(post1.date))

  return posts
}

export function getPostBySlug(slug, fields = []) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const stats = readingTime(content)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'readingTime') {
      items[field] = Math.ceil(stats.minutes)
    }
    if (field === 'date') {
      items[field] = formatDate(data[field])
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
} 