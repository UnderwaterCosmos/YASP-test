import cn from 'classnames';

export function Lines({
  topLine,
  heightLine,
}: {
  topLine: number;
  heightLine: number;
}) {
  const lineStyles = cn(
    'absolute',
    'w-36',
    'border-l',
    'border-[#898290]',
    'left-[39px]',
    'z-[-10]'
  );

  return (
    <>
      <div
        className={lineStyles}
        style={{
          height: `${heightLine}px`,
          top: `${topLine}px`,
        }}
      />
      <div
        className={lineStyles}
        style={{
          borderTopWidth: '1px',
          top: `${topLine}px`,
        }}
      />
      <div
        className={lineStyles}
        style={{
          height: `${heightLine}px`,
          top: `${topLine}px`,
          left: '182px',
        }}
      />
    </>
  );
}
