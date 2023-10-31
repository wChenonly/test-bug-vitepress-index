/**
 * 判断是否是安卓
 * @returns boolean 是否是安卓
 */

export function wu_isAndroid(): boolean {
  const u = navigator.userAgent
  return u.includes('Android') || u.includes('Linux')
}
