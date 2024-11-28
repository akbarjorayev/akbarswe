export async function compressPhoto(
  dataUrl,
  maxWidth = 800,
  maxHeight = 800,
  quality = 0.7
) {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => {
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height *= maxWidth / width))
          width = maxWidth
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width *= maxHeight / height))
          height = maxHeight
        }
      }

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = width
      canvas.height = height

      ctx.drawImage(img, 0, 0, width, height)

      const compressedDataUrl = canvas.toDataURL('image/jpeg', quality)
      resolve(compressedDataUrl)
    }

    img.onerror = reject
    img.src = dataUrl
  })
}
