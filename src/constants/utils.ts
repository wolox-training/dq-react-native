const EMAIL_REGEX = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const isValidEmail = (value: string) => EMAIL_REGEX.test(value);

export const isValidPassword = (value: string) => value.length >= 8;
