import React from 'react';

import { footerData } from '../data';

export default React.memo(function Footer() {
  return (
    <footer>
      <ul className="flex justify-center gap-x-12">
        {footerData.map((data) => (
          <li className="flex items-center gap-x-2" key={data.color}>
            <div className={`bg-[${data.color}] w-4 h-4 rounded`} />
            <div>{data.text}</div>
          </li>
        ))}
      </ul>
    </footer>
  );
});
