export type Type =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'

export type Tab = {
    name: string
    content: string
}

export type NounContent = {
    moreText: string
    type: Type
    title?: string
    text: string
    link?: string
}


export type ChatRole = 'sender' | 'responder'
export type Chat = {
    role: ChatRole
    name: string
    content: string
}