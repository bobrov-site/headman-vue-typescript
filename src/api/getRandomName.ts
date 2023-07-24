import axios from "axios";
export default async function getRandomName() {
  const { data } = await axios<{ FirstName: string }>(
    "http://api.randomdatatools.ru/?unescaped=false&params=FirstName"
  );
  return data.FirstName.toLowerCase();
}
