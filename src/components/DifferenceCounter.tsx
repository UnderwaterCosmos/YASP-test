import cn from 'classnames';

import { Instances } from '../types';

interface IDifferenceCounter {
  testInstances: Instances;
  index: number;
}

const line = cn(
  'absolute',
  'h-[210px]',
  'border-l',
  'border-[#898290]',
  'top-[200px]',
  'left-[252px]',
  'z-[-10]'
);

export function DifferenceCounter({
  testInstances,
  index,
}: IDifferenceCounter) {
  const arrOfSums = Object.values(testInstances).map((elem) =>
    Object.values(elem).reduce((acc, item) => acc + item, 0)
  );
  const differenceArr = arrOfSums.reduce((acc: number[], elem, index, arr) => {
    if (!index) return acc;
    acc.push(elem - arr[index - 1]);
    return acc;
  }, []);

  const differenceValue = differenceArr[index];
  const plus = differenceValue > 0 ? '+' : '';

  const arrowSvg = cn({
    'rotate-180': plus === '+',
    hidden: !differenceValue,
  });
  const diffStyles = cn(
    'mb-2',
    'bg-[#898290]',
    'text-white',
    'font-bold',
    'rounded-[50px]',
    'flex',
    'gap-x-1.5',
    'p-2.5',
    {
      '!bg-[#00CC99]': differenceValue > 0,
      '!bg-[#FC440F]': differenceValue < 0,
    }
  );

  return (
    <div className="relative">
      {differenceValue > 100000 && <div className={line} />}
      <div className={diffStyles}>
        <img src="/images/arrow.svg" className={arrowSvg} alt="arrow" />
        <span>
          {plus} {differenceValue}
        </span>
      </div>
    </div>
  );
}
