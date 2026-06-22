import fs from "fs";
import path from "path";
import matter from "gray-matter";

// 1. Definisikan tipe data untuk Meta Artikel agar TypeScript mengenalinya
export interface PostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
  image?: string; // Tambahkan baris ini (tanda tanya berarti opsional)
  [key: string]: any;
}

// Menunjuk ke folder konten Anda (Pastikan nama foldernya benar-benar "contents" sejajar dengan "app")
const rootDirectory = path.join(process.cwd(), "contents");

// Mengambil 1 artikel berdasarkan slug (nama file)
export const getPostBySlug = (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  
  // Gray-matter memisahkan Frontmatter (meta) dan isi tulisan (content)
  const { data, content } = matter(fileContent);
  
  // 2. Beri tahu TypeScript bahwa gabungan data ini mengikuti format PostMeta
  const meta = { ...data, slug: realSlug } as PostMeta;
  
  return { meta, content };
};

// Mengambil semua daftar artikel untuk halaman depan blog
// 3. Pastikan fungsi ini mengembalikan Array dari PostMeta
export const getAllPostsMeta = (): PostMeta[] => {
  // Jika folder belum ada, buat otomatis agar tidak error
  if (!fs.existsSync(rootDirectory)) {
    fs.mkdirSync(rootDirectory, { recursive: true });
  }

  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => getPostBySlug(file).meta);
  
  // Urutkan dari artikel terbaru ke terlama
  // Sekarang TypeScript sudah tahu persis bahwa a dan b pasti memiliki properti "date"
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};