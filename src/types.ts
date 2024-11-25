export interface IInstanceValue {
  front: number;
  back: number;
  db: number;
}

export interface ITestData {
  title: string;
  dev: IInstanceValue;
  test: IInstanceValue;
  prod: IInstanceValue;
  norm: number;
}

export type Instances = Omit<ITestData, 'norm' | 'title'>;
export type InstancesKeys = keyof Instances;

export interface ITestUrlAndNames {
  url: string;
  name: string;
}

export interface IFooterData {
  color: string;
  text: string;
}
