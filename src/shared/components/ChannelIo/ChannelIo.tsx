'use client'

import { useEffect } from 'react'
import * as ChannelService from '@channel.io/channel-web-sdk-loader'
import { CHANNEL_IO_PLUGIN_KEY } from '@/shared/constants'

export const ChannelIo = () => {
  useEffect(() => {
    ChannelService.loadScript()
    ChannelService.boot({
      pluginKey: CHANNEL_IO_PLUGIN_KEY
    })
  }, [])

  return null
}
