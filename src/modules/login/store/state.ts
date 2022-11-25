
export interface IDashboardState {
    username?: string,
    arr: Role[]
}

export interface Role {
    user: string,
    name?: string
}

export const state = (): IDashboardState  => ({
    username: 'aiperezc',
    arr: []
})