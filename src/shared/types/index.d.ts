namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_BASE_URL: string
    NEXT_PUBLIC_MOCKING_ENABLED: string
    // api로 변경될 예정
    NEXT_PUBLIC_CARDINAL_NUMBER: string
    NEXT_PUBLIC_RECRUITING_END_DATE: string
    NEXT_PUBLIC_CHANNEL_IO_PLUGIN_KEY: string
  }
}
