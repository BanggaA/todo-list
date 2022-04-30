import { Request } from 'express';

export const getUrl = (req: Request) => new URL(`${req.protocol}://${req.headers.host}${req.url}`);

export const getPaginationLinks = (paginationUrl: string, page: number, lastPage: number) => {
  return {
    current: paginationUrl,
    first: paginationUrl.replace(`page=${page}`, `page=1`),
    previous: page <= 1 ? null : paginationUrl.replace(`page=${page}`, `page=${page - 1}`),
    next: page >= lastPage ? null : paginationUrl.replace(`page=${page}`, `page=${page + 1}`),
    last: paginationUrl.replace(`page=${page}`, `page=${lastPage}`),
  };
};
