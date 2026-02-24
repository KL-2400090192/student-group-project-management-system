import { Outlet, Link } from "react-router-dom";

export function Root() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Student Project Management Dashboard</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Login</Link> |{" "}
        <Link to="/teacher-dashboard">Teacher</Link> |{" "}
        <Link to="/student-dashboard">Student</Link>
      </nav>

      <Outlet />
    </div>
  );
}
