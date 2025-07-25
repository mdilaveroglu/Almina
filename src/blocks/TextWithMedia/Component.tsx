import React from 'react'
import type { TextWithMediaBlock } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

type Props = TextWithMediaBlock & {
  disableInnerContainer?: boolean
}

export const TextWithMediaBlockComponent: React.FC<Props> = ({
  textPosition = 'left',
  text,
  media,
}) => {
  return (
    <div className="container my-16">
      <div
        className={cn('flex flex-col md:flex-row items-center gap-y-8 gap-x-16', {
          'md:flex-row-reverse': textPosition === 'right',
        })}
      >
        <div className="w-full md:w-1/2 flex items-center justify-center px-2 md:px-4">
          <RichText data={text} enableGutter={false} />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center px-2 md:px-4">
          <Media
            resource={media}
            imgClassName="border border-border rounded-[0.8rem] max-w-full h-auto shadow-sm"
          />
        </div>
      </div>
    </div>
  )
}
