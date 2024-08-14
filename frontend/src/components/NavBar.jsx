import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export default function NavBar() {
  const isAuth = useIsAuthenticated();
  return (
    <nav className="absolute bg-[#1f1f1f] flex justify-between items-center w-screen h-12 p-4 text-white z-10">
      <a className="font-semibold text-xl" href="/">
        Discussion Center
      </a>
      <div className="flex flex-row gap-4">
        {isAuth ? (
          <>
            <a href="/profile" className="hover:underline">
              profil
            </a>
            <a href="/" className="hover:underline">
              add discuss
            </a>
          </>
        ) : (
          <a href="/login" className="hover:underline">
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
