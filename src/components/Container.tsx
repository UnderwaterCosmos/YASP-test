import React from 'react';
import cn from 'classnames';

const container = cn('max-w-2xl', 'px-2.5', 'mx-auto', 'my-28');

export function Container({ children }: { children: React.ReactNode }) {
  return <div className={container}>{children}</div>;
}
