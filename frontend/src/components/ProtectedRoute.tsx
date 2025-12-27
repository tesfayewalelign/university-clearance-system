import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login");
    }
  }, [router]);

  if (!isClient) return null;
  return <>{children}</>;
}
