export default function Home() {
  return (
    <div style={{
      backgroundColor: '#111',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>AppifyPro</h1>
      <p style={{ fontSize: '1.5rem' }}>Vítej v AppifyPro – tvoříme svobodu v digitálním světě.</p>
    </div>
  );
}