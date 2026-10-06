import React from 'react';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      backgroundColor: '#f4f4f9',
      color: '#333',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', color: '#0070f3', marginBottom: '10px' }}>
        Welcome to Perfect Express!
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
        আপনার ওয়েবসাইটটি সফলভাবে Vercel-এ লাইভ ডিপ্লয় হয়েছে।
      </p>
    </main>
  );
}