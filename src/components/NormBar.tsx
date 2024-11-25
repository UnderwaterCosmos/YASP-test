import cn from 'classnames';

const blueBg = cn(
  'min-w-20',
  'mt-auto',
  'rounded-[10px]',
  'relative',
  'overflow-hidden'
);
const gradient = cn(
  'absolute',
  'inset-0',
  'bg-[repeating-linear-gradient(-45deg,_#ffffff_0px,_#ffffff_5px,_#4AB6E8_5px,_#4AB6E8_10px)]'
);
const numberBox = cn(
  'relative',
  'flex',
  'items-center',
  'justify-center',
  'h-full'
);
const normNumber = cn('bg-white', 'rounded', 'p-0.5', 'font-bold');

export function NormBar({ norm }: { norm: number }) {
  const normHeight = norm > 99 ? 200 : norm + 40;

  return (
    <div className={blueBg} style={{ height: `${normHeight}px` }}>
      <div className={gradient} />
      <div className={numberBox}>
        <div className={normNumber}>{norm}</div>
      </div>
    </div>
  );
}
