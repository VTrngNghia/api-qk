export interface IPagination {
    currentPage: number;
    perPage: number;
    total: number;
}

export interface IPaginatedResponse {
    meta: IPagination;
}
