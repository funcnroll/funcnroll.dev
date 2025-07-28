import PageNavigation from "../components/reusable/PageNavigation";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0d0b2b] to-[#16091d] text-white px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h1 className="text-3xl font-bold">Page Not Found.</h1>

        <PageNavigation to="/">Back to Homepage</PageNavigation>
      </div>
    </div>
  );
}

export default NotFound;
