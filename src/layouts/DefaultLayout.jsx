import { useAuth } from '../context/AuthContext';

const DefaultLayout = ({ children }) => {
  const { logout } = useAuth();

  return (
    <div className='bg-home'>
      <div className="p-5 w-full flex justify-between mb-4">
        <h1 className="text-xl font-semibold">Checklist App</h1>
        <button onClick={logout} className="text-sm text-red-600 underline">Logout</button>
      </div>
      <div className='px-5 pb-5'>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
