import { LandingLayout } from '@/components';
import { Button, Icon123 } from '@repo/ui';

function Landing() {
  return (
    <LandingLayout w='100vw' h='100vh' >
      <Button  leftSection={<Icon123/>} >Landing</Button>
    </LandingLayout>
  )
}

export default Landing;