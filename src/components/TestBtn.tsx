import React from 'react';
import cn from 'classnames';

interface ITestBtn extends React.HTMLProps<HTMLButtonElement> {
  testName: string;
}

export default React.memo(function TestBtn({
  testName,
  children,
  ...props
}: ITestBtn) {
  const btn = cn('p-2', 'rounded', 'border-2', 'border-zinc-500', {
    'bg-zinc-300': children === testName,
  });

  return (
    <button {...props} type="button" className={btn}>
      {children}
    </button>
  );
});
