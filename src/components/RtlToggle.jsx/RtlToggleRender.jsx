import { Helmet } from "react-helmet";

function RtlToggleRender({ isRtl }) {
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

export default RtlToggleRender;