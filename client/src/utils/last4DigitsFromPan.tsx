// return the lasts 8 digits and format the * to •

export const Last4Digits = (pan: string) => pan.slice(-9).replace(/\*/g, "•");
