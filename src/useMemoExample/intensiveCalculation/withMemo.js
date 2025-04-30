
import React from 'react';

function WithMemo() {
  const [selectedNum, setSelectedNum] = React.useState(100);

  // updates every second
  const time = useTime(); // assume this returns a string, not Date object

  // ✅ useMemo so primes are recalculated only when selectedNum changes
  const allPrimes = React.useMemo(() => {
    console.log(" ----- re.rendering x2 ----- ");
    const primes = [];
    for (let counter = 2; counter < selectedNum; counter++) {
      console.log(" ----- re.rendering x1 ----- ");
      if (isPrime(counter)) {
        primes.push(counter);
      }
    }
    return primes;
  }, [selectedNum]);

  return (
    <>
    <h3>With Memo (Intensive Calculation)</h3>
      <p className="clock">{time}</p>

      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            const num = Math.min(100_000, Number(event.target.value));
            setSelectedNum(num);
          }}
        />
      </form>

      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNum}:{' '}
        <span className="prime-list">{allPrimes.join(', ')}</span>
      </p>
    </>
  );
}

function useTime() {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString(); // or use your own format
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return time;
}

function isPrime(n) {
  if (n < 2) return false;
  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

export default WithMemo;
