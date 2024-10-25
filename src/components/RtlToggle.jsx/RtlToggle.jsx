import { Helmet } from "react-helmet";

function RtlToggle({ isRtl }) {
  return (
    <>
      {isRtl ? (
        <Helmet>
          <html lang="en" dir="rtl" />
        </Helmet>
      ) : (
        <Helmet>
          <html lang="en" dir="ltr" />
        </Helmet>
      )}
    </>
  );
}

export default RtlToggle;