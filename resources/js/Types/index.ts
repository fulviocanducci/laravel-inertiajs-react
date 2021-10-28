interface ITodos {
    id: number;
    description: String;
    active: number;
}
interface IBaseError {
    description?: string;
}
interface ILinks {
    active: boolean;
    label: string | null;
    url: string | null;
}

interface IUser {
    created_at: string;
    email: string;
    email_verified_at?: string;
    id: number;
    name: string;
    updated_at?: string;
}
interface IPaginateGeneric<T> {
    current_page: number;
    data: T[];
    first_page_url?: string;
    from: number;
    last_page: number;
    last_page_url?: string;
    links: ILinks[];
    next_page_url?: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
}

export { ITodos, ILinks, IPaginateGeneric, IBaseError, IUser };
