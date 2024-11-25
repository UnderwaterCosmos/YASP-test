import React from 'react';
import axios from 'axios';
import cn from 'classnames';

import { Container } from './components/Container';
import { DifferenceCounter } from './components/DifferenceCounter';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { TestBar } from './components/TestBar';
import { NormBar } from './components/NormBar';
import { Lines } from './components/Lines';

import { testUrlAndNames } from './data';
import { ITestData, ITestUrlAndNames, InstancesKeys } from './types';

const normalBar = cn(
  'justify-items-center',
  'flex',
  'flex-col',
  'justify-between',
  'items-center'
);
const barsSection = cn(
  'relative',
  'grid',
  'grid-cols-[repeat(4,_80px)]',
  'gap-x-20',
  'mb-10',
  'max-w-lg',
  'mx-auto'
);
const differences = cn('flex', 'gap-x-24', 'mb-10', 'ml-40');

export function App() {
  const [testName, setTestName] = React.useState(testUrlAndNames[0].name);
  const [testData, setTestData] = React.useState({} as ITestData);

  const { title, norm, ...testInstances } = testData;
  const testInstancesKeysArr = Object.keys(testInstances);
  const { url } = testUrlAndNames.find(
    (item) => item.name === testName
  ) as ITestUrlAndNames;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setTestData(data);
      } catch (error) {
        alert(`${(error as Error).message}: ошибка при загрузке данных`);
      }
    };

    fetchData();
  }, [testName]);

  return (
    <Container>
      <Header testName={testName} nameHandler={setTestName} />
      <main>
        <section className={differences}>
          {testInstancesKeysArr.length > 1 &&
            Array(testInstancesKeysArr.length - 1)
              .fill(null)
              .map((_, index) => (
                <DifferenceCounter
                  testInstances={testInstances}
                  index={index}
                  key={index}
                />
              ))}
        </section>
        <section className={barsSection}>
          <Lines topLine={-68} heightLine={112} />
          {testInstancesKeysArr.map((instanceName, index) => (
            <article className="justify-items-center mt-auto" key={index}>
              <TestBar
                instanceValue={testInstances[instanceName as InstancesKeys]}
                index={index}
              />
              <p>{instanceName}</p>
            </article>
          ))}
          <article className={normalBar}>
            <NormBar norm={norm} />
            <p>норматив</p>
          </article>
        </section>
      </main>
      <Footer />
    </Container>
  );
}
