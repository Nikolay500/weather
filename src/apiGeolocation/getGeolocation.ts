export const getGeolocation = async () => {
  const res = await fetch("http://ip-api.com/json/")
  const data = await res.json()
  return data.city
}