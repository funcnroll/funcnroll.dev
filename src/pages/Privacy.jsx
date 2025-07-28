import GeneralLink from "../components/reusable/GeneralLink";
import PageNavigation from "../components/reusable/PageNavigation";

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0d0b2b] to-[#16091d] text-white px-4 py-12">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h1 className="text-3xl font-bold">Privacy Notice</h1>

        <p>No personal data is being collected on this website.</p>

        <p>
          This site uses{" "}
          <GeneralLink to="https://fonts.bunny.net/">Bunny Fonts</GeneralLink>{" "}
          to serve custom fonts. Bunny Fonts is a GDPR-compliant alternative to
          Google Fonts and does not log or track user data.
        </p>

        <PageNavigation to="/">Back</PageNavigation>
      </div>
    </div>
  );
}

export default Privacy;
