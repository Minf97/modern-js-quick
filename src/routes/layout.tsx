import { Outlet } from '@modern-js/runtime/router';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import '../styles/utils.css';

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
