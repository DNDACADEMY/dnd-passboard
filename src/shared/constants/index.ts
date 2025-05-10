export const IS_DEV = process.env.NODE_ENV === 'development'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const MOCK_SERVER_URL = 'http://localhost:9090'

const MOCKING_ENABLED = process.env.NEXT_PUBLIC_MOCKING_ENABLED === 'enabled'
export const SERVER_URL = MOCKING_ENABLED ? MOCK_SERVER_URL : BASE_URL
