export const sleep = async (mSec: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, mSec))
