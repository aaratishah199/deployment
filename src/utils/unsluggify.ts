export function unslugifyString(text: string) {
  const words = text.split(/[^a-zA-Z]+/)

  const titleCaseWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })

  const result = titleCaseWords.join(' ')

  return result
}
