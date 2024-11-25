import React from 'react';
import cn from 'classnames';

import { testUrlAndNames } from '../data';
import TestBtn from './TestBtn';

interface IHeader {
  testName: string;
  nameHandler: React.Dispatch<React.SetStateAction<string>>;
}

const navigationList = cn(
  'flex',
  'justify-center',
  'gap-x-3',
  'text-xl',
  'font-[RobotoBold]',
  'mb-5'
);

export function Header({ testName, nameHandler }: IHeader) {
  const handleName = React.useCallback(
    (name: string) => nameHandler(name),
    [nameHandler]
  );

  return (
    <header className="mb-12">
      <nav>
        <ul className={navigationList}>
          {testUrlAndNames.map((data) => (
            <li key={data.url}>
              <TestBtn
                testName={testName}
                onClick={() => handleName(data.name)}
              >
                {data.name}
              </TestBtn>
            </li>
          ))}
        </ul>
      </nav>
      <h1 className="text-center text-lg font-medium">
        Количество пройденных тестов "{testName}"
      </h1>
    </header>
  );
}
