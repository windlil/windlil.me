import dayjs from 'dayjs'

export async function getList(dirname: string) {
  const result = await queryContent(dirname).sort({ date: -1 }).find()
  
  for (const item in result) {
    const date = result[item].date
    const formatDate = dayjs(date).format('YYYY-MM-DD')
    result[item].date = formatDate
  }
  return result
}