export type Tab = {
    name: string
    content: string
}

export type TabStash = Map<
    string,
    {
        name: string
        content: string
    }[]
>
