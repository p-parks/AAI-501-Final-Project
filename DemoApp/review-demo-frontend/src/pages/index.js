import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/review');
  }, [router]);

  return null; // You can also return a loading spinner or some other placeholder content here
}
