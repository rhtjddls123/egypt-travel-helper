import TipsCard from "@/components/tips/tips-card";
import TipsEmergencyContacts from "@/components/tips/tips-emergency-contacts";
import React from "react";

const TipsPage = () => {
  return (
    <div className="space-y-6">
      <TipsCard />
      <TipsEmergencyContacts />
    </div>
  );
};

export default TipsPage;
