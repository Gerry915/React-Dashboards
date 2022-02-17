import { useEffect } from "react";

export const Dashboard = () => {

  useEffect(() => {
    
    return () => {
      console.log('component unmounted')
    };
  }, []);

  return (
    <div>Dashboard</div>
  )
}