
import {useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions} from "@tanstack/react-query";
import type {UseQueryResult} from "@tanstack/react-query";
import { axios } from "../config/axios";
import {ErrorResponse} from "../types/error.ts";

export const useGet = <T>(path: string, options: Partial<UseQueryOptions> = {}): UseQueryResult<T, ErrorResponse> => {
    // @ts-ignore
    return useQuery({
        queryFn: () => axios.get(path),
        queryKey: options.queryKey || [path],
        ...options
    })
}

export const usePost = <T>(
    path: string,
    options: Partial<UseMutationOptions> = {}
): UseMutationResult<T, ErrorResponse, any> => {
    return useMutation<T, ErrorResponse>({
        mutationFn: (data): any => axios.post(path, data), ...options
    })
}

export const usePatch = <T>(
    path: string,
    options: Partial<UseMutationOptions> = {}
): UseMutationResult<T, ErrorResponse, any> => {
    return useMutation<T, ErrorResponse>({
        mutationFn: (data): any => axios.patch(path, data), ...options
    })
}

export const useDelete = (
    path: string,
    options: Partial<UseMutationOptions> = {}
): UseMutationResult<unknown, ErrorResponse, any> => {
    return useMutation<unknown, ErrorResponse>({
        mutationFn: (): any => axios.delete(path),
        ...options
    })
}