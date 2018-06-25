interface User{
    nickname: string,
    score: number,
    time: number,
    avatar_url?: string
}

interface Avatar{
    eyes: string,
    nose: string,
    mouth: string,
    color: string
}

export { User, Avatar }