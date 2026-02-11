export default function RootLoading() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "4px solid #e9ecef",
          borderTop: "4px solid #336AEA",
          borderRadius: "50%",
          animation: "bnoon-spin 0.8s linear infinite",
        }}
      />
      <style>{`
        @keyframes bnoon-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
