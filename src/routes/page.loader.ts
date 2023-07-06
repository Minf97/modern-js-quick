import { name, internet } from 'faker';

type LoaderData = {
  code: number;
  data: {
    name: string;
    avatar: string;
    email: string;
  }[];
};

export default async (): Promise<LoaderData> => {
  const data = new Array(20).fill(0).map(() => {
    const firstName = name.firstName();
    return {
      name: firstName,
      avatar: `https://avatars.dicebear.com/api/identicon/${firstName}.svg`,
      email: internet.email(),
    };
  });

  return {
    code: 200,
    data,
  };
};
