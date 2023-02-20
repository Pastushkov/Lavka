export const apiEncode = (url?: string) => {
    const urlSplited = (url || '').split('?')
    return urlSplited.length === 2
        ? `${urlSplited[0]}?${urlSplited[1]
              .split('&')
              .map(item => {
                  const splited = item.split('=')
                  return `${splited[0]}=${encodeURIComponent(splited[1])}`
              })
              .join('&')}`
        : urlSplited[0]
}
