'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { routes } from '@/routes';
import { UseAuthContext } from '@/context/authContext';

const useRoutesPrivacy = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuth } = UseAuthContext();
  const [loading, setLoading] = useState<boolean>(true);

  const publicRoutes = [routes.login, routes.register];
  const privateRoutes = [routes.profile, routes.cart];

  useEffect(() => {
      const routePrivacy = publicRoutes.includes(pathname)
      ? 'public'
      : privateRoutes?.includes(pathname)
      ? 'private'
      : null;

    if (!routePrivacy) {
      setLoading(false);
      return;
    }

    if (isAuth === null){
      return;
    } 
    
    if (
      (routePrivacy === 'public' && isAuth) ||
      (routePrivacy === 'private' && !isAuth)
    ) {
      router.push(routes.home);
      return;
    }

    setLoading(false); 
  }, [pathname, isAuth]);

  return { loading };
};

export default useRoutesPrivacy;
