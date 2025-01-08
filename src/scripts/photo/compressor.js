function loadImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = dataUrl
  })
}

function resizeImage(img, maxWidth, maxHeight) {
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

  return { width, height }
}

function compressImage(img, width, height, quality, fileName) {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height = height

    ctx.drawImage(img, 0, 0, width, height)

    canvas.toBlob(
      (blob) => {
        if (blob) {
          const file = new File([blob], fileName, { type: 'image/jpeg' })
          resolve(file)
        }
      },
      'image/jpeg',
      quality
    )
  })
}

export async function compressPhoto(
  dataUrl,
  maxWidth = 800,
  maxHeight = 800,
  quality = 0.7,
  fileName = 'compressed.jpg'
) {
  try {
    const img = await loadImage(dataUrl)
    const { width, height } = resizeImage(img, maxWidth, maxHeight)
    return await compressImage(img, width, height, quality, fileName)
  } catch (error) {
    return error
  }
}
