import { sdb } from '@/utils/sdb'

export default defineEventHandler(async (event) => {
  const { email } = getQuery(event) as { email: string }

  let account = {}

  if (email) {
    const res = await sdb.account.queryByEmail(email)
    if (res && res.length === 1) {
      account = res[0]
    }
  }

  return account
})
