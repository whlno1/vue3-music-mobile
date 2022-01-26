import { get } from './base'
export function getRecommend () {
  return get('/api/getRecommend')
}

export function getAlbum (getAlbum) {
  return get('/api/getAlbum', {
    id: getAlbum.id
  })
}
