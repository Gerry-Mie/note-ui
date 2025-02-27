export type ApiResponse<T> = {
    "docs": [T],
    "totalDocs": number,
    "limit": number,
    "totalPages": number
    "page": number,
    "pagingCounter": number,
    "hasPrevPage": boolean,
    "hasNextPage": boolean,
    "prevPage": null|string,
    "nextPage": null|string
}