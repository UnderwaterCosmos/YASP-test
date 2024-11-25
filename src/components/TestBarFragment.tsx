import cn from 'classnames';

interface ITestBarFragment {
  devComponentKey: string;
  value: number;
}

export function TestBarFragment({ devComponentKey, value }: ITestBarFragment) {
  const barItem = cn(
    'py-3',
    'flex',
    'justify-center',
    'items-center',
    'min-w-20',
    'text-white',
    'font-bold',
    'first:rounded-t-[10px]',
    'last:rounded-b-[10px]',
    {
      'bg-[#4AB6E8]': devComponentKey === 'front',
      'bg-[#AA6FAC]': devComponentKey === 'back',
      'bg-[#E85498]': devComponentKey === 'db',
    }
  );

  const fragmentHeight = value > 99 ? 150 : value + 40;

  return (
    <li
      className={barItem}
      style={{
        height: `${fragmentHeight}px`,
      }}
    >
      {value}
    </li>
  );
}
