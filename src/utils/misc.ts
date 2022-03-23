import moment from 'moment'

export const formatThreadId = (id?: number) => {
  return '#' + (id ?? 0).toString().padStart(6, '0')
}

export const getColorFromNumber = (n: number) => {
  return '#' + n.toString(16).slice(2)
}

export const getLastReplyAt = (t: string) => {
  const lastReplyAt = moment(parseInt(t) / 1000000)
  if (lastReplyAt.isSame(new Date(), 'day')) {
    return lastReplyAt.format('HH:mm')
  } else if (lastReplyAt.isSame(new Date(), 'year')) {
    return lastReplyAt.format('MM-DD HH:mm')
  } else {
    return lastReplyAt.format('YYYY-MM-DD HH:mm')
  }
}

export function getPostTime(time?: any) {
  if (!time) return ''
  const createdAt = moment(time.toDate())
  if (createdAt.isSame(new Date(), 'day')) {
    return createdAt.fromNow()
  } else if (createdAt.isSame(moment().subtract(1, 'day'), 'day')) {
    return '昨天 ' + createdAt.format('HH:mm')
  } else if (createdAt.isSame(moment().subtract(2, 'days'), 'day')) {
    return '前天 ' + createdAt.format('HH:mm')
  } else if (createdAt.isSame(new Date(), 'year')) {
    return createdAt.format('MM-DD HH:mm')
  } else {
    return createdAt.format('YYYY-MM-DD HH:mm')
  }
}
