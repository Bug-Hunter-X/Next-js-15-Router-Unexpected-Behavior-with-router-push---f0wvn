```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/', undefined, { shallow: true }); // Use shallow: true
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```
By adding `{ shallow: true }` to the `router.push()` call, we instruct Next.js to perform a shallow navigation, preventing unnecessary re-renders and resolving the unexpected routing behavior.  This forces the router to update only parts of the page that have actually changed and avoids the rendering issues. If this does not work, more investigation is needed to find other solutions.