import moment from 'moment'
import { Category } from '../services/category_pb'

export const getAvailableCategories = (categories: Category.AsObject[]) => {
  return categories.filter((c) => {
    if (!c.openTime || !c.closeTime) return true
    const now = moment().utc().add(8, 'hours')
    const nowInt = now.hour() * 100 + now.minute()
    if (c.openTime.value > c.closeTime.value) {
      return nowInt >= c.openTime.value || nowInt < c.closeTime.value
    } else {
      return nowInt >= c.openTime.value && nowInt < c.closeTime.value
    }
  })
}
