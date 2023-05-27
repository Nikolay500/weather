export const getGeolocation = async () => {
  const res = await fetch("https://ipwho.is/")
  const data = await res.json()
  return data.city
}