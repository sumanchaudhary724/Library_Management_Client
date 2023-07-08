import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { BurrowTable } from "../burrow-history/BurrowTable";

const BurrowHistory = () => {
  return (
    <UserLayout title="BurrowHistory">
      <div className="mt-3">{<BurrowTable />}</div>
    </UserLayout>
  );
};

export default BurrowHistory;
