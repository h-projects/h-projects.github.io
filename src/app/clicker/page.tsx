import { ActualClicker } from '@/components/ActualClicker';
import type { FC } from 'react';

// can't make the actual page a client component else it errors out :D i love living
const Clicker: FC<{ dark: boolean }> = ({ dark }) => (
  <div id="clicker">
    <ActualClicker dark={dark} />
  </div>
);

export default Clicker;
