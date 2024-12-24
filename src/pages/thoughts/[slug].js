import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getPostBySlug, getAllPosts } from '../../lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Nav from "../../components/nav"

function formatDate(dateString) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const components = {
  h1: (props) => <h1 className="text-3xl font-alpina text-[#755d4c] mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="text-2xl font-alpina text-[#755d4c] mt-6 mb-3" {...props} />,
  h3: (props) => <h3 className="text-xl font-alpina text-[#755d4c] mt-5 mb-2" {...props} />,
  p: (props) => <p className="text-[#573c28] mb-4 leading-relaxed" {...props} />,
  a: (props) => (
    <a
      className="text-[#8c5844] hover:text-[#ad8b73] transition-colors duration-200"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-[#573c28]" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-[#573c28]" {...props} />
  ),
  li: (props) => (
    <li className="text-[#573c28] leading-relaxed ml-4" {...props} />
  ),
  strong: (props) => (
    <strong className="font-bold text-[#8c5844]" {...props} />
  ),
  em: (props) => (
    <em className="italic text-[#573c28]" {...props} />
  ),
}

export default function Post({ post }) {
  const router = useRouter()
  const formattedDate = formatDate(post.date)

  if (router.isFallback) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#573c28]">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #fcf7f2;
          background-image: url("./Unknown-2.jpg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        @font-face {
          font-family: "GT Alpina";
          src: url("/path/to/your/gt-alpina-font.woff2") format("woff2"),
            url("/path/to/your/gt-alpina-font.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }

        .font-alpina {
          font-family: "GT Alpina", ui-serif, Georgia, Cambria,
            "Times New Roman", Times, serif;
        }
      `}</style>

      <Nav />

      <main className="text-[#573c28] z-10 mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-6 gap-6 px-6 pb-28 pt-32">
        <motion.article
          className="col-span-4 md:col-span-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-2xl bg-[#f5e2cc]/30 backdrop-blur-2xl p-8">
            <header className="mb-8">
              <h1 className="text-4xl text-[#755d4c] font-alpina mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-[#ad8b73]">
                <span>{formattedDate}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </header>
            
            <div className="prose prose-stone max-w-none prose-headings:text-[#755d4c] prose-p:text-[#573c28] prose-a:text-[#8c5844] prose-a:no-underline hover:prose-a:text-[#ad8b73]">
              <MDXRemote {...post.content} components={components} />
            </div>

            <footer className="mt-12 pt-6 border-t border-[#ad8b73]/20">
              <Link href="/thoughts">
                <p className="text-[#ad8b73] hover:text-[#8c5844] transition duration-300 flex items-center">
                  <span className="mr-2">←</span>
                  Back to thoughts
                </p>
              </Link>
            </footer>
          </div>
        </motion.article>
      </main>

      <footer className="flex items-center justify-center w-full h-16 text-[#ad8b73] font-alpina">
        © 2024 Siddharth Duggal
      </footer>
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'readingTime'
  ])

  const mdxSource = await serialize(post.content)

  return {
    props: {
      post: {
        ...post,
        content: mdxSource
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
} 