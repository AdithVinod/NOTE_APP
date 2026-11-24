import React from "react";
// import Hero1 from "../components/user/Hero1";
import ChatBot from "../components/user/ChatBot";
import { lazy, Suspense } from "react";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Hero1 = lazy(() => import("../components/user/Hero1"));
// const Hero = lazy(() => import("../components/User/Hero"));

function LandingPage() {
  return (
    <div>
      <ChatBot />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero1 />
      </Suspense>
    </div>
  );
}

export default LandingPage;
