export const validtePhone = (phone: string | number) => {
  const phoneTest = /^1[3456789]\d{9}$/;
  return phoneTest.test(`${phone}`);
};
