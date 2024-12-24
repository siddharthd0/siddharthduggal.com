import Link from "next/link";
import { motion } from "framer-motion";
import { getAllPosts } from "../lib/mdx";
import Nav from "../components/nav";

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
      ease: "easeOut",
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Thoughts({ posts }) {
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
        <motion.div
          className="col-span-4 md:col-span-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="rounded-2xl bg-[#f5e2cc]/30 backdrop-blur-2xl p-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl text-[#755d4c] font-alpina mb-4">Thoughts</h1>
              <p className="text-[#ad8b73] mb-8">
                A collection of my thoughts, experiences, and learnings.
              </p>
            </motion.div>

            <div className="space-y-6">
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <Link href={`/thoughts/${post.slug}`}>
                    <div className="p-6 rounded-lg bg-[#f5e2cc]/20 hover:bg-[#f5e2cc]/40 transition-all duration-300 border border-[#ad8b73]/10 hover:border-[#ad8b73]/30">
                      <h2 className="text-xl text-[#755d4c] font-alpina mb-2">
                        {post.title}
                      </h2>
                      <p className="text-[#573c28] text-sm mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-[#ad8b73]">
                        <span>{formatDate(post.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="flex items-center justify-center w-full h-16 text-[#ad8b73] font-alpina">
        © 2024 Siddharth Duggal
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'readingTime',
  ]);

  return {
    props: { posts },
  };
} 