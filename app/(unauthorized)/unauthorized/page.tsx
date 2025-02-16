import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="unauthorized-container">
      <h1 className="unauthorized-title">Unauthorized Access</h1>
      <p className="unauthorized-text">
        You do not have permission to access this page.
      </p>
      <Link href="/" className="unauthorized-button">
        Return to Home Page
      </Link>
    </div>
  );
}
