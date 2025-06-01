import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';
import Welcome from './pages/Welcome';

function App() {
    const User = useUser()
  if(User.isSignedIn)
   return ( 
     <Welcome/>
   )
   
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    
  );
}

export default App;
