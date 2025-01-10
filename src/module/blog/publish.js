import { slug } from '../../scripts/utils/slug'
import { uploadFileToDB } from '../../database/file/uploadFile'
import { saveToFirestore } from '../../database/firebase/firebase.firestore'

export async function publishBlog(title, texts, photos) {
  const blog = []
  let photo_i = 0

  for (let i = 0; i < texts.length; i++) {
    if (!texts[i].deleted && texts[i].value) {
      blog.push({ type: 'text', value: texts[i].value })
    }

    if (photos[i]?.data) {
      const url = await photoURL(title, photos[i], photo_i)
      photo_i++

      blog.push({
        type: 'photo',
        url,
        subtitle: photos[i].subtitle,
      })
    }
  }

  const published = new Date().getTime()
  const publishData = { title, blog, published }

  await saveToFirestore(`blog/${slug(title)}`, publishData)
}

async function photoURL(title, photo, i) {
  const photoPathname = `${slug(title)}/${i}`
  await uploadFileToDB(photoPathname, photo.file)

  const url =
    'https://fyayncgrvupetvjyzrwi.supabase.co/storage/v1/object/public/blog/' +
    photoPathname

  return url
}
