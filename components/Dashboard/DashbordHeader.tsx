import React from "react";
import Typography from "../constants/Typorgraphy";
import { useAuth } from "@/hooks/useAuth";
import { User } from "@/hooks/useAuth";
import { useState, useEffect } from "react";

const DashbordHeader = () => {
  const { user } = useAuth();

  const [theUser, setTheUser] = useState<User | null>();

  useEffect(() => {
    setTheUser(user);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-[58px]">
      <div className="mb-4">
        <Typography as="h4" font="font-gordita-medium">
          Hello, {theUser?.fullName}
        </Typography>
      </div>
      <p className="text-sm text-[#475467] font-gordita-regular">
        Manage your account and activities here
      </p>
    </div>
  );
};

export default DashbordHeader;
