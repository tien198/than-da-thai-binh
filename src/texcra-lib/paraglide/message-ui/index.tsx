import { ParaglideMessage, type MessageLike } from '@inlang/paraglide-js-react'
import type { MessageMetadata } from '@inlang/paraglide-js'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

import type { Locale } from '../../../../paraglide/runtime'

type Props = {
  locale?: Locale
  message: MessageLike<any, any, any> & MessageMetadata<any, any, any>
}

export function MessageUI({ locale, message }: Props) {
  return (
    <ParaglideMessage
      message={message}
      options={locale ? { locale } : undefined}
      markup={{
        br: () => <br />,
        em: ({ children }: PropsWithChildren) => <em>{children}</em>,
        strong: ({ children }: PropsWithChildren) => <strong>{children}</strong>,
        link: ({ children, options, attributes }) => (
          <Link href={options.to} data-track={attributes.track === true ? 'true' : 'false'}>
            {children}
          </Link>
        ),
      }}
      inputs={{}}
    />
  )
}
