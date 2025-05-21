import { usePrivy } from "@privy-io/react-auth";
import { useState, useEffect } from "react";

export function useAdminCheck() {
  const { user, authenticated, ready } = usePrivy();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ready && authenticated && user) {
      // In a real application, this would check against a database or API
      // For demo purposes, we'll consider all authenticated users as admins
      // You would replace this with your actual admin check logic
      
      // Example admin check:
      // const adminEmails = ['admin@example.com'];
      // const isUserAdmin = user.email && adminEmails.includes(String(user.email));
      
      // For demo, set all users as admins
      setIsAdmin(true);
      setLoading(false);
    } else if (ready) {
      setIsAdmin(false);
      setLoading(false);
    }
  }, [user, authenticated, ready]);

  return { isAdmin, loading };
}