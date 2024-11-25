import { TestBarFragment } from './TestBarFragment';
import { Lines } from './Lines';
import { IInstanceValue } from '../types';

export function TestBar({
  instanceValue,
  index,
}: {
  instanceValue: IInstanceValue;
  index: number;
}) {
  return (
    <div className="relative">
      {Boolean(index) && (
        <img
          src="/images/diffArrow.svg"
          className="absolute top-[-4px] right-[54px]"
          alt=""
        />
      )}
      {index === 1 && <Lines topLine={-88} heightLine={200} />}
      <ul>
        {Object.keys(instanceValue).map((devComponentKey) => (
          <TestBarFragment
            devComponentKey={devComponentKey}
            value={instanceValue[devComponentKey as keyof IInstanceValue]}
            key={devComponentKey}
          />
        ))}
      </ul>
    </div>
  );
}
