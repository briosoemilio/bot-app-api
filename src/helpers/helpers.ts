import { HttpException, HttpStatus } from '@nestjs/common';

export const throwNewException = (status: HttpStatus, message: string) => {
  throw new HttpException(
    {
      status,
      isSuccessful: false,
      message,
    },
    status,
  );
};
