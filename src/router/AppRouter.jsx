import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Timesheet from "../pages/Timesheet/Timesheet";
import PeoplePage from "../pages/People/PeoplePage";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/people" />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route
            path="/team-management/timesheet"
            element={<Timesheet />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
