import axios from 'axios';

export const generateDicebearAvatar = async (seed: string) => {
  const diceBearUrl = `https://avatars.dicebear.com/api/bottts/${seed}.svg?width=500`;
  const axiosRes = await axios.get(diceBearUrl);
  return axiosRes.data;
};
