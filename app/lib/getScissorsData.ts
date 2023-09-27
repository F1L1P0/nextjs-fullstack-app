export default async function getScissorsData(index: number) {
  const scissorsData = await fetch(`http://localhost:3000/api/scissorsData`)
  const res = await scissorsData.json()
  if (!scissorsData.ok) return undefined
  return res[index]
}
